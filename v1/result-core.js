(function (root) {
  'use strict';
  function calculate(data, answers) {
    const chosen = data.questions.map(q => ({
      q, option: q.options.find(o => o.id === answers[q.id])
    }));
    if (chosen.some(({option}) => !option)) throw new Error('8개 문항에 모두 답해주세요.');

    const ranked = data.projects.map(project => {
      const contributions = chosen.map(({q, option}) => ({
        questionId: q.id, optionId: option.id, answer: option.text, raw: option.scores[project.id],
        points: option.scores[project.id] * q.weight, core: q.weight === 2
      }));
      return {
        ...project, contributions,
        score: contributions.reduce((sum, c) => sum + c.points, 0),
        domainScore: contributions.reduce((sum, c) => sum + (c.core ? c.points : 0), 0),
        coreCount: contributions.filter(c => c.raw === 4).length
      };
    }).sort((a, b) => b.score - a.score || b.domainScore - a.domainScore
      || b.coreCount - a.coreCount || a.id.localeCompare(b.id));
    return { ranked, role: chosen.find(({option}) => option.role).option.role };
  }


  // v1 stores only the displayed result, not personal details or the full answers.
  // Keep this decoder when introducing a future format so old links still work.
  const SHARE_VERSION = 'v1';
  const SHARE_LIMIT = 8000;

  function resultSnapshot(result) {
    const first = result.ranked[0];
    return {
      c: [first.character.displayName || first.character.name, first.character.activityType, first.character.emoji],
      p: result.ranked.slice(0, 2).map(p => {
        const evidence = (p.sharedEvidence || recommendationEvidence(p, 1))[0];
        return [p.id, p.country, p.title, p.flag, p.summary, p.accent,
          evidence.answer, evidence.explanation, !!evidence.limited];
      })
    };
  }

  function checksum(text) {
    // Accidental-corruption check, not a signature or proof of authenticity.
    let value = 2166136261;
    for (let i = 0; i < text.length; i++) value = Math.imul(value ^ text.charCodeAt(i), 16777619);
    return (value >>> 0).toString(16).padStart(8, '0');
  }

  function validateSnapshot(snapshot) {
    const text = (s, max) => typeof s === 'string' && s.trim().length > 0 && s.length <= max
      && !/[\u0000-\u001f\u007f\u202a-\u202e\u2066-\u2069]/u.test(s);
    if (!snapshot || Array.isArray(snapshot) || typeof snapshot !== 'object'
      || Object.keys(snapshot).sort().join(',') !== 'c,p'
      || !Array.isArray(snapshot.c) || snapshot.c.length !== 3
      || !snapshot.c.every((s, i) => text(s, [80, 60, 20][i]))
      || !Array.isArray(snapshot.p) || snapshot.p.length !== 2) throw new Error('INVALID_RESULT');
    for (const p of snapshot.p) {
      if (!Array.isArray(p) || p.length !== 9 || typeof p[0] !== 'string' || !/^P0[1-6]$/.test(p[0])
        || !p.slice(1, 8).every((s, i) => text(s, [40, 180, 20, 350, 7, 350, 500][i]))
        || !/^#[0-9a-f]{6}$/i.test(p[5]) || typeof p[8] !== 'boolean') throw new Error('INVALID_RESULT');
    }
    if (snapshot.p[0][0] === snapshot.p[1][0]) throw new Error('INVALID_RESULT');
    return snapshot;
  }

  function encodeShareHash(result) {
    const snapshot = validateSnapshot(resultSnapshot(result));
    const bytes = new TextEncoder().encode(JSON.stringify(snapshot));
    const payload = btoa(Array.from(bytes, b => String.fromCharCode(b)).join(''))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const hash = `#result=${SHARE_VERSION}.${payload}.${checksum(payload)}`;
    if (hash.length > SHARE_LIMIT) throw new Error('RESULT_TOO_LONG');
    return hash;
  }

  function decodeShareHash(hash) {
    if (!hash) return null;
    if (typeof hash !== 'string' || hash.length > SHARE_LIMIT) throw new Error('INVALID_RESULT');
    const match = /^#result=(v\d+)\.([A-Za-z0-9_-]+)\.([a-f0-9]{8})$/.exec(hash);
    if (!match || match[1] !== SHARE_VERSION || checksum(match[2]) !== match[3]) throw new Error('INVALID_RESULT');
    const payload = match[2].replace(/-/g, '+').replace(/_/g, '/');
    const bytes = Uint8Array.from(atob(payload), c => c.charCodeAt(0));
    const snapshot = validateSnapshot(JSON.parse(new TextDecoder('utf-8', {fatal: true}).decode(bytes)));
    return {
      ranked: snapshot.p.map((p, index) => ({
        id: p[0], country: p[1], title: p[2], flag: p[3], summary: p[4], accent: p[5],
        character: index === 0 ? {displayName: snapshot.c[0], activityType: snapshot.c[1], emoji: snapshot.c[2]} : {},
        sharedEvidence: [{answer: p[6], explanation: p[7], limited: p[8]}]
      }))
    };
  }

  function createShareUrl(result, href) {
    const url = new URL(href);
    if (!['https:', 'http:'].includes(url.protocol)) throw new Error('WEB_ADDRESS_REQUIRED');
    url.search = ''; // Do not forward unrelated query parameters.
    url.hash = encodeShareHash(result);
    return url.href;
  }

  function recommendationEvidence(project, limit) {
    const evidence = project.contributions.filter(c => c.raw >= 3)
      .map(c => ({...c, explanation: project.reasons?.[c.questionId + c.optionId]}))
      .filter(c => c.explanation)
      .sort((a, b) => b.points - a.points || b.raw - a.raw || a.questionId.localeCompare(b.questionId))
      .filter((c, index, all) => all.findIndex(other => other.explanation === c.explanation) === index)
      .slice(0, limit);
    if (evidence.length) return evidence;
    const closest = project.contributions.filter(c => c.raw > 0)
      .sort((a, b) => b.points - a.points || b.raw - a.raw || a.questionId.localeCompare(b.questionId))[0];
    return closest ? [{...closest, limited: true, explanation: project.limitedReason
      || '전체 선택을 비교해 함께 살펴볼 프로젝트로 안내해요. 핵심 활동과 직접 맞닿은 답변은 적었어요.'}] : [];
  }


  function validateAnswerSchema(data) {
    if (!Array.isArray(data?.questions) || data.questions.length !== 8
      || new Set(data.questions.map(q => q.id)).size !== 8
      || data.questions.some(q => !Array.isArray(q.options) || q.options.length !== 4
        || new Set(q.options.map(option => option.id)).size !== 4)) {
      throw new Error('UNSUPPORTED_ANSWER_SCHEMA');
    }
  }

  function encodeAnswers(data, answers) {
    validateAnswerSchema(data);
    let value = 0;
    for (const question of data.questions) {
      const digit = question.options.findIndex(option => option.id === answers?.[question.id]);
      if (digit < 0) throw new Error('INCOMPLETE_ANSWERS');
      value = value * 4 + digit;
    }
    return value.toString(36).toUpperCase().padStart(4, '0');
  }

  function decodeAnswers(data, code) {
    validateAnswerSchema(data);
    if (typeof code !== 'string' || !/^[0-9A-Z]{4}$/.test(code)) throw new Error('INVALID_RESULT_CODE');
    let value = parseInt(code, 36);
    if (value > 65535) throw new Error('INVALID_RESULT_CODE');
    const digits = Array(8);
    for (let i = 7; i >= 0; i--) {
      digits[i] = value % 4;
      value = Math.floor(value / 4);
    }
    return Object.fromEntries(data.questions.map((question, i) => [question.id, question.options[digits[i]].id]));
  }

  function getVersion(versions, version) {
    if (!/^v[1-9][0-9]*$/.test(version) || !Object.hasOwn(versions, version)) {
      throw new Error('UNSUPPORTED_RESULT_VERSION');
    }
    return versions[version];
  }

  function versionContent(data) {
    return {questions: data.questions, projects: data.projects, roles: data.roles};
  }

  function assertVersionMatches(data, versions, version) {
    const frozen = getVersion(versions, version);
    if (JSON.stringify(versionContent(data)) !== JSON.stringify(versionContent(frozen))) {
      throw new Error('RESULT_VERSION_MISMATCH');
    }
  }

  function restoreResult(versions, version, code) {
    const frozen = getVersion(versions, version);
    const answers = decodeAnswers(frozen, code);
    return {answers, version, result: calculate(frozen, answers)};
  }

  function createShortShareUrl(answers, version, baseHref, versions) {
    const base = new URL(baseHref);
    if (!['https:', 'http:'].includes(base.protocol)) throw new Error('WEB_ADDRESS_REQUIRED');
    const frozen = getVersion(versions, version);
    const code = encodeAnswers(frozen, answers);
    const url = new URL('r/' + version + '/', base);
    url.search = '?c=' + code;
    url.hash = '';
    return url.href;
  }

  function parseResultUrl(href, baseHref) {
    const url = new URL(href);
    const base = new URL(baseHref);
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) throw new Error('INVALID_RESULT_URL');
    const route = url.pathname.slice(base.pathname.length);
    if (route === '' || route === 'index.html' || route === encodeURIComponent('테스트_바로열기.html')) {
      if (url.searchParams.has('c')) throw new Error('INVALID_RESULT_URL');
      return null;
    }
    const match = /^r\/(v[1-9][0-9]*)\/?$/.exec(route);
    if (!match || url.hash) throw new Error('INVALID_RESULT_URL');
    const codes = url.searchParams.getAll('c');
    if (codes.length !== 1 || !codes[0]) throw new Error('MISSING_RESULT_CODE');
    return {version: match[1], code: codes[0]};
  }

  const api = {
    calculate, recommendationEvidence, resultSnapshot, encodeShareHash, decodeShareHash, createShareUrl,
    encodeAnswers, decodeAnswers, getVersion, assertVersionMatches, restoreResult, createShortShareUrl, parseResultUrl
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RESULT_CORE = api;
})(typeof window !== 'undefined' ? window : globalThis);
