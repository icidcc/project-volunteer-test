(function(root){
 'use strict';
 const node=typeof module!=='undefined'&&module.exports;
 const data=node?require('./versions/v2.js'):root.RESULT_VERSIONS.v2;
 const legacy=node?require('./result-core.js'):root.RESULT_CORE;
 const option=(answers,q)=>data.questions[q-1].options.find(o=>o.id===answers['Q'+q]);
 function validate(answers){if(!answers||data.questions.some((q,i)=>!option(answers,i+1)))throw new Error('INCOMPLETE_ANSWERS');return answers;}
 // Presentation-only draw among exact equals. Not a suitability score or ID ordering.
 // Rehash a collision with an explicit nonce; never fall back to input-array order.
 function hash(text){let x=2166136261;for(let i=0;i<text.length;i++)x=Math.imul(x^text.charCodeAt(i),16777619);x^=x>>>16;x=Math.imul(x,0x85ebca6b);x^=x>>>13;x=Math.imul(x,0xc2b2ae35);return (x^(x>>>16))>>>0;}
 function draw(candidates,answers,lens){const seed=[2,3,5,6,8].map(q=>answers['Q'+q]).join('');let remaining=candidates;
  for(let nonce=0;nonce<32;nonce++){let best=-1,next=[];for(const p of remaining){const value=hash(`${data.tieRule}|${lens}|${seed}|${nonce}|${p.id}`);if(value>best){best=value;next=[p];}else if(value===best)next.push(p);}if(next.length===1)return next[0];remaining=next;}throw new Error('UNRESOLVED_PRESENTATION_DRAW');}
 function compare(a,b){for(let i=0;i<a.length;i++)if(a[i]!==b[i])return a[i]-b[i];return 0;}
 function exactCandidates(rows,tuple){let best=null,candidates=[];for(const row of rows){const value=tuple(row),c=best?compare(value,best):1;if(c>0){best=value;candidates=[row];}else if(c===0)candidates.push(row);}return candidates;}
 function activityScores(project,answers){const selected=[2,5,8].map(q=>data.supplemental.find(r=>r.project===project.id&&r.option==='Q'+q+answers['Q'+q]));const atoms={};
  for(const r of selected)if(r.points&&(!atoms[r.fact.atom]||r.points>atoms[r.fact.atom].points))atoms[r.fact.atom]=r;
  const facts=Object.values(atoms),specific=facts.filter(r=>!project.genericAtoms.includes(r.fact.atom)).sort((a,b)=>b.points-a.points||[5,8,2].indexOf(Number(a.option[1]))-[5,8,2].indexOf(Number(b.option[1])));
  return {selected,facts,specific,U:facts.reduce((n,r)=>n+r.points,0),specificU:specific.reduce((n,r)=>n+r.points,0),evidenceGrade:Math.max(0,...specific.map(r=>r.points))};}
 function scoreProjects(answers){validate(answers);return data.projects.map(p=>({...p,F:p.field['ABCD'.indexOf(answers.Q3)],V:p.scene['ABCD'.indexOf(answers.Q6)],...activityScores(p,answers)}));}
 function character(answers){validate(answers);const scores=data.characters.map(c=>{const raw=[1,4,7].reduce((n,q)=>n+(c.core['Q'+q+answers['Q'+q]]||0),0),support=Math.min(2,[5,8].reduce((n,q)=>n+(c.support['Q'+q+answers['Q'+q]]||0),0));return {...c,raw,coreScore:raw*c.scale,support,score:raw*c.scale*3+support};});const candidates=exactCandidates(scores,r=>[r.score]);return {characters:candidates,scores,mode:candidates.length===1?'single':candidates.length===2?'dual':'mixed'};}
 function evidenceItems(rows){return rows.map(r=>({option:r.option,answer:optionText(r.option),activity:r.fact.description,points:r.points,unit:r.fact.unit,cell:r.fact.cell,quote:r.fact.quote,scope:r.fact.scope}));}
 function optionText(id){return data.questions[Number(id[1])-1].options.find(o=>o.id===id[2]).text;}
 function describe(p,lens,answers,candidates){const fieldDifferent=p.F===0,items=lens==='interest'?evidenceItems(p.facts.filter(r=>r.points===2).slice(0,1)):evidenceItems(p.specific);
  const label=lens==='interest'?'내 관심사에서 출발한 프로젝트':p.evidenceGrade===0?'또 다른 분야를 알아볼 프로젝트':'내 활동 스타일에서 발견한 프로젝트';
  let reason=lens==='interest'?`‘${option(answers,3).text}’에 관심을 보였어요. ${p.country}에서는 ‘${p.summary}’ 프로젝트를 진행해요.`
   :p.evidenceGrade===0?'활동 방식 답변만으로는 뚜렷한 연결을 찾기 어려워, 다른 사업도 알아볼 수 있도록 소개해요. 개인의 관심과 강하게 일치한다는 뜻은 아니에요.'
   :`‘${optionText(p.specific[0].option)}’라는 선택에서 연결점을 찾았어요. 이 사업의 청년 활동에는 ‘${p.specific[0].fact.description.replace('지역 교사 ToT','지역 교사 연수')}’ 등이 있어요.${p.evidenceGrade===1?' 일부 연결되는 활동으로, 구체적인 수행 범위는 더 확인해 주세요.':''}`;
  const notices=[];
  if(lens==='interest'){notices.push(`이 사업의 주요 활동 대상은 다음과 같아요: ${p.targets}.`);if(p.V===0)notices.push('관심 분야는 연결되지만, 고른 활동 현장까지 맞는지는 현재 자료로 확인하기 어려워요.');else if(p.V===1)notices.push('고른 현장과 일부 연결되지만, 구체적인 대상과 활동 환경에는 차이가 있어요.');}
  if(lens==='activity'&&fieldDifferent)notices.push(`관심 분야 답변과 다른 ${p.summary} 사업을 활동 방식이라는 새로운 관점에서 소개해요.`);
  if(lens==='activity'&&p.evidenceGrade===1)notices.push('확인된 활동과 일부 연결되는 탐색 결과예요.');
  if(answers.Q3==='B')notices.push('언어·문화·역사 중 어느 주제에 더 관심이 있는지는 이 답변만으로 구별하기 어려워요.');
  if(answers.Q3==='D'&&lens==='interest')notices.push('관광과 연결된 직업 프로그램을 생각했다는 해석이에요. 일반 직무교육만을 뜻했다면 관심을 더 확인해 주세요.');
  if(candidates.length>1)notices.push('연결 근거가 같은 여러 후보 중 하나를 소개해요. 다른 동등한 후보보다 더 적합하다는 뜻은 아니에요.');
  const explorationActivity=lens==='activity'&&p.evidenceGrade===0?data.supplemental.find(r=>r.project===p.id&&r.option==='Q5A'&&r.fact)?.fact:null;
  return {lens,id:p.id,country:p.country,flag:p.flag,title:p.title,summary:p.summary,label,reason,activities:items,explorationActivity,notices,weak:lens==='activity'&&p.evidenceGrade<2,exploreOnly:lens==='activity'&&p.evidenceGrade===0,fieldDifferent,tieCandidates:candidates.map(r=>r.id),tieMethod:candidates.length>1?data.tieRule:'evidence',evidence:{F:p.F,V:p.V,U:p.U,specificU:p.specificU,grade:p.evidenceGrade}};
 }
 function calculate(answers){const rows=scoreProjects(answers);
  // A preserves interest/purpose priority. B has its OWN activity-first comparison.
  const candidatesA=exactCandidates(rows.filter(r=>r.F>0),r=>[r.F,r.V,r.U]);const A=draw(candidatesA,answers,'interest');
  const candidatesB=exactCandidates(rows.filter(r=>r.id!==A.id),r=>[r.evidenceGrade,r.specificU,r.V,r.F,r.U]);const B=draw(candidatesB,answers,'activity');
  return {version:'v2',questionVersion:data.questionVersion,recommendationVersion:data.recommendationVersion,scoreVersion:data.scoreVersion,projects:[describe(A,'interest',answers,candidatesA),describe(B,'activity',answers,candidatesB)],character:character(answers),audit:{rows:rows.map(r=>({id:r.id,F:r.F,V:r.V,U:r.U,specificU:r.specificU,grade:r.evidenceGrade})),candidatesA:candidatesA.map(r=>r.id),candidatesB:candidatesB.map(r=>r.id)}};
 }
 function encode(answers){validate(answers);return legacy.encodeAnswers(data,answers);}
 function restore(code){const answers=legacy.decodeAnswers(data,code);return {answers,result:calculate(answers)};}
 function shareUrl(answers,base){const u=new URL(base);if(!['http:','https:'].includes(u.protocol))throw new Error('WEB_ADDRESS_REQUIRED');return new URL('r/v2/?c='+encode(answers),u).href;}
 function route(href,base){const u=new URL(href),b=new URL(base);if(u.origin!==b.origin||!u.pathname.startsWith(b.pathname))throw new Error('INVALID_RESULT_URL');const rel=u.pathname.slice(b.pathname.length);if(rel==='v2/'||rel==='v2/index.html'||rel==='v2'){if(u.search||u.hash)throw new Error('INVALID_RESULT_URL');return null;}if(rel!=='r/v2/'&&rel!=='r/v2/index.html'&&rel!=='r/v2')throw new Error('INVALID_RESULT_URL');if(u.hash||u.searchParams.getAll('c').length!==1||[...u.searchParams.keys()].some(k=>k!=='c'))throw new Error('INVALID_RESULT_URL');return restore(u.searchParams.get('c'));}
 function og(result,code,origin){const types=result.character.characters;return {title:types.map(c=>c.emoji+' '+c.name).join(' · ')+' | 나에게 맞는 프로젝트 찾기',description:result.projects.map(p=>p.country+' · '+p.title).join(' / ')+' | 나와 연결되는 두 가지 프로젝트',url:origin+'/r/v2/?c='+code,image:origin+'/og/v2/'+data.imageRevision+'/'+code+'.png'};}
 const api={data,validate,hash,draw,compare,exactCandidates,activityScores,scoreProjects,character,calculate,encode,restore,shareUrl,route,og};if(node)module.exports=api;else root.RESULT_V2=api;
})(typeof window!=='undefined'?window:globalThis);
