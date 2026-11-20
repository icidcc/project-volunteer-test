(function(root){'use strict';
 const engine=root.RESULT_V2,settings=root.V2_SETTINGS,app=document.getElementById('app');
 const appBase=new URL('../',document.currentScript.src),home=new URL('v2/',appBase).href;
 const state={screen:'intro',answers:{},index:0,shared:false,result:null};
 const counted=new Set();let counterReady;
 function track(event){if(location.protocol!=='https:'||!settings.counterEndpoint||counted.has(event))return;counted.add(event);if(!counterReady)counterReady=new Promise(resolve=>{const s=document.createElement('script');s.src='https://gc.zgo.at/count.js';s.async=true;s.dataset.goatcounter=settings.counterEndpoint;s.dataset.goatcounterSettings=JSON.stringify({no_onload:true});s.onload=()=>resolve(root.goatcounter);s.onerror=()=>resolve(null);document.head.append(s);});counterReady.then(c=>c?.count?.({path:'v2-'+event,title:event==='test-start'?'테스트 시작 · v2':'테스트 완료 · v2',event:true,no_session:true,referrer:''})).catch(()=>{});}
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const safe=u=>{try{return ['https:','http:'].includes(new URL(u).protocol);}catch{return false;}};
 const external=(url,label)=>safe(url)?`<a class="button secondary" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`:`<button class="button secondary" disabled>${esc(label)} · 준비 중</button>`;
 function reset(){Object.assign(state,{screen:'intro',answers:{},index:0,shared:false,result:null});history.replaceState(null,'',home);render();}
 document.getElementById('home').onclick=e=>{e.preventDefault();reset();};
 const logo=document.querySelector('.center-logo'),centerName=document.querySelector('.center-name');
 const updateBrand=()=>{const loaded=logo.complete&&logo.naturalWidth>0;logo.hidden=!loaded;centerName.hidden=loaded;};
 logo.addEventListener('load',updateBrand);logo.addEventListener('error',updateBrand);updateBrand();
 function intro(){app.innerHTML=`<section class="intro">
  <div class="intro-copy">
   <p class="eyebrow">KOICA 프로젝트 봉사단 · 10기</p>
   <h1 tabindex="-1">나의 해외봉사<br><em>캐릭터</em>는?</h1>
   <p class="intro-keywords"><span>people</span><span>peace</span><span>planet</span><span>prosperity</span><span>partnership</span></p>
   <p class="lead">해외봉사 현장의 여덟 장면을 골라보세요.<br>관심 있는 활동과 어울리는 프로젝트를 알아봐요.</p>
   <div class="intro-meta"><span>8문항</span><span>약 2분</span><span>7개 프로젝트</span></div>
   <button id="start" class="button primary">테스트 시작하기 <span aria-hidden="true">↗</span></button>
   <p class="small-note intro-disclaimer">${esc(settings.disclaimer)}</p>
  </div>
  <div class="illustration" aria-hidden="true">
   <div class="orbit"></div><div class="ticket"><b class="ticket-title">나의 해외봉사<br>캐릭터는?</b>
    <div class="ticket-stamps"><i>✳</i><i>↗</i><i>♡</i></div><small>people · peace · planet · prosperity · partnership</small>
    <div class="ticket-dash"></div><div class="ticket-bottom"><span>나답게 / 함께</span><b>01 — 07</b></div></div>
   <div class="sticky">관심 있는 활동부터<br>하나씩 알아봐요.</div><span class="spark">✺</span>
  </div></section>`;app.querySelector('#start').onclick=()=>{state.screen='quiz';render();};}
 function quiz(){const q=engine.data.questions[state.index],selected=state.answers[q.id],n=state.index+1;app.innerHTML=`<section class="quiz"><div class="quiz-top"><span class="eyebrow">해외봉사 현장의 한 장면</span><span class="counter">${n}<span> / 8</span></span></div><div class="progress" role="progressbar" aria-label="질문 진행" aria-valuemin="0" aria-valuemax="8" aria-valuenow="${n}"><span style="width:${n/8*100}%"></span></div><h1 tabindex="-1">${esc(q.title)}</h1><div class="options" role="group" aria-label="답변 하나 선택">${q.options.map(o=>`<button class="option${o.id===selected?' selected':''}" data-answer="${o.id}" aria-pressed="${o.id===selected}"><span class="option-key">${o.id}</span><span>${esc(o.text)}</span></button>`).join('')}</div><div class="question-nav"><button id="back" class="button secondary" ${n===1?'disabled':''}>이전 질문</button><button id="next" class="button secondary" ${selected?'':'disabled'}>${n===8?'결과 보기':'다음 질문'}</button></div></section>`;
 const advance=()=>{if(!state.answers[q.id])return;if(n===8){state.result=engine.calculate(state.answers);state.screen='result';}else state.index++;render();};for(const btn of app.querySelectorAll('[data-answer]'))btn.onclick=()=>{state.answers[q.id]=btn.dataset.answer;advance();};app.querySelector('#next').onclick=advance;app.querySelector('#back').onclick=()=>{state.index--;render();};}
 // Display copy only. Each representative phrase is present in the frozen youth evidence.
 const representativeActivities={
  timor:'학생 대상 보건·위생교육',
  rwanda:'학교 평화교육 프로그램',
  'sri-lanka':'한국어 회화 프로그램',
  uganda:'공무원 대상 컴퓨터 기초·중급 교육',
  uzbekistan:'찾아가는 한국어교육',
  cameroon:'컴퓨터 교사와 정규수업 협력티칭',
  tanzania:'지역 관광자원 조사 및 관광콘텐츠 기획'
 };
 // Only distinctive youth activities may replace the representative activity.
 // These keys refer to existing, selected evidence; they do not affect scoring.
 const selectedActivities={
  rwanda:{'Peace Club 평화 영화 동아리':'평화 영화 동아리'},
  'sri-lanka':{'교내·지역 한국문화 축제':'교내·지역 한국문화 축제'},
  uganda:{'MS Office 실무 중심 IT 활용 교육':'공무원 대상 Office 실무교육'},
  uzbekistan:{'교내 한국어 동아리 운영':'교내 한국어 동아리'}
 };
 function activityReason(p){
  const linked=p.activities.find(a=>selectedActivities[p.id]?.[a.activity]);
  const selected=p.lens==='interest'?p.reason.match(/^‘([^’]+)’/)?.[1]:(linked||p.activities[0])?.answer;
  const activity=linked?selectedActivities[p.id][linked.activity]:representativeActivities[p.id];
  const interest=selected?`‘${selected.replace(/^[‘’“”"']+|[‘’“”"']+$/g,'')}’에 관심을 보였어요.`:'새로운 분야를 알아볼 수 있도록 소개해요.';
  return `${interest} 이 프로젝트에서는 ${activity}에 참여해볼 수 있어요.`;
 }
 function resultDisclaimer(){
  return settings.disclaimer.replace(/지원 자격과 선발은 KOICA 봉사단 모집 공고에서 확인해\s*주세요\./,
   '지원 자격 및 선발, 세부 활동 내용은 KOICA 봉사단 모집 공고에서 확인해주세요.');
 }
 function card(p){
  return `<article class="recommendation discovery-card" data-project-id="${esc(p.id)}" data-lens="${p.lens}" data-explore-only="${p.exploreOnly}" aria-label="${esc(p.label)}">
   <h2><span class="project-country"><span class="project-flag" aria-hidden="true">${esc(p.flag)}</span> ${esc(p.country)}</span> ${esc(p.title)}</h2>
   <div class="recommendation-reasons"><p class="selection-reason">${esc(activityReason(p))}</p></div>
  </article>`;
 }
 const accents={CH01:'#e0f0df',CH02:'#efe6f7',CH03:'#dceaff',CH04:'#ffe7df',CH05:'#dbf1ed',CH06:'#fff0cd'};
 function characterMarkup(cs){return `<div class="character-members${cs.length>1?' multiple':''}">${cs.map(c=>{const tag=cs.length===1?'h1':'h2';return `<div class="character-heading style-member" data-character-id="${c.id}" style="--character-accent:${accents[c.id]}"><span class="result-character-icon" aria-hidden="true">${esc(c.emoji)}</span><div class="character-copy"><${tag}${cs.length===1?' id="result-heading" tabindex="-1"':''}><span class="character-name">${esc(c.name)}</span> <span class="character-activity"><span aria-hidden="true">|</span> ${esc(c.subtitle)}</span></${tag}><p class="style-description">${esc(c.description)}</p></div></div>`;}).join('')}</div>`;}
 function result(){const r=state.result,cs=r.character.characters;app.innerHTML=`<section class="result result-stage2 result-stage4 result-v2${state.shared?' shared-result':''}">
  <section class="result-card" style="--character-accent:${accents[cs[0].id]}">
   <header class="result-card-header result-character"><h2 class="result-caption pair-title">KOICA 프로젝트 봉사단 10기 프로젝트 탐색</h2>${cs.length>1?`<h1 id="result-heading" class="mixed-title" tabindex="-1">${cs.length===2?'두 가지 활동 스타일':'복합 활동 스타일'}</h1>`:''}${characterMarkup(cs)}</header>
   <div class="recommendation-pair discovery-pair">${r.projects.map(card).join('')}</div>
  </section>
  <p class="recruitment-period"><span>프봉 10기 지원서 접수</span><span class="period-divider" aria-hidden="true">|</span><span>${esc(settings.recruitment.schedule)}</span></p>
  <section class="result-section mentoring-invite"><h2>이런 점이 궁금하다면?</h2><p class="mentor-invite">비밀과외에서 선배에게 물어보세요!</p><div class="follow-up">${external(settings.mentoringUrl,'선배들의 비밀과외 신청하기')}${external(settings.recruitment.noticeUrl,'KOICA 프로젝트 봉사단 10기 모집공고')}</div></section>
  <div class="result-actions">${state.shared?'':'<button id="edit" class="text-button">답변 돌아보기</button>'}<button id="copy" class="button secondary">${state.shared?'결과 다시 공유하기':'내 결과 공유하기'}</button><button id="restart" class="button primary">${state.shared?'나도 테스트하기':'다시 테스트하기'}</button></div><p id="copy-status" class="small-note" role="status"></p><textarea id="copy-text" class="share-manual" readonly hidden aria-label="공유할 결과 링크"></textarea><p class="disclaimer">${esc(resultDisclaimer())}</p></section>`;
 app.querySelector('#restart').onclick=reset;if(app.querySelector('#edit'))app.querySelector('#edit').onclick=()=>{state.index=7;state.screen='quiz';render();};app.querySelector('#copy').onclick=share;}
 async function share(){
  const button=app.querySelector('#copy'),status=app.querySelector('#copy-status'),field=app.querySelector('#copy-text');
  button.disabled=true;field.hidden=true;status.textContent='';
  try{
   const local=['localhost','127.0.0.1','[::1]'].includes(location.hostname);
   const url=engine.shareUrl(state.answers,local?appBase.href:settings.shareBaseUrl);
   const outcome=await root.RESULT_V2_SHARE.deliverShare({url},root.navigator,link=>{
    field.value=link;field.hidden=false;field.focus();field.select();
    try{if(document.execCommand('copy')){field.hidden=true;button.focus();return true;}}catch{}
    return false;
   });
   status.textContent={
    shared:'',copied:'결과 링크가 복사됐어요.',cancelled:'공유를 취소했어요.',
    manual:'자동 복사를 사용할 수 없어요. 아래 링크를 직접 복사해 주세요.',
    failed:'공유와 자동 복사에 실패했어요. 아래 링크를 직접 복사해 주세요.'
   }[outcome];
  }catch{status.textContent='결과 링크를 만들지 못했어요. 웹주소로 접속해 다시 시도해 주세요.';}
  finally{button.disabled=false;}
 }
 function read(){try{const restored=engine.route(location.href,appBase.href);if(restored){Object.assign(state,{screen:'result',answers:restored.answers,result:restored.result,shared:true});}else Object.assign(state,{screen:'intro',answers:{},index:0,shared:false,result:null});}catch{state.screen='error';}}
 function render(){document.querySelector('.site-footer').style.display=state.screen==='result'?'none':'';if(state.screen==='intro')intro();else if(state.screen==='quiz'){quiz();track('test-start');}else if(state.screen==='result'){result();if(!state.shared)track('test-complete');}else{app.innerHTML='<section class="v2-error"><h1 tabindex="-1">결과 링크를 확인해 주세요</h1><p>결과 코드가 없거나 올바르지 않아요. 전달받은 링크 전체를 확인하거나 새로운 테스트를 시작해 주세요.</p><button id="restart" class="button primary">테스트 시작하기</button></section>';app.querySelector('#restart').onclick=reset;}app.querySelector('h1')?.focus({preventScroll:true});root.scrollTo(0,0);}
 root.addEventListener('popstate',()=>{read();render();});read();render();
})(window);
