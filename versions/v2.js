// v2: fixed questions + reviewed scores; projects use country keys, never legacy P IDs.
(function(root){'use strict';
const data={
  "version": "v2",
  "questionVersion": "basis-20261119-copy4-20261120",
  "scoreVersion": "purpose-style-score-1",
  "recommendationVersion": "two-lenses-1",
  "tieRule": "answer-draw-1",
  "imageRevision": "discovery-2",
  "questions": [
    {
      "id": "Q1",
      "title": "해외봉사 첫날! 가방에서 가장 먼저 꺼낼 물건은?",
      "options": [
        {
          "id": "A",
          "text": "함께 쓸 그림 카드와 수업 재료"
        },
        {
          "id": "B",
          "text": "뭐든 찾아보고 만들어볼 노트북"
        },
        {
          "id": "C",
          "text": "현장 모습을 담을 카메라"
        },
        {
          "id": "D",
          "text": "여기저기 둘러보며 적을 작은 수첩"
        }
      ]
    },
    {
      "id": "Q2",
      "title": "한 달 뒤, 가장 듣고 싶은 말은?",
      "options": [
        {
          "id": "A",
          "text": "\"다음에는 우리끼리도 해볼게요!\""
        },
        {
          "id": "B",
          "text": "\"서로를 좀 더 이해하게 됐어요!\""
        },
        {
          "id": "C",
          "text": "\"생각보다 쉽게 할 수 있네요!\""
        },
        {
          "id": "D",
          "text": "\"배운 걸 실제 일에도 써봤어요!\""
        }
      ]
    },
    {
      "id": "Q3",
      "title": "오늘의 활동 일정이 나왔다! 가장 기대되는 건?",
      "options": [
        {
          "id": "A",
          "text": "아이들과 함께하는 건강·위생 활동"
        },
        {
          "id": "B",
          "text": "언어와 문화, 역사를 나누는 교류 시간"
        },
        {
          "id": "C",
          "text": "함께 컴퓨터 활용법 익혀보기"
        },
        {
          "id": "D",
          "text": "관광·직업 관련 프로그램 준비하기"
        }
      ]
    },
    {
      "id": "Q4",
      "title": "팀원이 \"이건 네가 맡아줘!\" 한다면?",
      "options": [
        {
          "id": "A",
          "text": "사람들 앞에서 수업 진행하기"
        },
        {
          "id": "B",
          "text": "사진과 영상으로 소식 전하기"
        },
        {
          "id": "C",
          "text": "설문 결과나 활동 기록 정리하기"
        },
        {
          "id": "D",
          "text": "일정 잡고 준비물 챙기기"
        }
      ]
    },
    {
      "id": "Q5",
      "title": "직접 프로그램을 연다면, 어떤 방식이 좋을까?",
      "options": [
        {
          "id": "A",
          "text": "다 함께 즐기는 퀴즈·게임 행사 열기"
        },
        {
          "id": "B",
          "text": "정기적으로 만나는 작은 동아리"
        },
        {
          "id": "C",
          "text": "현지 선생님과 함께 진행하는 수업"
        },
        {
          "id": "D",
          "text": "학교나 센터를 찾아가 체험 수업 열기"
        }
      ]
    },
    {
      "id": "Q6",
      "title": "현지에서 활동한다면, 어디가 가장 끌려?",
      "options": [
        {
          "id": "A",
          "text": "학생들과 함께하는 학교"
        },
        {
          "id": "B",
          "text": "선생님들과 수업을 준비하는 교실"
        },
        {
          "id": "C",
          "text": "주민들이 문화와 역사를 나누는 모임"
        },
        {
          "id": "D",
          "text": "배운 걸 직접 써보는 실습 공간"
        }
      ]
    },
    {
      "id": "Q7",
      "title": "친구들과 새로운 일을 시작한다면, 나는?",
      "options": [
        {
          "id": "A",
          "text": "주변 사람들 의견부터 들어본다"
        },
        {
          "id": "B",
          "text": "일단 작게 해보면서 감을 잡는다"
        },
        {
          "id": "C",
          "text": "디지털 도구로 더 편리한 방법 찾아보기"
        },
        {
          "id": "D",
          "text": "예전에 해본 방법부터 살펴본다"
        }
      ]
    },
    {
      "id": "Q8",
      "title": "활동을 마친 날, 하나만 기념으로 가져온다면?",
      "options": [
        {
          "id": "A",
          "text": "다음에도 사용할 수 있는 수업 자료"
        },
        {
          "id": "B",
          "text": "함께 바꾼 공간의 전후 사진"
        },
        {
          "id": "C",
          "text": "활동 순간들을 담은 짧은 영상"
        },
        {
          "id": "D",
          "text": "처음과 마지막을 비교한 활동 기록"
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "timor",
      "country": "동티모르",
      "flag": "🇹🇱",
      "title": "바우카우 지역 아동 건강 및 문화교육 지원",
      "officialTitleRaw": "동티모르 바우카우 지역 아동 건강 및 문화교육 지원 프로젝트봉사단 사업",
      "summary": "아동 건강·위생 및 문화교육 지원",
      "targets": "교내 학생 및 교사",
      "field": [
        2,
        1,
        0,
        0
      ],
      "scene": [
        2,
        1,
        0,
        0
      ],
      "sceneNotes": [
        "학생·학교 보건교육",
        "교사도 대상이나 현지교사 수업 준비는 구체 근거 제한",
        "주민 문화·역사 모임 근거 부족",
        "성인 기술교육 현장 근거 부족"
      ],
      "sceneEvidence": [
        {
          "unit": "T-H",
          "cell": "J5",
          "quote": "[활동 설명] 동티모르/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교내 학생 및 교사\n[활동 내용: 보건]\nㅇ 기초선 조사 (조사계획 수립, 설문지 개발)\nㅇ 학생 대상 보건·위생교육 자료 개발 및 프로그램 운영\nㅇ 간이 손씻기 시설 설치 지원 및 개인위생 교육"
        },
        {
          "unit": "T-H",
          "cell": "J5",
          "quote": "[활동 설명] 동티모르/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교내 학생 및 교사\n[활동 내용: 보건]\nㅇ 기초선 조사 (조사계획 수립, 설문지 개발)\nㅇ 학생 대상 보건·위생교육 자료 개발 및 프로그램 운영\nㅇ 간이 손씻기 시설 설치 지원 및 개인위생 교육"
        },
        {
          "unit": "T-H",
          "cell": "J5",
          "quote": "[활동 설명] 동티모르/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교내 학생 및 교사\n[활동 내용: 보건]\nㅇ 기초선 조사 (조사계획 수립, 설문지 개발)\nㅇ 학생 대상 보건·위생교육 자료 개발 및 프로그램 운영\nㅇ 간이 손씻기 시설 설치 지원 및 개인위생 교육"
        },
        {
          "unit": "T-H",
          "cell": "J5",
          "quote": "[활동 설명] 동티모르/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교내 학생 및 교사\n[활동 내용: 보건]\nㅇ 기초선 조사 (조사계획 수립, 설문지 개발)\nㅇ 학생 대상 보건·위생교육 자료 개발 및 프로그램 운영\nㅇ 간이 손씻기 시설 설치 지원 및 개인위생 교육"
        }
      ],
      "purposeEvidence": {
        "unit": "T-H",
        "scope": "youth",
        "cell": "J5",
        "quote": "ㅇ 학생 대상 보건·위생교육 자료 개발 및 프로그램 운영"
      },
      "genericAtoms": [
        "promo",
        "monitor"
      ]
    },
    {
      "id": "rwanda",
      "country": "르완다",
      "flag": "🇷🇼",
      "title": "평화 및 역사인식 교육을 통한 공동체 문화회복",
      "officialTitleRaw": "르완다 평화 및 역사인식 교육을 통한 공동체 문화회복 프로젝트봉사단 사업",
      "summary": "평화·역사인식 교육을 통한 공동체 문화회복",
      "targets": "KGM 방문객·평화교육리더·학생·교사·청년·지역주민",
      "field": [
        0,
        2,
        0,
        0
      ],
      "scene": [
        2,
        2,
        2,
        1
      ],
      "sceneNotes": [
        "학교 평화교육",
        "평화교육 교사 연수",
        "주민 평화 행사·네트워크. 역사 단어 추가 가산 없음",
        "청년 대상은 있으나 직장인 기술교육은 확인 부족"
      ],
      "sceneEvidence": [
        {
          "unit": "R-S",
          "cell": "J12",
          "quote": "[활동 설명] 르완다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 학생 및 교사, 청년 및 취약계층 자조활동 참여자, 지역주민\n[활동 내용: 예체능/컴퓨터/역사 교육, 청소년개발, 방송/미디어/홍보, 지역개발]\nㅇ 지역 학교 간 스포츠 리그(축구장 평탄화·골 네트·축구공 지원)\nㅇ Nkanga 학교 배구대·농구대 개보수\nㅇ Nkanga 학교 평화교육 프로그램 및 교사 연수(예체능 교육·ToT) 설계 및 기초 운영\nㅇ ICT기반 홍보 다각화, SNS 기반 프로젝트 성과 홍보"
        },
        {
          "unit": "R-S",
          "cell": "J12",
          "quote": "[활동 설명] 르완다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 학생 및 교사, 청년 및 취약계층 자조활동 참여자, 지역주민\n[활동 내용: 예체능/컴퓨터/역사 교육, 청소년개발, 방송/미디어/홍보, 지역개발]\nㅇ 지역 학교 간 스포츠 리그(축구장 평탄화·골 네트·축구공 지원)\nㅇ Nkanga 학교 배구대·농구대 개보수\nㅇ Nkanga 학교 평화교육 프로그램 및 교사 연수(예체능 교육·ToT) 설계 및 기초 운영\nㅇ ICT기반 홍보 다각화, SNS 기반 프로젝트 성과 홍보"
        },
        {
          "unit": "R-C",
          "cell": "J13",
          "quote": "[활동 설명] 르완다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 학생 및 교사, 지역주민\n[활동 내용: 예체능/컴퓨터/역사 교육, 청소년개발, 방송/미디어/홍보, 지역개발]\nㅇ ICT 교육환경 조사 및 수리 수요 최종 점검 및 수리 의뢰·검수 활동\nㅇ ICT교실(Smart Classroom) 환경개선 1개 교실 구축 - Smart TV·Laptop·Whiteboard·교실 리모델링 수요 최종 점검 구축 의뢰·검수 활동\nㅇ Peace Club 영화 촬영 장비 및 편집프로그램 구입 및 운영안 설계, 카메라·Laptop·편집프로그램 수요 최종 점검, 장비 구입 의뢰·검수 활동\nㅇ Peace Club 운영-K-컬처접목 예체능, 평화 영화 동아리 운영 활동\nㅇ Peace Club 운영을 위한 현지 교사 대상 ToT\nㅇ 마을주민 대상 사회통합·평화 행사 기획 및 추진 활동\nㅇ ICT기반 홍보 다각화, SNS 기반 프로젝트 성과 홍보"
        },
        {
          "unit": "R-K",
          "cell": "J11",
          "quote": "[활동 설명] 르완다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] KGM(Kigali Genocide Memorial) 방문객, 평화교육리더, 청년, 지역주민\n[활동 내용 : 예체능/컴퓨터/역사 교육, 청소년개발, 방송/미디어/홍보, 지역개발]\nㅇ Peace Ambassador's network 활성화 지원\nㅇ KGM 방문객 대상 전시 콘텐츠 고도화\nㅇ KGM 관련 ICT기반 홍보 다각화, SNS 기반 프로젝트 성과 홍보\n"
        }
      ],
      "purposeEvidence": {
        "unit": "R-K",
        "scope": "youth",
        "cell": "J11",
        "quote": "ㅇ KGM 방문객 대상 전시 콘텐츠 고도화"
      },
      "genericAtoms": []
    },
    {
      "id": "sri-lanka",
      "country": "스리랑카",
      "flag": "🇱🇰",
      "title": "미래인재 양성을 위한 AI 기반 한국어 및 한국문화",
      "officialTitleRaw": "스리랑카 미래인재 양성을 위한 AI 기반 한국어 및 한국문화 프로젝트봉사단 사업",
      "summary": "AI를 활용한 한국어·한국문화교육과 미래인재 양성",
      "targets": "중등학교 청소년 및 한국어학과 대학생",
      "field": [
        0,
        2,
        0,
        0
      ],
      "scene": [
        2,
        2,
        1,
        1
      ],
      "sceneNotes": [
        "중등학교·대학생",
        "교사 역량강화 연계. 공동 수업 단정 금지",
        "학교·대학 연계 지역 축제, 일반 주민 모임은 부분",
        "대학생 등 청년, 직장인 기술교육은 확인 부족"
      ],
      "sceneEvidence": [
        {
          "unit": "S-Y",
          "cell": "J17",
          "quote": "[활동 설명] 스리랑카/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n- 온라인 중심 홍보 활동 및 한국어·한국문화 활동 수행, 기초/종료선 조사 및 성과관리\n[활동 대상] 중등학교 청소년 및 한국어학과 대학생\n[활동 내용: 켈라니야 대학교]\nㅇ 대학생 서포터즈 조직 및 디지털 문화/홍보 프로젝트 운영\nㅇ AI 기반 자료 제작, 영상제작·SNS 홍보\nㅇ 교사 역량강화(워크숍, 플랫폼 운영) 연계\nㅇ 전체 기관 조정·행정 협력(행정·공간 제공 등)\n[활동 내용: 중등학교]\nㅇ 한국어 회화 프로그램 주 2회 운영\nㅇ 방과후 문화 수업 1회(2개)/동아리 1회 운영 \nㅇ AI 학습 도구 수업에 시범 적용\nㅇ 교내/지역기반 한국문화 축제 등 기획·운영"
        },
        {
          "unit": "S-Y",
          "cell": "J17",
          "quote": "[활동 설명] 스리랑카/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n- 온라인 중심 홍보 활동 및 한국어·한국문화 활동 수행, 기초/종료선 조사 및 성과관리\n[활동 대상] 중등학교 청소년 및 한국어학과 대학생\n[활동 내용: 켈라니야 대학교]\nㅇ 대학생 서포터즈 조직 및 디지털 문화/홍보 프로젝트 운영\nㅇ AI 기반 자료 제작, 영상제작·SNS 홍보\nㅇ 교사 역량강화(워크숍, 플랫폼 운영) 연계\nㅇ 전체 기관 조정·행정 협력(행정·공간 제공 등)\n[활동 내용: 중등학교]\nㅇ 한국어 회화 프로그램 주 2회 운영\nㅇ 방과후 문화 수업 1회(2개)/동아리 1회 운영 \nㅇ AI 학습 도구 수업에 시범 적용\nㅇ 교내/지역기반 한국문화 축제 등 기획·운영"
        },
        {
          "unit": "S-Y",
          "cell": "J17",
          "quote": "[활동 설명] 스리랑카/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n- 온라인 중심 홍보 활동 및 한국어·한국문화 활동 수행, 기초/종료선 조사 및 성과관리\n[활동 대상] 중등학교 청소년 및 한국어학과 대학생\n[활동 내용: 켈라니야 대학교]\nㅇ 대학생 서포터즈 조직 및 디지털 문화/홍보 프로젝트 운영\nㅇ AI 기반 자료 제작, 영상제작·SNS 홍보\nㅇ 교사 역량강화(워크숍, 플랫폼 운영) 연계\nㅇ 전체 기관 조정·행정 협력(행정·공간 제공 등)\n[활동 내용: 중등학교]\nㅇ 한국어 회화 프로그램 주 2회 운영\nㅇ 방과후 문화 수업 1회(2개)/동아리 1회 운영 \nㅇ AI 학습 도구 수업에 시범 적용\nㅇ 교내/지역기반 한국문화 축제 등 기획·운영"
        },
        {
          "unit": "S-Y",
          "cell": "J17",
          "quote": "[활동 설명] 스리랑카/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n- 온라인 중심 홍보 활동 및 한국어·한국문화 활동 수행, 기초/종료선 조사 및 성과관리\n[활동 대상] 중등학교 청소년 및 한국어학과 대학생\n[활동 내용: 켈라니야 대학교]\nㅇ 대학생 서포터즈 조직 및 디지털 문화/홍보 프로젝트 운영\nㅇ AI 기반 자료 제작, 영상제작·SNS 홍보\nㅇ 교사 역량강화(워크숍, 플랫폼 운영) 연계\nㅇ 전체 기관 조정·행정 협력(행정·공간 제공 등)\n[활동 내용: 중등학교]\nㅇ 한국어 회화 프로그램 주 2회 운영\nㅇ 방과후 문화 수업 1회(2개)/동아리 1회 운영 \nㅇ AI 학습 도구 수업에 시범 적용\nㅇ 교내/지역기반 한국문화 축제 등 기획·운영"
        }
      ],
      "purposeEvidence": {
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "[활동 대상] 중등학교 청소년 및 한국어학과 대학생"
      },
      "genericAtoms": [
        "video",
        "monitor"
      ]
    },
    {
      "id": "uganda",
      "country": "우간다",
      "flag": "🇺🇬",
      "title": "지방정부 사업성과관리 향상을 위한 IT 역량강화",
      "officialTitleRaw": "우간다 지방정부 사업성과관리 향상을 위한\r\nIT 역량강화 프로젝트봉사단\r\n사업",
      "summary": "지방정부의 IT 활용 역량과 사업성과관리 향상",
      "targets": "진자·마유게 지방정부 공무원, 지역주민",
      "field": [
        0,
        0,
        2,
        0
      ],
      "scene": [
        0,
        1,
        1,
        2
      ],
      "sceneNotes": [
        "주요 대상은 공무원·주민, 학교 학생 근거 부족",
        "공무원 IT 강사양성은 학교 교사와 부분 차이",
        "주민 디지털 활동은 부수 현장. 문화·역사 주제까지 일치 아님",
        "지방정부 공무원 실무 IT교육. 모든 직장인이 공무원은 아님"
      ],
      "sceneEvidence": [
        {
          "unit": "U-Y",
          "cell": "J20",
          "quote": "[활동 설명] 우간다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 진자 및 마유게 지방정부 공무원, 지역주민\n[활동 내용1: 국제개발 및 사업관리]\nㅇ 지방정부 IT 교육·업무환경 개선을 위한 기초선·종료선 조사 및 수요조사 지원\nㅇ 사업 활동계획 수립, 교육 프로그램 운영 및 성과관리 지원\nㅇ 현지 협력기관 및 유관기관과의 협력·네트워킹 활동 지원\nㅇ 성과관리 관련 활동 \n  - 활동별 계획서/보고서 작성 \n  - 산출물, 성과 지표 관리, 문서 정리\nㅇ VOP(현장사업) 회계정산 \n[활동 내용2: IT 교육]\nㅇ 지방정부 공무원 대상 컴퓨터 기초·중급 교육 실시\nㅇ MS Office(Word, Excel, PowerPoint) 등 실무 중심 IT 활용 교육\nㅇ IT 교육 커리큘럼 및 교육자료 개발·개선 지원\nㅇ 현지 공무원 대상 IT 강사양성 교육 운영 지원\n[활동 내용3: 지역사회 활동 및 홍보]\nㅇ 지역주민 대상 디지털 리터러시 교육 및 한국문화 교류 활동 기획·운영\nㅇ 사업 홍보 콘텐츠 제작 및 SNS 홍보활동 지원\nㅇ 사업 성과공유회 기획·운영 및 활동 결과보고 지원"
        },
        {
          "unit": "U-Y",
          "cell": "J20",
          "quote": "[활동 설명] 우간다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 진자 및 마유게 지방정부 공무원, 지역주민\n[활동 내용1: 국제개발 및 사업관리]\nㅇ 지방정부 IT 교육·업무환경 개선을 위한 기초선·종료선 조사 및 수요조사 지원\nㅇ 사업 활동계획 수립, 교육 프로그램 운영 및 성과관리 지원\nㅇ 현지 협력기관 및 유관기관과의 협력·네트워킹 활동 지원\nㅇ 성과관리 관련 활동 \n  - 활동별 계획서/보고서 작성 \n  - 산출물, 성과 지표 관리, 문서 정리\nㅇ VOP(현장사업) 회계정산 \n[활동 내용2: IT 교육]\nㅇ 지방정부 공무원 대상 컴퓨터 기초·중급 교육 실시\nㅇ MS Office(Word, Excel, PowerPoint) 등 실무 중심 IT 활용 교육\nㅇ IT 교육 커리큘럼 및 교육자료 개발·개선 지원\nㅇ 현지 공무원 대상 IT 강사양성 교육 운영 지원\n[활동 내용3: 지역사회 활동 및 홍보]\nㅇ 지역주민 대상 디지털 리터러시 교육 및 한국문화 교류 활동 기획·운영\nㅇ 사업 홍보 콘텐츠 제작 및 SNS 홍보활동 지원\nㅇ 사업 성과공유회 기획·운영 및 활동 결과보고 지원"
        },
        {
          "unit": "U-Y",
          "cell": "J20",
          "quote": "[활동 설명] 우간다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 진자 및 마유게 지방정부 공무원, 지역주민\n[활동 내용1: 국제개발 및 사업관리]\nㅇ 지방정부 IT 교육·업무환경 개선을 위한 기초선·종료선 조사 및 수요조사 지원\nㅇ 사업 활동계획 수립, 교육 프로그램 운영 및 성과관리 지원\nㅇ 현지 협력기관 및 유관기관과의 협력·네트워킹 활동 지원\nㅇ 성과관리 관련 활동 \n  - 활동별 계획서/보고서 작성 \n  - 산출물, 성과 지표 관리, 문서 정리\nㅇ VOP(현장사업) 회계정산 \n[활동 내용2: IT 교육]\nㅇ 지방정부 공무원 대상 컴퓨터 기초·중급 교육 실시\nㅇ MS Office(Word, Excel, PowerPoint) 등 실무 중심 IT 활용 교육\nㅇ IT 교육 커리큘럼 및 교육자료 개발·개선 지원\nㅇ 현지 공무원 대상 IT 강사양성 교육 운영 지원\n[활동 내용3: 지역사회 활동 및 홍보]\nㅇ 지역주민 대상 디지털 리터러시 교육 및 한국문화 교류 활동 기획·운영\nㅇ 사업 홍보 콘텐츠 제작 및 SNS 홍보활동 지원\nㅇ 사업 성과공유회 기획·운영 및 활동 결과보고 지원"
        },
        {
          "unit": "U-Y",
          "cell": "J20",
          "quote": "[활동 설명] 우간다/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 진자 및 마유게 지방정부 공무원, 지역주민\n[활동 내용1: 국제개발 및 사업관리]\nㅇ 지방정부 IT 교육·업무환경 개선을 위한 기초선·종료선 조사 및 수요조사 지원\nㅇ 사업 활동계획 수립, 교육 프로그램 운영 및 성과관리 지원\nㅇ 현지 협력기관 및 유관기관과의 협력·네트워킹 활동 지원\nㅇ 성과관리 관련 활동 \n  - 활동별 계획서/보고서 작성 \n  - 산출물, 성과 지표 관리, 문서 정리\nㅇ VOP(현장사업) 회계정산 \n[활동 내용2: IT 교육]\nㅇ 지방정부 공무원 대상 컴퓨터 기초·중급 교육 실시\nㅇ MS Office(Word, Excel, PowerPoint) 등 실무 중심 IT 활용 교육\nㅇ IT 교육 커리큘럼 및 교육자료 개발·개선 지원\nㅇ 현지 공무원 대상 IT 강사양성 교육 운영 지원\n[활동 내용3: 지역사회 활동 및 홍보]\nㅇ 지역주민 대상 디지털 리터러시 교육 및 한국문화 교류 활동 기획·운영\nㅇ 사업 홍보 콘텐츠 제작 및 SNS 홍보활동 지원\nㅇ 사업 성과공유회 기획·운영 및 활동 결과보고 지원"
        }
      ],
      "purposeEvidence": {
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ 지방정부 공무원 대상 컴퓨터 기초·중급 교육 실시"
      },
      "genericAtoms": [
        "promo"
      ]
    },
    {
      "id": "uzbekistan",
      "country": "우즈베키스탄",
      "flag": "🇺🇿",
      "title": "AI 기반 한국어·문화 이해증진",
      "officialTitleRaw": "우즈베키스탄 AI 기반 한국어·문화 이해증진 프로젝트봉사단 사업",
      "summary": "AI 기반 한국어·문화 이해증진",
      "targets": "학생·교사·지역주민, 방문 직업학교·고려인센터·공립학교",
      "field": [
        0,
        2,
        0,
        0
      ],
      "scene": [
        2,
        2,
        2,
        1
      ],
      "sceneNotes": [
        "학생·학교 한국어교육",
        "현지교사 공동 교수법·ToT",
        "주민 한국문화·방문 문화교육. 역사교육 단정 금지",
        "직업학교 등 청년 학습과 부분 연결, 직장인 기술교육 미확인"
      ],
      "sceneEvidence": [
        {
          "unit": "Z-K",
          "cell": "J29",
          "quote": "[활동 설명] 우즈베키스탄/청년 수요/AI 기반 한국어 교육 모델 구축 활동을 수행하게 됩니다.\n[활동 대상] 학생 및 교사, 지역주민\n[활동 내용1: AI 기반 한국어 교육]\nㅇ (한국어 정규·비정규 교육) 정규 : 정규 수업 및 방학 중 보충 수업 지원/비정규 : 교내 한국어 동아리 모집·운영 - 학생 수준별 맞춤형 한국어 교육, TOPIK 교육\nㅇ (교안개발) AI 기반 교수법 공동 개발, 실증 \nㅇ (커리큘럼) 한국어 교육 커리큘럼 고도화 연구  \nㅇ (매 뉴 얼) AI 활동 교육 매뉴얼 작성(1차) \nㅇ (시설운영) 교재, 기자재 관리\n[활동 내용2: 교사 역량강화(ToT)]\nㅇ (지역교육) 지역 교사 대상 ToT(약 15명) \nㅇ (교수법개발) AI 활용 한국어 교수법 현지교사 공동 개발 \nㅇ (지역행사) AI 기반 한국어 교사 워크숍 실시\n[활동 내용3: 연구 및 정책 지원]\nㅇ (공동연구) 기초선 조사, 교수법 공동연구 계획 수립\n[활동 내용4: 초청연수]\nㅇ PMC 공동 초청 연수 기획, 준비(1차)\n[활동 내용5: 교내·지역 행사(VOP 기반)]\nㅇ (교내행사) 월별 한국문화 행사 기획 및 실시 \nㅇ (지역행사) 아웃리치팀 지역문화 행사 지원 "
        },
        {
          "unit": "Z-K",
          "cell": "J29",
          "quote": "[활동 설명] 우즈베키스탄/청년 수요/AI 기반 한국어 교육 모델 구축 활동을 수행하게 됩니다.\n[활동 대상] 학생 및 교사, 지역주민\n[활동 내용1: AI 기반 한국어 교육]\nㅇ (한국어 정규·비정규 교육) 정규 : 정규 수업 및 방학 중 보충 수업 지원/비정규 : 교내 한국어 동아리 모집·운영 - 학생 수준별 맞춤형 한국어 교육, TOPIK 교육\nㅇ (교안개발) AI 기반 교수법 공동 개발, 실증 \nㅇ (커리큘럼) 한국어 교육 커리큘럼 고도화 연구  \nㅇ (매 뉴 얼) AI 활동 교육 매뉴얼 작성(1차) \nㅇ (시설운영) 교재, 기자재 관리\n[활동 내용2: 교사 역량강화(ToT)]\nㅇ (지역교육) 지역 교사 대상 ToT(약 15명) \nㅇ (교수법개발) AI 활용 한국어 교수법 현지교사 공동 개발 \nㅇ (지역행사) AI 기반 한국어 교사 워크숍 실시\n[활동 내용3: 연구 및 정책 지원]\nㅇ (공동연구) 기초선 조사, 교수법 공동연구 계획 수립\n[활동 내용4: 초청연수]\nㅇ PMC 공동 초청 연수 기획, 준비(1차)\n[활동 내용5: 교내·지역 행사(VOP 기반)]\nㅇ (교내행사) 월별 한국문화 행사 기획 및 실시 \nㅇ (지역행사) 아웃리치팀 지역문화 행사 지원 "
        },
        {
          "unit": "Z-O",
          "cell": "J38",
          "quote": "[활동 설명] 우즈베키스탄/청년 수요/AI 기반 한국어 교육 모델 구축 활동을 수행하게 됩니다.\n[활동 대상] 학생 및 교사, 지역주민\n[활동 내용1: 아웃리치 프로그램]\nㅇ (교육활동) 한국어 및 한국문화 교육 활동 \n - 직업학교, 고려인센터, 공립학교 찾아가는 한국어교육  \n - K-Culture, 한국 생활문화 교육 활동 \n - 태권도, K-pop, 전통춤, 연극, 사물놀이 등 \nㅇ (교안제작) 아웃리치 활동 교육 교안 개발 및 제작 \nㅇ (물품관리) 아웃리치 교육 기자재 관리, 운영 지원 \n[활동 내용2: 문화 프로그램]\nㅇ (프로그램운영) 협력기관 대상 문화 행사 기획 및 실시 \nㅇ (한국어캠프) 방학 중 AI 한국어 캠프 기획, 준비\nㅇ (지역행사) 취약계층 대상 공동 지역봉사 기획, 실시  \n[활동 내용3: 성과관리 프로그램]\nㅇ 아웃리치 프로그램 전반 성과관리  "
        },
        {
          "unit": "Z-O",
          "cell": "J38",
          "quote": "[활동 설명] 우즈베키스탄/청년 수요/AI 기반 한국어 교육 모델 구축 활동을 수행하게 됩니다.\n[활동 대상] 학생 및 교사, 지역주민\n[활동 내용1: 아웃리치 프로그램]\nㅇ (교육활동) 한국어 및 한국문화 교육 활동 \n - 직업학교, 고려인센터, 공립학교 찾아가는 한국어교육  \n - K-Culture, 한국 생활문화 교육 활동 \n - 태권도, K-pop, 전통춤, 연극, 사물놀이 등 \nㅇ (교안제작) 아웃리치 활동 교육 교안 개발 및 제작 \nㅇ (물품관리) 아웃리치 교육 기자재 관리, 운영 지원 \n[활동 내용2: 문화 프로그램]\nㅇ (프로그램운영) 협력기관 대상 문화 행사 기획 및 실시 \nㅇ (한국어캠프) 방학 중 AI 한국어 캠프 기획, 준비\nㅇ (지역행사) 취약계층 대상 공동 지역봉사 기획, 실시  \n[활동 내용3: 성과관리 프로그램]\nㅇ 아웃리치 프로그램 전반 성과관리  "
        }
      ],
      "purposeEvidence": {
        "unit": "Z-K",
        "scope": "youth",
        "cell": "J29",
        "quote": "ㅇ (교수법개발) AI 활용 한국어 교수법 현지교사 공동 개발 "
      },
      "genericAtoms": [
        "content",
        "monitor"
      ]
    },
    {
      "id": "cameroon",
      "country": "카메룬",
      "flag": "🇨🇲",
      "title": "중등교육 ICT 선진 모델 학교 구축",
      "officialTitleRaw": "카메룬 중등교육 ICT 선진 모델 학교 그측 프로젝트 봉사단 사업",
      "summary": "중등학교 ICT 교육모델과 교육환경 구축",
      "targets": "야운데 소재 3개 중등학교 ICT교사 및 학생",
      "field": [
        0,
        0,
        2,
        0
      ],
      "scene": [
        2,
        2,
        0,
        1
      ],
      "sceneNotes": [
        "중등학교 ICT교사·학생",
        "정규수업 협력티칭·연구수업",
        "주민 모임 활동 근거 부족",
        "교사 역량 맥락은 있지만 직장인 교육장과 부분 차이"
      ],
      "sceneEvidence": [
        {
          "unit": "C-Y",
          "cell": "J54",
          "quote": "[활동 설명] 카메룬/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 야운데 소재 3개 중등학교 ICT교사 및 학생\n[활동 내용1: 컴퓨터교육] - 9명 선발 예정\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 컴퓨터 실습실 리모델링 지원\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\n[활동 내용2 : 국제개발] - 5명 선발 예정\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ 컴퓨터 실습실 리모델링 지원"
        },
        {
          "unit": "C-Y",
          "cell": "J54",
          "quote": "[활동 설명] 카메룬/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 야운데 소재 3개 중등학교 ICT교사 및 학생\n[활동 내용1: 컴퓨터교육] - 9명 선발 예정\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 컴퓨터 실습실 리모델링 지원\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\n[활동 내용2 : 국제개발] - 5명 선발 예정\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ 컴퓨터 실습실 리모델링 지원"
        },
        {
          "unit": "C-Y",
          "cell": "J54",
          "quote": "[활동 설명] 카메룬/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 야운데 소재 3개 중등학교 ICT교사 및 학생\n[활동 내용1: 컴퓨터교육] - 9명 선발 예정\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 컴퓨터 실습실 리모델링 지원\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\n[활동 내용2 : 국제개발] - 5명 선발 예정\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ 컴퓨터 실습실 리모델링 지원"
        },
        {
          "unit": "C-Y",
          "cell": "J54",
          "quote": "[활동 설명] 카메룬/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 야운데 소재 3개 중등학교 ICT교사 및 학생\n[활동 내용1: 컴퓨터교육] - 9명 선발 예정\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 컴퓨터 실습실 리모델링 지원\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\n[활동 내용2 : 국제개발] - 5명 선발 예정\nㅇ ICT 교수-학습 현황 및 학교 인프라 구축을 위한 기초선 조사 지원\nㅇ 실습실 기자재 조달을 위한 수요조사 및 문서 작성\nㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)\nㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시\nㅇ 혁신교육모듈 파일럿(신규 교수법 전수)\nㅇ 컴퓨터 실습실 리모델링 지원"
        }
      ],
      "purposeEvidence": {
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "[활동 대상] 야운데 소재 3개 중등학교 ICT교사 및 학생"
      },
      "genericAtoms": []
    },
    {
      "id": "tanzania",
      "country": "탄자니아",
      "flag": "🇹🇿",
      "title": "AI를 활용한 관광 분야 직업역량강화",
      "officialTitleRaw": "탄자니아 AI를 활용한 관광 분야 직업역량강화 프로젝트봉사단 사업",
      "summary": "AI를 활용한 관광 분야 직업역량 강화",
      "targets": "교사·교육생·지역주민, NCT 학생 및 현지 가이드",
      "field": [
        0,
        0,
        0,
        2
      ],
      "scene": [
        2,
        1,
        1,
        2
      ],
      "sceneNotes": [
        "NCT 학생 ICT교육·학생 동아리. 학교급 확정 금지",
        "교사 대상 표기는 있으나 공동 수업은 연령무관 J62와 분리",
        "지역주민 문화교류. 역사교육까지 일치 아님",
        "교육생·현지 가이드 관광 관련 역량. 모집 연령 의미 아님"
      ],
      "sceneEvidence": [
        {
          "unit": "N-I",
          "cell": "J61",
          "quote": "[활동 설명] 탄자니아/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교사, 교육생 및 지역주민\n[활동 내용: ICT]\nㅇ NCT 학생 대상 ICT 교육 진행\nㅇ NCT ICT기자재 보완 계획 수립\nㅇ AI 활용 콘텐츠 제작 및 홍보자료 제작 교육"
        },
        {
          "unit": "N-A",
          "cell": "J59",
          "quote": "[활동 설명] 탄자니아/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교사, 교육생 및 지역주민\n[활동 내용: 공공행정]\nㅇ 기초선 조사\nㅇ 기관별 교육수요 조사 및 기초자료 구축\nㅇ NCT 학생 및 현지 가이드 대상 한국어 교육\nㅇ 문화교류 행사 기획 및 운영 총괄"
        },
        {
          "unit": "N-A",
          "cell": "J59",
          "quote": "[활동 설명] 탄자니아/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교사, 교육생 및 지역주민\n[활동 내용: 공공행정]\nㅇ 기초선 조사\nㅇ 기관별 교육수요 조사 및 기초자료 구축\nㅇ NCT 학생 및 현지 가이드 대상 한국어 교육\nㅇ 문화교류 행사 기획 및 운영 총괄"
        },
        {
          "unit": "N-A",
          "cell": "J59",
          "quote": "[활동 설명] 탄자니아/청년 수요/활동 내용 중 일부 활동을 수행하게 됩니다.\n[활동 대상] 교사, 교육생 및 지역주민\n[활동 내용: 공공행정]\nㅇ 기초선 조사\nㅇ 기관별 교육수요 조사 및 기초자료 구축\nㅇ NCT 학생 및 현지 가이드 대상 한국어 교육\nㅇ 문화교류 행사 기획 및 운영 총괄"
        }
      ],
      "purposeEvidence": {
        "unit": "N-T",
        "scope": "youth",
        "cell": "J60",
        "quote": "ㅇ 지역 관광자원 조사 및 관광콘텐츠 기획"
      },
      "genericAtoms": []
    }
  ],
  "supplemental": [
    {
      "project": "timor",
      "option": "Q2A",
      "points": 1,
      "fact": {
        "atom": "materials",
        "description": "학생 대상 보건·위생교육 자료 개발",
        "unit": "T-H",
        "scope": "youth",
        "cell": "J5",
        "quote": "ㅇ 학생 대상 보건·위생교육 자료 개발 및 프로그램 운영"
      }
    },
    {
      "project": "rwanda",
      "option": "Q2A",
      "points": 2,
      "fact": {
        "atom": "teacher",
        "description": "평화교육 프로그램·교사 연수 설계 및 기초 운영",
        "unit": "R-S",
        "scope": "youth",
        "cell": "J12",
        "quote": "ㅇ Nkanga 학교 평화교육 프로그램 및 교사 연수(예체능 교육·ToT) 설계 및 기초 운영"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q2A",
      "points": 1,
      "fact": {
        "atom": "teacher",
        "description": "교사 역량강화 워크숍·플랫폼 연계(공동 수업 진행 아님)",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ 교사 역량강화(워크숍, 플랫폼 운영) 연계"
      }
    },
    {
      "project": "uganda",
      "option": "Q2A",
      "points": 2,
      "fact": {
        "atom": "trainer",
        "description": "현지 공무원 IT 강사양성 교육 지원",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ 현지 공무원 대상 IT 강사양성 교육 운영 지원"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q2A",
      "points": 2,
      "fact": {
        "atom": "teacher",
        "description": "지역 교사 ToT",
        "unit": "Z-K",
        "scope": "youth",
        "cell": "J29",
        "quote": "ㅇ (지역교육) 지역 교사 대상 ToT(약 15명) "
      }
    },
    {
      "project": "cameroon",
      "option": "Q2A",
      "points": 2,
      "fact": {
        "atom": "teacher",
        "description": "혁신교육모듈 파일럿·신규 교수법 전수",
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "ㅇ 혁신교육모듈 파일럿(신규 교수법 전수)"
      }
    },
    {
      "project": "tanzania",
      "option": "Q2A",
      "points": 1,
      "fact": {
        "atom": "club",
        "description": "NCT 학생 협력 동아리·스터디그룹",
        "unit": "N-T",
        "scope": "youth",
        "cell": "J60",
        "quote": "ㅇ NCT 학생 협력 동아리 및 스터디그룹 구성·운영 지원"
      }
    },
    {
      "project": "timor",
      "option": "Q2B",
      "points": 0,
      "fact": null
    },
    {
      "project": "rwanda",
      "option": "Q2B",
      "points": 2,
      "fact": {
        "atom": "community",
        "description": "주민 대상 사회통합·평화 행사",
        "unit": "R-C",
        "scope": "youth",
        "cell": "J13",
        "quote": "ㅇ 마을주민 대상 사회통합·평화 행사 기획 및 추진 활동"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q2B",
      "points": 2,
      "fact": {
        "atom": "culture",
        "description": "교내·지역 한국문화 축제",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ 교내/지역기반 한국문화 축제 등 기획·운영"
      }
    },
    {
      "project": "uganda",
      "option": "Q2B",
      "points": 1,
      "fact": {
        "atom": "community",
        "description": "지역주민 디지털 리터러시·한국문화 교류(부수 활동)",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ 지역주민 대상 디지털 리터러시 교육 및 한국문화 교류 활동 기획·운영"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q2B",
      "points": 2,
      "fact": {
        "atom": "culture",
        "description": "태권도·K-pop·전통춤 등 한국문화 교육",
        "unit": "Z-O",
        "scope": "youth",
        "cell": "J38",
        "quote": " - 태권도, K-pop, 전통춤, 연극, 사물놀이 등 "
      }
    },
    {
      "project": "cameroon",
      "option": "Q2B",
      "points": 1,
      "fact": {
        "atom": "culture",
        "description": "방학중 문화활동(사업 핵심 아님)",
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "ㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)"
      }
    },
    {
      "project": "tanzania",
      "option": "Q2B",
      "points": 1,
      "fact": {
        "atom": "culture",
        "description": "문화교류 행사 기획·운영(관광 사업 내 부수 활동)",
        "unit": "N-A",
        "scope": "youth",
        "cell": "J59",
        "quote": "ㅇ 문화교류 행사 기획 및 운영 총괄"
      }
    },
    {
      "project": "timor",
      "option": "Q2C",
      "points": 0,
      "fact": null
    },
    {
      "project": "rwanda",
      "option": "Q2C",
      "points": 0,
      "fact": null
    },
    {
      "project": "sri-lanka",
      "option": "Q2C",
      "points": 0,
      "fact": null
    },
    {
      "project": "uganda",
      "option": "Q2C",
      "points": 0,
      "fact": null
    },
    {
      "project": "uzbekistan",
      "option": "Q2C",
      "points": 0,
      "fact": null
    },
    {
      "project": "cameroon",
      "option": "Q2C",
      "points": 0,
      "fact": null
    },
    {
      "project": "tanzania",
      "option": "Q2C",
      "points": 0,
      "fact": null
    },
    {
      "project": "timor",
      "option": "Q2D",
      "points": 0,
      "fact": null
    },
    {
      "project": "rwanda",
      "option": "Q2D",
      "points": 0,
      "fact": null
    },
    {
      "project": "sri-lanka",
      "option": "Q2D",
      "points": 1,
      "fact": {
        "atom": "teacher",
        "description": "교사 역량강화 워크숍·플랫폼 연계(공동 수업 진행 아님)",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ 교사 역량강화(워크숍, 플랫폼 운영) 연계"
      }
    },
    {
      "project": "uganda",
      "option": "Q2D",
      "points": 2,
      "fact": {
        "atom": "office",
        "description": "MS Office 실무 중심 IT 활용 교육",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ MS Office(Word, Excel, PowerPoint) 등 실무 중심 IT 활용 교육"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q2D",
      "points": 1,
      "fact": {
        "atom": "teacher",
        "description": "지역 교사 ToT",
        "unit": "Z-K",
        "scope": "youth",
        "cell": "J29",
        "quote": "ㅇ (지역교육) 지역 교사 대상 ToT(약 15명) "
      }
    },
    {
      "project": "cameroon",
      "option": "Q2D",
      "points": 1,
      "fact": {
        "atom": "teacher",
        "description": "혁신교육모듈 파일럿·신규 교수법 전수",
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "ㅇ 혁신교육모듈 파일럿(신규 교수법 전수)"
      }
    },
    {
      "project": "tanzania",
      "option": "Q2D",
      "points": 1,
      "fact": {
        "atom": "guides",
        "description": "NCT 학생·현지 가이드 한국어 교육(관광 현장 활용과 부분 연결)",
        "unit": "N-A",
        "scope": "youth",
        "cell": "J59",
        "quote": "ㅇ NCT 학생 및 현지 가이드 대상 한국어 교육"
      }
    },
    {
      "project": "timor",
      "option": "Q5A",
      "points": 2,
      "fact": {
        "atom": "health",
        "description": "개인위생 교육",
        "unit": "T-H",
        "scope": "youth",
        "cell": "J5",
        "quote": "ㅇ 간이 손씻기 시설 설치 지원 및 개인위생 교육"
      }
    },
    {
      "project": "rwanda",
      "option": "Q5A",
      "points": 2,
      "fact": {
        "atom": "practice",
        "description": "학교 스포츠 리그 활동",
        "unit": "R-S",
        "scope": "youth",
        "cell": "J12",
        "quote": "ㅇ 지역 학교 간 스포츠 리그(축구장 평탄화·골 네트·축구공 지원)"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q5A",
      "points": 2,
      "fact": {
        "atom": "culture",
        "description": "교내·지역 한국문화 축제",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ 교내/지역기반 한국문화 축제 등 기획·운영"
      }
    },
    {
      "project": "uganda",
      "option": "Q5A",
      "points": 1,
      "fact": {
        "atom": "office",
        "description": "MS Office 실무 중심 IT 활용 교육",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ MS Office(Word, Excel, PowerPoint) 등 실무 중심 IT 활용 교육"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q5A",
      "points": 2,
      "fact": {
        "atom": "culture",
        "description": "태권도·K-pop·전통춤 등 한국문화 교육",
        "unit": "Z-O",
        "scope": "youth",
        "cell": "J38",
        "quote": " - 태권도, K-pop, 전통춤, 연극, 사물놀이 등 "
      }
    },
    {
      "project": "cameroon",
      "option": "Q5A",
      "points": 1,
      "fact": {
        "atom": "lesson",
        "description": "AI 커리큘럼 파일럿 특별활동(체험 구성과는 부분 연결)",
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "ㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)"
      }
    },
    {
      "project": "tanzania",
      "option": "Q5A",
      "points": 1,
      "fact": {
        "atom": "skills",
        "description": "관광 분야 사업의 NCT 학생 ICT 교육",
        "unit": "N-I",
        "scope": "youth",
        "cell": "J61",
        "quote": "ㅇ NCT 학생 대상 ICT 교육 진행"
      }
    },
    {
      "project": "timor",
      "option": "Q5B",
      "points": 0,
      "fact": null
    },
    {
      "project": "rwanda",
      "option": "Q5B",
      "points": 2,
      "fact": {
        "atom": "club",
        "description": "Peace Club 평화 영화 동아리",
        "unit": "R-C",
        "scope": "youth",
        "cell": "J13",
        "quote": "ㅇ Peace Club 운영-K-컬처접목 예체능, 평화 영화 동아리 운영 활동"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q5B",
      "points": 2,
      "fact": {
        "atom": "club",
        "description": "방과후 문화 수업·동아리",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ 방과후 문화 수업 1회(2개)/동아리 1회 운영 "
      }
    },
    {
      "project": "uganda",
      "option": "Q5B",
      "points": 0,
      "fact": null
    },
    {
      "project": "uzbekistan",
      "option": "Q5B",
      "points": 2,
      "fact": {
        "atom": "club",
        "description": "교내 한국어 동아리 운영",
        "unit": "Z-K",
        "scope": "youth",
        "cell": "J29",
        "quote": "ㅇ (한국어 정규·비정규 교육) 정규 : 정규 수업 및 방학 중 보충 수업 지원/비정규 : 교내 한국어 동아리 모집·운영 - 학생 수준별 맞춤형 한국어 교육, TOPIK 교육"
      }
    },
    {
      "project": "cameroon",
      "option": "Q5B",
      "points": 0,
      "fact": null
    },
    {
      "project": "tanzania",
      "option": "Q5B",
      "points": 2,
      "fact": {
        "atom": "club",
        "description": "NCT 학생 협력 동아리·스터디그룹",
        "unit": "N-T",
        "scope": "youth",
        "cell": "J60",
        "quote": "ㅇ NCT 학생 협력 동아리 및 스터디그룹 구성·운영 지원"
      }
    },
    {
      "project": "timor",
      "option": "Q5C",
      "points": 0,
      "fact": null
    },
    {
      "project": "rwanda",
      "option": "Q5C",
      "points": 1,
      "fact": {
        "atom": "teacher",
        "description": "평화교육 프로그램·교사 연수 설계 및 기초 운영",
        "unit": "R-S",
        "scope": "youth",
        "cell": "J12",
        "quote": "ㅇ Nkanga 학교 평화교육 프로그램 및 교사 연수(예체능 교육·ToT) 설계 및 기초 운영"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q5C",
      "points": 1,
      "fact": {
        "atom": "teacher",
        "description": "교사 역량강화 워크숍·플랫폼 연계(공동 수업 진행 아님)",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ 교사 역량강화(워크숍, 플랫폼 운영) 연계"
      }
    },
    {
      "project": "uganda",
      "option": "Q5C",
      "points": 1,
      "fact": {
        "atom": "trainer",
        "description": "현지 공무원 IT 강사양성 교육 지원",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ 현지 공무원 대상 IT 강사양성 교육 운영 지원"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q5C",
      "points": 1,
      "fact": {
        "atom": "teacher",
        "description": "한국어 교수법 현지교사 공동 개발(공동 수업 진행 확정 아님)",
        "unit": "Z-K",
        "scope": "youth",
        "cell": "J29",
        "quote": "ㅇ (교수법개발) AI 활용 한국어 교수법 현지교사 공동 개발 "
      }
    },
    {
      "project": "cameroon",
      "option": "Q5C",
      "points": 2,
      "fact": {
        "atom": "teacher",
        "description": "컴퓨터 교사와 정규수업 협력티칭·연구수업",
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "ㅇ 컴퓨터 교사와 정규수업 협력티칭 및 연구수업 실시"
      }
    },
    {
      "project": "tanzania",
      "option": "Q5C",
      "points": 0,
      "fact": null
    },
    {
      "project": "timor",
      "option": "Q5D",
      "points": 0,
      "fact": null
    },
    {
      "project": "rwanda",
      "option": "Q5D",
      "points": 0,
      "fact": null
    },
    {
      "project": "sri-lanka",
      "option": "Q5D",
      "points": 0,
      "fact": null
    },
    {
      "project": "uganda",
      "option": "Q5D",
      "points": 0,
      "fact": null
    },
    {
      "project": "uzbekistan",
      "option": "Q5D",
      "points": 2,
      "fact": {
        "atom": "outreach",
        "description": "직업학교·고려인센터·공립학교 찾아가는 한국어교육",
        "unit": "Z-O",
        "scope": "youth",
        "cell": "J38",
        "quote": " - 직업학교, 고려인센터, 공립학교 찾아가는 한국어교육  "
      }
    },
    {
      "project": "cameroon",
      "option": "Q5D",
      "points": 0,
      "fact": null
    },
    {
      "project": "tanzania",
      "option": "Q5D",
      "points": 0,
      "fact": null
    },
    {
      "project": "timor",
      "option": "Q8A",
      "points": 2,
      "fact": {
        "atom": "materials",
        "description": "학생 대상 보건·위생교육 자료 개발",
        "unit": "T-H",
        "scope": "youth",
        "cell": "J5",
        "quote": "ㅇ 학생 대상 보건·위생교육 자료 개발 및 프로그램 운영"
      }
    },
    {
      "project": "rwanda",
      "option": "Q8A",
      "points": 1,
      "fact": {
        "atom": "exhibition",
        "description": "KGM 전시 콘텐츠 고도화(수업자료와는 구별)",
        "unit": "R-K",
        "scope": "youth",
        "cell": "J11",
        "quote": "ㅇ KGM 방문객 대상 전시 콘텐츠 고도화"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q8A",
      "points": 1,
      "fact": {
        "atom": "materials",
        "description": "한국어·한국문화 사업의 AI 기반 자료 제작(재사용 확정 아님)",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ AI 기반 자료 제작, 영상제작·SNS 홍보"
      }
    },
    {
      "project": "uganda",
      "option": "Q8A",
      "points": 2,
      "fact": {
        "atom": "materials",
        "description": "IT 커리큘럼·교육자료 개발 및 개선",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ IT 교육 커리큘럼 및 교육자료 개발·개선 지원"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q8A",
      "points": 2,
      "fact": {
        "atom": "materials",
        "description": "아웃리치 교육 교안 개발 및 제작",
        "unit": "Z-O",
        "scope": "youth",
        "cell": "J38",
        "quote": "ㅇ (교안제작) 아웃리치 활동 교육 교안 개발 및 제작 "
      }
    },
    {
      "project": "cameroon",
      "option": "Q8A",
      "points": 1,
      "fact": {
        "atom": "module",
        "description": "AI 커리큘럼 파일럿(완성 교재 제작 확정 아님)",
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "ㅇ AI 커리큘럼 개발을 위한 파일럿 활동 진행 및 시사점 도출(특별활동 1-2차시 진행 및 방학중 문화활동)"
      }
    },
    {
      "project": "tanzania",
      "option": "Q8A",
      "points": 1,
      "fact": {
        "atom": "content",
        "description": "AI 콘텐츠·홍보자료 제작 교육(영상·정규 교안과 구별)",
        "unit": "N-I",
        "scope": "youth",
        "cell": "J61",
        "quote": "ㅇ AI 활용 콘텐츠 제작 및 홍보자료 제작 교육"
      }
    },
    {
      "project": "timor",
      "option": "Q8B",
      "points": 2,
      "fact": {
        "atom": "facility",
        "description": "간이 손씻기 시설 설치 지원",
        "unit": "T-H",
        "scope": "youth",
        "cell": "J5",
        "quote": "ㅇ 간이 손씻기 시설 설치 지원 및 개인위생 교육"
      }
    },
    {
      "project": "rwanda",
      "option": "Q8B",
      "points": 2,
      "fact": {
        "atom": "space",
        "description": "ICT교실 환경개선 수요 점검·의뢰·검수",
        "unit": "R-C",
        "scope": "youth",
        "cell": "J13",
        "quote": "ㅇ ICT교실(Smart Classroom) 환경개선 1개 교실 구축 - Smart TV·Laptop·Whiteboard·교실 리모델링 수요 최종 점검 구축 의뢰·검수 활동"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q8B",
      "points": 0,
      "fact": null
    },
    {
      "project": "uganda",
      "option": "Q8B",
      "points": 0,
      "fact": null
    },
    {
      "project": "uzbekistan",
      "option": "Q8B",
      "points": 0,
      "fact": null
    },
    {
      "project": "cameroon",
      "option": "Q8B",
      "points": 2,
      "fact": {
        "atom": "lab",
        "description": "컴퓨터 실습실 리모델링 지원",
        "unit": "C-Y",
        "scope": "youth",
        "cell": "J54",
        "quote": "ㅇ 컴퓨터 실습실 리모델링 지원"
      }
    },
    {
      "project": "tanzania",
      "option": "Q8B",
      "points": 1,
      "fact": {
        "atom": "equipment",
        "description": "ICT기자재 보완 계획 수립(완료 공간 아님)",
        "unit": "N-I",
        "scope": "youth",
        "cell": "J61",
        "quote": "ㅇ NCT ICT기자재 보완 계획 수립"
      }
    },
    {
      "project": "timor",
      "option": "Q8C",
      "points": 1,
      "fact": {
        "atom": "promo",
        "description": "홍보 콘텐츠 제작(영상 명시 없음)",
        "unit": "T-P",
        "scope": "youth",
        "cell": "J7",
        "quote": "ㅇ 홍보 아이템 발굴 및 콘텐츠 제작"
      }
    },
    {
      "project": "rwanda",
      "option": "Q8C",
      "points": 2,
      "fact": {
        "atom": "club",
        "description": "Peace Club 평화 영화 동아리",
        "unit": "R-C",
        "scope": "youth",
        "cell": "J13",
        "quote": "ㅇ Peace Club 운영-K-컬처접목 예체능, 평화 영화 동아리 운영 활동"
      }
    },
    {
      "project": "sri-lanka",
      "option": "Q8C",
      "points": 2,
      "fact": {
        "atom": "video",
        "description": "영상제작·SNS 홍보",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "ㅇ AI 기반 자료 제작, 영상제작·SNS 홍보"
      }
    },
    {
      "project": "uganda",
      "option": "Q8C",
      "points": 1,
      "fact": {
        "atom": "promo",
        "description": "사업 홍보 콘텐츠 제작(영상 명시 없음)",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ 사업 홍보 콘텐츠 제작 및 SNS 홍보활동 지원"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q8C",
      "points": 1,
      "fact": {
        "atom": "content",
        "description": "한국어·문화교육 콘텐츠 제작(영상 명시 없음)",
        "unit": "Z-P",
        "scope": "youth",
        "cell": "J43",
        "quote": "ㅇ (콘텐츠제작) AI 기반 한국어·문화교육 콘텐츠 제작 "
      }
    },
    {
      "project": "cameroon",
      "option": "Q8C",
      "points": 0,
      "fact": null
    },
    {
      "project": "tanzania",
      "option": "Q8C",
      "points": 1,
      "fact": {
        "atom": "content",
        "description": "AI 콘텐츠·홍보자료 제작 교육(영상·정규 교안과 구별)",
        "unit": "N-I",
        "scope": "youth",
        "cell": "J61",
        "quote": "ㅇ AI 활용 콘텐츠 제작 및 홍보자료 제작 교육"
      }
    },
    {
      "project": "timor",
      "option": "Q8D",
      "points": 1,
      "fact": {
        "atom": "monitor",
        "description": "모니터링·지표 관리 지원(종료선 명시 없음)",
        "unit": "T-M",
        "scope": "youth",
        "cell": "J7",
        "quote": "ㅇ 사업 모니터링 및 평가(M&E) 지원, 활동별 산출물 지표(만족도 조사, 출석률 등) 관리, 사업 보고서 작성 및 행정업무 지원"
      }
    },
    {
      "project": "rwanda",
      "option": "Q8D",
      "points": 0,
      "fact": null
    },
    {
      "project": "sri-lanka",
      "option": "Q8D",
      "points": 2,
      "fact": {
        "atom": "monitor",
        "description": "기초/종료선 조사 및 성과관리",
        "unit": "S-Y",
        "scope": "youth",
        "cell": "J17",
        "quote": "- 온라인 중심 홍보 활동 및 한국어·한국문화 활동 수행, 기초/종료선 조사 및 성과관리"
      }
    },
    {
      "project": "uganda",
      "option": "Q8D",
      "points": 2,
      "fact": {
        "atom": "monitor",
        "description": "기초선·종료선 조사 지원",
        "unit": "U-Y",
        "scope": "youth",
        "cell": "J20",
        "quote": "ㅇ 지방정부 IT 교육·업무환경 개선을 위한 기초선·종료선 조사 및 수요조사 지원"
      }
    },
    {
      "project": "uzbekistan",
      "option": "Q8D",
      "points": 1,
      "fact": {
        "atom": "monitor",
        "description": "아웃리치 성과관리(종료선 명시 없음)",
        "unit": "Z-O",
        "scope": "youth",
        "cell": "J38",
        "quote": "ㅇ 아웃리치 프로그램 전반 성과관리  "
      }
    },
    {
      "project": "cameroon",
      "option": "Q8D",
      "points": 0,
      "fact": null
    },
    {
      "project": "tanzania",
      "option": "Q8D",
      "points": 0,
      "fact": null
    }
  ],
  "characters": [
    {
      "id": "CH01",
      "name": "행복 메이커",
      "subtitle": "진행·참여형",
      "emoji": "🎨",
      "description": "사람들 앞에서 활동을 진행하고, 함께 해보는 방식을 선호하는 쪽에 가까워요.",
      "core": {
        "Q1A": 2,
        "Q4A": 2,
        "Q7B": 1,
        "Q7C": 1
      },
      "support": {
        "Q5A": 2
      },
      "maxCore": 5,
      "scale": 12
    },
    {
      "id": "CH02",
      "name": "평화의 연결자",
      "subtitle": "경청·협력형",
      "emoji": "🕊️",
      "description": "주변 의견을 듣고 함께 아이디어를 나누는 방식을 선호하는 쪽에 가까워요.",
      "core": {
        "Q1D": 1,
        "Q4A": 1,
        "Q7A": 2,
        "Q7C": 2
      },
      "support": {
        "Q5B": 1,
        "Q5C": 1
      },
      "maxCore": 4,
      "scale": 15
    },
    {
      "id": "CH03",
      "name": "디지털 해결사",
      "subtitle": "도구·실행형",
      "emoji": "💻",
      "description": "도구로 찾아보고 만들어보거나, 작게 실행하며 방법을 찾는 쪽에 가까워요.",
      "core": {
        "Q1B": 2,
        "Q4C": 1,
        "Q4D": 1,
        "Q7B": 2,
        "Q7D": 1
      },
      "support": {},
      "maxCore": 5,
      "scale": 12
    },
    {
      "id": "CH04",
      "name": "스마트 크리에이터",
      "subtitle": "기록·표현형",
      "emoji": "🇰🇷",
      "description": "사진과 영상으로 활동을 기록하고 소식을 전하는 쪽에 가까워요.",
      "core": {
        "Q1C": 2,
        "Q4B": 2,
        "Q7B": 1,
        "Q7C": 1
      },
      "support": {
        "Q8C": 2
      },
      "maxCore": 5,
      "scale": 12
    },
    {
      "id": "CH05",
      "name": "스마트 업그레이더",
      "subtitle": "관찰·점검형",
      "emoji": "🏫",
      "description": "현장을 살피고 기록이나 이전 방법을 점검하며 시작하는 쪽에 가까워요.",
      "core": {
        "Q1D": 2,
        "Q1B": 1,
        "Q4C": 2,
        "Q7D": 2,
        "Q7A": 1
      },
      "support": {
        "Q8A": 1,
        "Q8B": 1,
        "Q8D": 1
      },
      "maxCore": 6,
      "scale": 10
    },
    {
      "id": "CH06",
      "name": "아이디어 기획자",
      "subtitle": "준비·기획형",
      "emoji": "✈️",
      "description": "일정과 준비물을 챙기고, 함께 아이디어를 모아 활동을 준비하는 쪽에 가까워요.",
      "core": {
        "Q1D": 1,
        "Q1B": 1,
        "Q4D": 2,
        "Q7B": 1,
        "Q7C": 2
      },
      "support": {
        "Q5D": 1
      },
      "maxCore": 5,
      "scale": 12
    }
  ]
};
function freeze(v){if(v&&typeof v==='object'){Object.values(v).forEach(freeze);Object.freeze(v);}return v;}
freeze(data);
if(typeof module!=='undefined'&&module.exports)module.exports=data;else root.RESULT_VERSIONS={...root.RESULT_VERSIONS,v2:data};
})(typeof window!=='undefined'?window:globalThis);
