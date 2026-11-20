(function (root) {
  'use strict';

  const core = typeof module !== 'undefined' && module.exports ? require('./result-core.js') : root.RESULT_CORE;
  const {calculate, recommendationEvidence, resultSnapshot, encodeShareHash, decodeShareHash, createShareUrl} = core;

  async function deliverShare(payload, nav, legacyCopy) {
    let failed = false;
    if (typeof nav.share === 'function') {
      try {
        if (!nav.canShare || nav.canShare(payload)) {
          await nav.share(payload);
          return 'shared';
        }
      } catch (error) {
        if (error?.name === 'AbortError') return 'cancelled';
        failed = true;
      }
    }
    try {
      if (!nav.clipboard?.writeText) throw new Error('NO_CLIPBOARD');
      await nav.clipboard.writeText(payload.url);
      return 'copied';
    } catch {
      if (legacyCopy(payload.url)) return 'copied';
      return failed ? 'failed' : 'manual';
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = {
    calculate, recommendationEvidence, resultSnapshot, encodeShareHash, decodeShareHash,
    createShareUrl, deliverShare
  };
  if (typeof document === 'undefined') return;

  const centerLogo = document.querySelector('.center-logo');
  const centerName = document.querySelector('.center-name');
  if (centerLogo && centerName) {
    const updateBrand = () => {
      const loaded = centerLogo.complete && centerLogo.naturalWidth > 0;
      centerLogo.hidden = !loaded;
      centerName.hidden = loaded;
    };
    centerLogo.addEventListener('load',updateBrand);
    centerLogo.addEventListener('error',updateBrand);
    updateBrand();
  }

  const data = root.TEST_DATA;
  const app = document.getElementById('app');
  const versions = root.RESULT_VERSIONS || {};
  const currentVersion = data.resultVersion;
  const appBase = new URL('.', document.currentScript?.src || root.location.href);
  const homeHref = root.location.protocol === 'file:' ? new URL('index.html', appBase).href : appBase.href;
  const state = {
    screen: 'intro', index: 0, answers: {}, sharedResult: null,
    sharedAnswers: null, sharedVersion: null, shareError: null,
    mentorQuestions: new Map()
  };
  const lastMentorQuestions = new Map();
  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  const isLink = url => {
    try { return ['http:', 'https:'].includes(new URL(url).protocol); }
    catch { return false; }
  };
  const linkButton = (url, label, cls = '') => isLink(url)
    ? `<a class="button ${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`
    : '';

  const counterEndpoint = document.querySelector('meta[name="goatcounter"]')?.content;
  const trackedEvents = new Set();
  let counterReady;

  function loadCounter() {
    if (!counterReady) {
      counterReady = new Promise(resolve => {
        const script = document.createElement('script');
        script.src = 'https://gc.zgo.at/count.js';
        script.async = true;
        script.dataset.goatcounter = counterEndpoint;
        script.dataset.goatcounterSettings = JSON.stringify({no_onload: true});
        script.onload = () => resolve(root.goatcounter);
        script.onerror = () => resolve(null);
        document.head.append(script);
      });
    }
    return counterReady;
  }

  function trackAttempt(path, title) {
    if (!counterEndpoint || root.location.protocol !== 'https:' || trackedEvents.has(path)) return;
    trackedEvents.add(path);
    loadCounter().then(counter => counter?.count?.({path, title, event: true, no_session: true, referrer: ''}))
      .catch(() => { /* Analytics failures never interrupt the quiz. */ });
  }


  function renderIntro() {
    app.innerHTML = `<section class="intro">
      <div class="intro-copy">
        <p class="eyebrow">KOICA 프로젝트 봉사단 · 10기</p>
        <h1 tabindex="-1">나의 해외봉사<br><em>캐릭터</em>는?</h1>
        <p class="intro-keywords"><span>people</span><span>peace</span><span>planet</span><span>prosperity</span><span>partnership</span></p>
        <p class="lead">해외봉사 현장의 여덟 장면을 골라보세요.<br>관심 있는 활동과 어울리는 프로젝트를 알아봐요.</p>
        <div class="intro-meta"><span>8문항</span><span>약 2분</span><span>6개 프로젝트</span></div>
        <button id="start" class="button primary">테스트 시작하기 <span aria-hidden="true">↗</span></button>
        <p class="small-note intro-disclaimer">${esc(data.disclaimer)}</p>
      </div>
      <div class="illustration" aria-hidden="true">
        <div class="orbit"></div><div class="ticket"><b class="ticket-title">나의 해외봉사<br>캐릭터는?</b>
        <div class="ticket-stamps"><i>✳</i><i>↗</i><i>♡</i></div><small>people · peace · planet · prosperity · partnership</small>
        <div class="ticket-dash"></div><div class="ticket-bottom"><span>나답게 / 함께</span><b>01 — 06</b></div></div>
        <div class="sticky">관심 있는 활동부터<br>하나씩 알아봐요.</div><span class="spark">✺</span>
      </div></section>`;
    document.getElementById('start').onclick = () => {
      try {
        core.assertVersionMatches(data, versions, currentVersion);
      } catch (error) {
        state.shareError = error.message;
        state.screen = 'share-error';
        render();
        return;
      }
      state.screen = 'quiz';
      render();
      trackAttempt('test-start', '테스트 시작');
    };
  }

  function renderQuiz() {
    const q = data.questions[state.index];
    const total = data.questions.length;
    const current = state.index + 1;
    const selected = state.answers[q.id];
    app.innerHTML = `<section class="quiz">
      <div class="quiz-top"><span class="eyebrow">SCENE ${String(current).padStart(2, '0')}</span>
        <span class="counter">${current}<span> / ${total}</span></span></div>
      <div class="progress" role="progressbar" aria-label="질문 진행" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${current}">
        <span style="width:${current / total * 100}%"></span></div>
      <h1 tabindex="-1"><span class="sr-only">${total}개 중 ${current}번째 질문. </span>${esc(q.title)}</h1>
      <div class="options" role="group" aria-label="답변 하나 선택">${q.options.map(o => `
        <button class="option ${selected === o.id ? 'selected' : ''}" data-answer="${o.id}" aria-pressed="${selected === o.id}">
          <span class="option-key" aria-hidden="true">${o.id}</span><span>${esc(o.text)}</span>
          <span class="option-check" aria-hidden="true">${selected === o.id ? '✓' : '↗'}</span></button>`).join('')}</div>
      <div class="question-nav">
        <button id="back" class="button secondary" ${current === 1 ? 'disabled' : ''}><span aria-hidden="true">←</span><span>이전 질문</span></button>
        <button id="next" class="button secondary" ${selected ? '' : 'disabled'}><span>${current === total ? '결과 보기' : '다음 질문'}</span><span aria-hidden="true">→</span></button>
      </div></section>`;

    const advance = () => {
      if (!state.answers[q.id]) return;
      if (current === total) state.screen = 'result';
      else state.index++;
      render();
    };
    app.querySelectorAll('[data-answer]').forEach(button => {
      button.onclick = () => {
        state.answers[q.id] = button.dataset.answer;
        advance();
      };
    });
    document.getElementById('back').onclick = () => {
      if (state.index === 0) return;
      state.index--;
      render();
    };
    document.getElementById('next').onclick = advance;
  }

  function renderEvidence(project, limit) {
    const evidence = project.sharedEvidence || recommendationEvidence(project, limit);
    return `<ul class="evidence-list">${evidence.map(c => `<li${c.limited ? ' class="limited-evidence"' : ''}>
      <strong class="evidence-answer">${esc(c.answer)}</strong>
      <p class="evidence-explanation">${esc(c.explanation)}</p>
    </li>`).join('')}</ul>`;
  }

  function projectTitle(p) {
    return `${p.country} ${p.title}`;
  }

  function mentorQuestionFor(project) {
    if (!state.mentorQuestions.has(project.id)) {
      const questions = project.mentorQuestions;
      const fresh = questions.filter(question => question !== lastMentorQuestions.get(project.id));
      const candidates = fresh.length ? fresh : questions;
      const question = candidates[Math.floor(Math.random() * candidates.length)];
      state.mentorQuestions.set(project.id, question);
      lastMentorQuestions.set(project.id, question);
    }
    return state.mentorQuestions.get(project.id);
  }

  function renderResult() {
    const result = state.sharedResult || calculate(data, state.answers);
    const [primary, alternate] = result.ranked;
    const {character} = primary;
    const characterName = character.displayName || character.name;
    const {noticeUrl, schedule} = data.recruitment;
    const recruitmentLink = linkButton(noticeUrl, '프봉10기 모집 안내 보기', 'primary')
      || '<button type="button" class="button primary" disabled title="공식 모집 공고 링크를 준비 중입니다.">프봉10기 모집 안내 보기</button>';
    const mentoringLink = linkButton(data.mentoringUrl, '선배들의 비밀과외 신청하기', 'secondary')
      || '<button type="button" class="button secondary unavailable" disabled>선배들의 비밀과외 신청하기 · 준비 중</button>';

    app.innerHTML = `<section class="result result-stage2 result-stage4${state.sharedResult ? ' shared-result' : ''}">
      <section class="result-card" style="--character-accent:${esc(primary.accent)}" aria-labelledby="result-heading">
        <header class="result-card-header">
          <p class="result-caption">프봉 10기 · ${state.sharedResult ? '공유받은 해외봉사 캐릭터' : '나의 해외봉사 캐릭터'}</p>
          <div class="character-heading">
            <span class="result-character-icon" aria-hidden="true">${esc(character.emoji)}</span>
            <h1 id="result-heading" tabindex="-1"><span class="character-name">${esc(characterName)}</span> <span class="character-activity"><span aria-hidden="true">|</span> ${esc(character.activityType)}</span></h1>
          </div>
        </header>
        <div class="recommendation-pair">${[primary, alternate].map((project, index) => `
          <article class="recommendation" data-project-id="${esc(project.id)}" aria-labelledby="recommendation-${index + 1}">
            <p class="recommendation-rank">${index + 1}순위 추천 프로젝트</p>
            <h2 id="recommendation-${index + 1}"><span class="project-country"><span class="project-flag" aria-hidden="true">${esc(project.flag)}</span> ${esc(project.country)}</span> ${esc(project.title)}</h2>
            <p class="project-summary">${esc(project.summary)}</p>
            <div class="recommendation-reasons" data-reason-id="${esc(project.id)}" aria-labelledby="reason-${index + 1}">
              <h3 id="reason-${index + 1}">추천 이유</h3>
              ${renderEvidence(project, 1)}
            </div>
          </article>`).join('')}
        </div>
      </section>
      <p class="recruitment-period"><span>프봉 10기 지원서 접수</span><span class="period-divider" aria-hidden="true">|</span><span>${esc(schedule)}</span></p>
      <section class="result-section mentoring-invite">
        <h2>이런 점이 궁금하다면?</h2>
        <p class="mentor-invite">비밀과외에서 선배에게 물어보세요!</p>
        <div class="follow-up">${mentoringLink}${recruitmentLink}</div>
      </section>
      ${state.sharedResult ? '<p class="shared-invite">나는 어떤 유형일까? 나에게 어울리는 프로젝트도 찾아보세요.</p>' : ''}
      <div class="result-actions">
        ${state.sharedResult ? '' : '<button id="edit" class="text-button">← 답변 돌아보기</button>'}
        <button id="copy" type="button" class="button secondary">${state.sharedResult ? '결과 다시 공유하기' : '내 결과 공유하기'}</button>
        ${state.sharedResult
          ? `<a id="restart" class="button primary" href="${esc(homeHref)}">나도 테스트하기</a>`
          : '<button id="restart" type="button" class="button secondary">다시 테스트하기</button>'}
      </div>
      <p id="copy-status" class="small-note" role="status"></p>
      <textarea id="copy-text" aria-label="공유할 결과 링크" rows="5" readonly hidden></textarea>
      <p class="disclaimer">${esc(data.disclaimer)}</p>
    </section>`;

    if (!state.sharedResult) trackAttempt('test-complete', '테스트 완료');
    const edit = app.querySelector('#edit');
    if (edit) edit.onclick = () => {
      state.screen = 'quiz';
      state.index = data.questions.length - 1;
      render();
    };
    const restart = app.querySelector('#restart');
    if (restart.tagName === 'BUTTON') restart.onclick = reset;
    app.querySelector('#copy').onclick = async () => {
      const button = app.querySelector('#copy');
      const status = app.querySelector('#copy-status');
      const field = app.querySelector('#copy-text');
      status.textContent = '';
      field.hidden = true;
      let url;
      try {
        url = state.sharedResult && !state.sharedAnswers
          ? createShareUrl(result, appBase.href)
          : core.createShortShareUrl(
            state.sharedAnswers || state.answers,
            state.sharedVersion || currentVersion,
            data.shareBaseUrl || appBase.href,
            versions
          );
        field.value = url;
      } catch (error) {
        status.textContent = error.message === 'WEB_ADDRESS_REQUIRED'
          ? '결과 공유는 웹주소로 접속했을 때 사용할 수 있어요.'
          : '결과 링크를 만들지 못했어요. 잠시 후 다시 시도해 주세요.';
        return;
      }
      button.disabled = true;
      try {
        const outcome = await deliverShare({
          url
        }, root.navigator, link => {
          field.hidden = false;
          field.value = link;
          field.focus();
          field.select();
          try {
            if (document.execCommand?.('copy')) {
              field.hidden = true;
              button.focus();
              return true;
            }
          } catch { /* Leave the URL selected for manual copying. */ }
          return false;
        });
        status.textContent = {
          shared: '', // A resolved native share does not prove delivery on every device.
          cancelled: '공유를 취소했어요.',
          copied: '결과 링크가 복사됐어요.',
          manual: '아래 링크를 직접 복사해 주세요.',
          failed: '공유하지 못했어요. 아래 링크를 직접 복사해 주세요.'
        }[outcome];
      } finally {
        button.disabled = false;
      }
    };
  }

  function renderShareError() {
    const messages = {
      UNSUPPORTED_RESULT_VERSION: '이 결과 링크의 테스트 버전은 현재 지원하지 않아요. 새로운 테스트를 시작해 주세요.',
      RESULT_VERSION_MISMATCH: '테스트 설정을 확인하고 있어요. 잠시 후 다시 이용해 주세요.',
      MISSING_RESULT_CODE: '공유 링크에 결과 코드가 빠져 있어요. 전달받은 링크 전체를 다시 확인해 주세요.'
    };
    app.innerHTML = `<section class="share-error result">
      <h1 tabindex="-1">결과 링크를 확인해 주세요</h1>
      <p>${esc(messages[state.shareError] || '공유 링크가 올바르지 않아요. 링크 전체를 다시 확인하거나 새로운 테스트를 시작해 주세요.')}</p>
      <button id="restart" class="button primary">테스트 시작하기</button>
    </section>`;
    document.getElementById('restart').onclick = reset;
  }

  function readSharedResult() {
    state.answers = {};
    state.index = 0;
    state.sharedResult = null;
    state.sharedAnswers = null;
    state.sharedVersion = null;
    state.shareError = null;
    try {
      const route = core.parseResultUrl(root.location.href, appBase.href);
      if (route) {
        const restored = core.restoreResult(versions, route.version, route.code);
        state.sharedResult = restored.result;
        state.sharedAnswers = restored.answers;
        state.sharedVersion = restored.version;
      } else {
        state.sharedResult = decodeShareHash(root.location.hash);
      }
      state.screen = state.sharedResult ? 'result' : 'intro';
    } catch (error) {
      state.shareError = error.message;
      state.screen = 'share-error';
    }
  }

  function reset() {
    state.screen = 'intro';
    state.index = 0;
    state.answers = {};
    state.sharedResult = null;
    state.sharedAnswers = null;
    state.sharedVersion = null;
    state.shareError = null;
    root.history.replaceState(null, '', homeHref);
    state.mentorQuestions.clear();
    trackedEvents.clear();
    render();
  }

  function render(moveFocus = true) {
    if (state.screen === 'intro') renderIntro();
    else if (state.screen === 'quiz') renderQuiz();
    else if (state.screen === 'share-error') renderShareError();
    else renderResult();
    if (moveFocus) {
      app.querySelector('h1').focus({preventScroll: true});
      root.scrollTo(0, 0);
    }
  }

  document.getElementById('home').onclick = reset;
  root.addEventListener('hashchange', () => { readSharedResult(); render(); });
  root.addEventListener('popstate', () => { readSharedResult(); render(); });
  readSharedResult();
  render(false);
})(typeof window !== 'undefined' ? window : globalThis);
