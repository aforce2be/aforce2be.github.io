<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <div
      class="flex flex-col md:grid md:grid-cols-5 md:gap-8 items-start gap-6"
    >
      <div
        v-if="hasThumb"
        class="md:col-span-2 order-1 md:order-none w-full relative overflow-hidden rounded-2xl shadow-md max-h-[400px] overflow-y-auto"
        @mousemove="handleZoom"
        @mouseleave="resetZoom"
      >
        <img
          ref="thumbImg"
          :src="project.thumbnail"
          alt="project thumbnail"
          class="w-full h-full object-cover transition-transform duration-300 ease-out"
          :style="zoomStyle"
          loading="lazy"
        />
      </div>

      <div
        :class="[
          'w-full space-y-4',
          hasThumb ? 'md:col-span-3' : 'md:col-span-5',
        ]"
      >
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
        >
          {{ project.title }}
        </h1>

        <p class="text-gray-600 text-sm sm:text-base">
          {{ project.duration }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="(stack, index) in project.techStack"
            :key="index"
            class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs sm:text-sm text-gray-700"
          >
            {{ stack }}
          </span>
        </div>

        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex md:inline-flex items-center justify-center gap-2 mt-2 rounded-lg text-sm sm:text-base text-gray-700 hover:text-gray-400 transition-colors duration-200"
        >
          Go Site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="mt-10 md:mt-12 space-y-8">
      <section>
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          프로젝트 개요
        </h2>
        <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
          {{ project.summary }}
        </p>
      </section>

      <section>
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">성과</h2>
        <ul
          class="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base"
        >
          <li v-for="(achievement, index) in project.achievements" :key="index">
            {{ achievement }}
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          참여도
        </h2>

        <div
          v-for="(item, index) in project.participation"
          :key="index"
          class="text-sm sm:text-base"
          :class="index > 0 ? 'mt-3' : ''"
        >
          <p class="font-semibold text-gray-700">{{ item.title }}</p>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="(item, cIndex) in item.content" :key="cIndex">
              {{ item }}
            </li>
          </ul>
        </div>

        <div
          class="mx-auto mt-6 md:mt-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <PieChart :participation="project.participation" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import PieChart from "../components/PieChart.vue";

import thumbCoway from "../assets/thmb-coway.png";
import thumbnailPms from "../assets/thmb-pms.png";
import thumbnailWoowa from "../assets/thmb-woowa.png";
import thumbnailAcademy from "../assets/thmb-academy.png";
import thumbnailAmore from "../assets/thmb-amore.png";

const route = useRoute();
const id = computed(() => Number(route.params.id));

const projects = {
  7: {
    title: "코웨이 ITO 통합 운영 프로젝트",
    duration: "2025.07 ~ 현재",
    thumbnail: thumbCoway,
    techStack: [
      "HTML5",
      "SCSS",
      "CSS3",
      "Vuetify(2.2.11)",
      "JavaScript(ES6)",
      "TypeScript(4.5.4)",
      "Vue.js(2.6.11)",
      "React(17.0.2)",
      "GitHub",
    ],
    summary:
      "코웨이 국내 코디 약 1만 명이 사용하는 필수 백오피스 앱으로 제품 정보 확인, 실적 관리, 고객 관리, 모바일 주문 기능을 제공. 특히 모바일 주문 기능은 SAP 연동을 통한 결제 요청이 가능하며 현장 코디들의 업무 효율성을 높이기 위해 지속적인 운영 및 신규 기능 개발을 수행. 퍼블리싱 전담자로 참여하여 UI/UX 개선, 반응형 퍼블리싱 업무를 수행.",
    achievements: [
      "국내 코디 직원들이 사용하는 필수 앱의 안정적 운영으로 월간 활성 사용자(MAU) 1만 이상 유지.",
      "SCSS + Vuetify 기반 반응형 퍼블리싱 최적화로 다양한 디바이스 해상도에서 발생하던 레이아웃 깨짐 문제를 해결, 사용자 만족도 향상.",
      "하이브리드 앱(WebView) 특성상 발생한 CSS/JS 성능 저하 문제를 GPU 가속 처리와 코드 경량화로 개선, 화면 응답 속도 향상.",
      "Vue.js, React 기반 하이브리드 앱 퍼블리싱 최적화를 통해 신규 기능 개발 속도 및 유지보수 효율성 강화.",
      "GitHub 협업 체계를 활용하여 코드 품질 관리 및 배포 프로세스 안정화.",
    ],
    participation: [
      {
        title: "UI 퍼블리싱 및 반응형 웹 구현 (70%)",
        percent: 70,
        content: [
          "HTML5, SCSS, Vuetify를 활용하여 앱 UI 퍼블리싱 전담.",
          "다양한 기기 해상도에서 발생한 반응형 깨짐 이슈를 breakpoints 세분화 및 SCSS mixin 정리로 해결.",
        ],
      },
      {
        title: "프론트엔드 기능 지원 (20%)",
        percent: 20,
        content: [
          "디지털세일즈: Vue.js(2.6.11), JavaScript(ES6) 기반 퍼블리싱 및 인터랙션 구현 지원.",
          "모바일 주문: React(17.0.2), TypeScript(4.5.4) 기반 퍼블리싱 및 인터랙션 구현 지원.",
        ],
      },
      {
        title: "협업 및 운영 지원 (10%)",
        percent: 10,
        content: [
          "GitHub 기반 버전 관리 및 코드 리뷰 프로세스를 정착시켜 협업 효율 향상.",
          "기획자, 개발자와의 긴밀한 협업을 통해 운영 중 발생하는 UI/UX 버그를 신속히 대응, 신규 요구사항 반영.",
        ],
      },
    ],
  },
  6: {
    title: "메가존 클라우드  PMS 구축 및 운영 프로젝트",
    duration: "2024.12 ~ 2025.06",
    url: "https://mzc.pms.megaone.com/",
    thumbnail: thumbnailPms,
    techStack: [
      "HTML5",
      "SCSS",
      "Mui(5.15.13)",
      "TypeScript(5.4)",
      " React(18.2.0)",
      "Bitbucket",
    ],
    summary:
      "메가존 클라우드의 프로젝트 관리 시스템(PMS) 구축 및 운영 프로젝트로, 리소스 관리, 일정 추적, 예산 관리 등의 기능을 제공하는 웹 기반 플랫폼. React 기반의 UI/UX 개선과 반응형 퍼블리싱을 통해 프로젝트 운영의 효율성을 극대화하고 직관적인 사용자 경험을 제공.",
    achievements: [
      "신규 기능 퍼블리싱 및 UI 개선을 통해 프로젝트 관리 시간을 30% 단축, 사용자의 업무 생산성을 향상하고 프로젝트 운영 효율성을 극대화함.",
      "SCSS + Mui 기반 반응형 퍼블리싱 최적화로 다양한 디바이스 해상도에서 발생하던 레이아웃 깨짐 및 UI 불일치 문제를 해결, 사용자 만족도 50% 상승.",
      "복잡도 높은 UI 요소에서 발생한 성능 저하 이슈를 CSS 최적화와 컴포넌트 단위 분리로 해결, 렌더링 성능 개선.",
      "안정적인 운영으로 시스템 안정성 90% 이상 유지.",
    ],
    participation: [
      {
        title: "UI 퍼블리싱 및 반응형 웹 구현 (50%)",
        percent: 50,
        content: [
          "UI 퍼블리싱 전담, SCSS 및 Mui를 활용한 일관된 디자인 시스템 구축.",
          "다중 브라우저 및 다양한 해상도에서 발생한 반응형 깨짐/스타일 충돌 문제를 breakpoints 세분화와 SCSS mixin 정리로 해결.",
        ],
      },
      {
        title: "컴포넌트 개발 (20%)",
        percent: 20,
        content: [
          "React + TypeScript 기반 재사용 가능한 UI 컴포넌트를 개발 및 유지보수.",
        ],
      },
      {
        title: "UI/UX 개선 및 최적화 (20%)",
        percent: 20,
        content: [
          "직관적인 UX 제공을 위한 폼 검증 메시지 개선 및 접근성 대응(ARIA 속성 보강).",
        ],
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content: [
          "프론트엔드 개발자,기획자와 협업하여 신규 요구사항 반영 및 UI/UX 개선 사항을 적극 제안.",
          "Bitbucket을 통한 코드 리뷰, 브랜치 전략 활용으로 코드 품질 유지 및 협업 효율 향상.",
        ],
      },
    ],
  },
  5: {
    title: "우아한형제들 채용 시스템",
    duration: "2022.07 ~ 2024.11",
    url: "https://bmart-career.woowayouths.com/",
    thumbnail: thumbnailWoowa,
    techStack: [
      "HTML5",
      "SCSS",
      "SASS",
      "Vuetify(2.3.14)",
      "Javascript(ES6)",
      "Vue.js(2.6.10)",
      "GitLab",
    ],
    summary:
      "우아한형제들 및 계열사의 채용 시스템 개발 및 운영 프로젝트로 채용 프로세스를 효율적으로 관리하고 지원자 경험을 향상시키기 위한 웹 플랫폼 구축. Vue.js 및 Vuetify 기반의 UI/UX 개선과 신규 기능 퍼블리싱을 통해 사용자 인터페이스를 최적화하고 시스템 안정성과 확장성을 강화하여 개발 생산성을 극대화.",
    achievements: [
      "SSCSS/SASS + Vuetify를 활용한 UI 구조 최적화로 반응형 깨짐/중첩 스타일 충돌 문제를 해결, 채용 워크플로 효율성을 60% 향상.",
      "지원자 폼 작성 과정에서 발생한 브라우저별 입력 필드 불일치 문제를 Cross-Browser CSS 보완으로 해결, UX 만족도 50% 개선.",
      "Vue.js 컴포넌트 단위 개발 방식을 적극 도입하여 코드 재사용률 70% 이상 확보, 개발 속도 50% 단축.",
      "프론트엔드 인원 공백 시 API 데이터 바인딩 및 퍼블리싱 병행으로 일정 지연을 방지하고 프로젝트 완성도 30% 향상.",
    ],
    participation: [
      {
        title: "UI 퍼블리싱 및 반응형 웹 구현 (40%)",
        percent: 40,
        content: [
          "SCSS/SASS와 Vuetify 그리드 시스템을 기반으로 반응형 레이아웃 전면 개선.",
          "디바이스별 화면 깨짐 이슈 발생 시 SCSS 믹스인과 미디어쿼리 세분화를 통해 해결.",
          "유지보수가 용이하도록 UI 스타일 가이드 및 공통 모듈화 진행.",
        ],
      },
      {
        title: "컴포넌트 개발 (30%)",
        percent: 30,
        content: [
          "Vue.js로 재사용 가능한 입력, 리스트 컴포넌트를 제작.",
          "반복되는 폼 검증 로직을 컴포넌트 단위로 추출하여 코드 중복을 제거.",
        ],
      },
      {
        title: "동적 페이지 및 인터랙션 구현 (20%)",
        percent: 20,
        content: ["JavaScript(ES6) 기반으로 조건부 인터랙션 로직 최적화."],
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content: [
          "GitLab 기반 코드 리뷰 및 브랜치 전략으로 협업 체계 개선",
          "프론트엔드 리소스 부족 시 퍼블리싱 + API 연동 보조 업무 병행하여 프로젝트 일정 차질 최소화",
        ],
      },
    ],
  },

  4: {
    title: "배민 아카데미",
    duration: "2024.03 ~ 2024.11",
    url: "https://academy.baemin.com/",
    thumbnail: thumbnailAcademy,
    techStack: [
      "HTML5",
      "SCSS",
      "SASS",
      "Vuetify(2.3.14)",
      "Javascript(ES6)",
      "Vue.js(2.6.10)",
      "GitLab",
    ],
    summary:
      "배달의민족의 교육 플랫폼 배민 아카데미 운영 및 신규 기능 개발 프로젝트 수행. 배달업 종사자 및 예비 창업자를 위한 교육 콘텐츠 제공을 목적으로 이벤트 페이지 제작 및 UI/UX 개선을 통해 사용자 경험을 강화하고 Vue.js 기반 컴포넌트 최적화 및 반응형 웹 구현을 통해 플랫폼의 유지보수성과 확장성을 높이는 데 기여.",
    achievements: [
      "신규 이벤트 페이지 퍼블리싱을 주도하여 배민 아카데미 참가율 60% 증가.",
      "SCSS/SASS 및 Vuetify를 활용한 반응형 UI 적용으로 사용자 만족도 90% 유지.",
      "Vue.js 및 Vuetify 기반 UI 컴포넌트화를 통해 유지보수 시간을 50% 감소, 코드 재사용성 증가로 개발 비용 40% 절감.",
    ],
    participation: [
      {
        title: "이벤트 페이지 퍼블리싱 및 UI 구현 (50%)",
        percent: 50,
        content: [
          "신규 이벤트 페이지 개발을 주도하며 반응형 UI 설계와 최적화를 진행.",
          "모바일 디바이스에서 특정 브라우저에서 레이아웃이 깨지는 문제가 발생했으나, SCSS의 믹스인과 Vuetify의 breakpoints를 세분화해 대응.",
          "이 과정을 통해 다양한 환경에서 일관된 UI를 제공하며 이벤트 참여율 60% 증가에 기여.",
        ],
      },
      {
        title: "컴포넌트 개발 (20%)",
        percent: 20,
        content: [
          "Vue.js를 활용해 재사용 가능한 UI 컴포넌트를 제작.",
          "이벤트 페이지마다 중복되는 배너, 카드 UI를 공통 컴포넌트화하여 유지보수성을 개선.",
          "불필요한 CSS 중복을 제거하고 스타일 가이드를 정리하여 코드 품질 향상.",
        ],
      },
      {
        title: "동적 페이지 및 인터랙션 구현 (20%)",
        percent: 20,
        content: [
          "Javascript(ES6)로 동적 UI 요소 및 사용자 인터랙션 기능을 구현.",
          "스크롤 애니메이션과 조건부 렌더링에서 발생한 성능 저하 문제를 throttle/debounce 기법으로 최적화. 이를 통해 페이지 로딩 속도를 개선하고 사용자 이탈률을 줄임.",
        ],
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content: [
          "기획자와 협업하여 이벤트 콘텐츠 변경이 잦은 상황에서 SCSS 변수화와 모듈화를 통해 변경 대응 속도를 단축.",
          "GitLab을 활용한 코드 리뷰 프로세스에 참여하여 협업 품질을 유지.",
        ],
      },
    ],
  },
  3: {
    title: "아모레 뷰티포인트 웹/앱 운영 및 리뉴얼 프로젝트",
    duration: "2019.04 ~ 2022.07",
    url: "",
    thumbnail: thumbnailAmore,
    techStack: [
      "HTML5",
      "CSS3",
      "Javascript(ES6)",
      "JQuery",
      "GitLab",
      "웹 접근성 개선",
    ],
    summary:
      "아모레퍼시픽의 뷰티포인트 웹 및 하이브리드 앱 운영 및 리뉴얼 프로젝트 수행. 포인트 적립 및 혜택 제공 플랫폼의 UI/UX 개선, 웹 접근성 향상, 성능 최적화를 통해 사용자 경험을 극대화하고 브랜드 충성도를 강화. 반응형 웹을 적용하여 다양한 디바이스에서 최적화된 UI를 제공하며 이벤트 페이지 제작을 통해 고객 참여율 증대에 기여.",
    achievements: [
      "이미지 대체 텍스트 누락, 키보드 포커스 이동 불가 등 다수의 접근성 오류를 발견하고 WAI-ARIA 속성과 시멘틱 태그를 적용하여 2019년과 2021년 두 차례 웹 접근성 인증을 획득. 접근성 준수율을 90% 이상 유지.",
      "CSS 중복 선언과 불필요한 JS DOM 조작으로 인해 페이지 로딩 속도가 저하되는 문제가 있었으나, CSS 리팩토링과 JS 최적화를 통해 이를 해결하여 로딩 속도를 약 40% 단축하고 이탈률을 낮춤.",
      "모바일 환경에서는 화면 비율 깨짐과 터치 영역 오작동 문제가 발생했는데, 미디어쿼리를 세분화하고 뷰포트 단위(vw/vh)를 활용한 레이아웃 보정 및 CSS 터치 영역 확장을 적용하여 반응형 트러블슈팅을 성공적으로 수행.",
      "하이브리드 앱의 WebView 기반 페이지가 기기별 성능 차이로 느리게 동작하는 문제가 있었으나, JQuery와 JS의 코드 경량화를 통해 앱 업데이트 주기를 20% 단축하여 운영 효율성을 높임.",
      "포인트 적립과 사용 기능에서 UI 혼동으로 인한 사용자 클레임이 잦았으나, UI 개선과 프로세스 단순화를 통해 클레임 건수를 30% 감소시켜 서비스 신뢰도를 강화.",
    ],
    participation: [
      {
        title: "웹 및 앱 UI 퍼블리싱 및 반응형 웹 구현 (40%)",
        percent: 40,
        content: [
          "HTML5, CSS3를 활용하여 반응형 UI 시스템을 구축, 다양한 디바이스에서 일관된 사용자 경험 제공.",
        ],
      },
      {
        title: "웹 접근성 개선 및 인증 획득 지원 (20%)",
        percent: 20,
        content: [
          "웹 접근성 점검 프로세스 구축 및 지속적인 개선을 수행하여 웹 접근성 인증 획득.",
        ],
      },
      {
        title: "이벤트 페이지 제작 및 운영 (20%)",
        percent: 20,
        content: [
          "정기 및 비정기 이벤트 페이지 퍼블리싱을 담당하며 월간 이벤트 참여율 50% 증가에 기여.",
        ],
      },
      {
        title: "퍼포먼스 최적화 및 유지보수 (10%)",
        percent: 10,
        content: [
          "CSS 및 Javascript 최적화 기법을 활용하여 페이지 로딩 속도를 40% 단축. 하이브리드 앱의 유지보수 프로세스를 개선하여 업데이트 주기를 20% 단축.",
        ],
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content: [
          "개발 및 기획팀과 협업하여 포인트 적립 및 사용 기능의 UI 및 프로세스 개선. 사용자 피드백을 반영하여 클레임 건수를 30% 감소.",
        ],
      },
    ],
  },
  2: {
    title: "르노캐피탈 홈페이지 운영 및 구축 프로젝트",
    duration: "2016.02 ~ 2018.04",
    url: "",
    thumbnail: "",
    techStack: [
      "HTML5",
      "CSS3",
      "Javascript(ES5)",
      "JQuery",
      "Java",
      "Spring Boot",
      "Oracle DB",
      "SoftManager",
    ],
    summary:
      "르노 그룹의 금융 서비스 부문인 르노캐피탈 홈페이지 운영 및 구축 프로젝트 수행. 차량 금융 상품 조회 및 신청 프로세스를 최적화하여 사용자 편의성을 향상하고 백엔드 시스템을 개선하여 데이터 처리 속도 및 보안성을 강화. 견적 페이지 중심의 직관적인 UI/UX 개선과 함께 백엔드 API 최적화 및 데이터베이스 성능 개선을 통해 안정적인 금융 서비스 제공.",
    achievements: [
      "금융 상품 조회 및 신청 프로세스를 간소화하여 사용자 편의성을 40% 향상시키고 전환율 증가에 기여.",
      "웹사이트 리뉴얼을 통해 방문자 평균 체류 시간을 2배 증가시키고 이탈률을 50% 감소시켜 사용자 경험 개선.",
      "리뉴얼 프로젝트 일정 관리 및 팀 협업을 통해 계획된 기한 내 프로젝트 완료. 클라이언트 만족도 90% 이상 달성.",
      "SSL 인증서 갱신 및 XXS 취약성 대응 작업을 수행하여 보안성을 강화하고 시스템 가용성을 90% 이상 유지하며 안정적인 서비스 제공.",
      "데이터 처리 속도를 최적화하여 페이지 로딩 속도를 개선하고 이를 통해 웹사이트 성능과 사용자 경험을 향상.",
    ],
    participation: [
      {
        title: "프론트엔드 개발 (20%)",
        percent: 20,
        content: [
          "HTML5, CSS3, Javascript(ES5), JQuery를 활용하여 금융 상품 조회 및 신청 페이지 UI 수정 수행.",
        ],
      },
      {
        title: "백엔드 개발 (40%)",
        percent: 40,
        content: [
          "Java, Spring Boot를 활용하여 금융 상품 조회 및 신청 기능을 처리하는 백엔드 API 개발 및 성능 최적화. Spring Boot 기반의 비즈니스 로직을 최적화하여 서버 부하 감소 및 확장성 강화.",
        ],
      },
      {
        title: "데이터베이스 성능 개선 및 최적화 (20%)",
        percent: 20,
        content: [
          "Oracle DB의 쿼리 최적화 및 인덱싱을 적용하여 대량 데이터 조회 성능을 50% 개선. ",
        ],
      },
      {
        title: "보안 및 웹사이트 안정성 강화 (10%)",
        percent: 10,
        content: [
          "SSL 인증서 갱신 및 XXS 취약성 대응을 수행하여 보안성을 강화하고 시스템 가용성을 90% 이상 유지. 보안 모니터링 및 유지보수 지원을 통해 금융 서비스의 신뢰성 확보.",
        ],
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content: [
          "리뉴얼 프로젝트 일정 관리 및 개발/디자인팀과의 협업을 통해 원활한 커뮤니케이션을 유지. 기한 내 프로젝트 완료를 지원하며 클라이언트 요구사항을 반영하여 최적의 솔루션 제공.",
        ],
      },
    ],
  },
  1: {
    title: "순천향 병원 통합 의료 정보시스템 개발 프로젝트",
    duration: "2012.08 ~ 2015.03",
    url: "",
    thumbnail: "",
    techStack: [
      "Javascript(ES5)",
      "X_PLATFORM 9.2",
      "Java",
      "Live Framework 5.0",
      "Oracle DB",
      "Tortoise SVN",
    ],
    summary:
      "순천향 병원의 의료 데이터를 디지털화하고 효율적으로 관리하기 위해 EMR(Electronic Medical Record) 기반 통합 의료 정보시스템을 구축. 의료진과 행정직원의 업무 프로세스를 최적화하여 병원 운영을 효율화하고 환자 중심의 의료 서비스를 제공할 수 있도록 시스템을 개선. 진료 예약, 처방 관리, 환자 기록 검색 등의 기능을 최적화하여 의료진의 업무 부담을 줄이고 데이터의 정확성과 접근성을 향상.",
    achievements: [
      "중복 기록을 감소시키고 데이터 정합성을 유지하여 의료 정보의 정확도 및 신뢰성을 80% 향상.",
      "의료진 및 행정 직원의 요구사항을 반영한 직관적인 UI/UX를 설계하여 만족도를 70% 이상 개선.",
      "시스템 안정성을 확보하며 병원 운영 중단 없이 프로젝트를 기한 내 성공적으로 도입하여 클라이언트 신뢰 확보.",
    ],
    participation: [
      {
        title: "프론트엔드 개발 (30%)",
        percent: 30,
        content: [
          "X_PLATFORM 9.2 및 Javascript(ES5)를 활용하여 의료진과 행정직원이 직관적으로 사용할 수 있는 UI를 개발. 사용자 경험 최적화를 통해 만족도를 70% 이상 향상.",
        ],
      },
      {
        title: "백엔드 개발 (40%)",
        percent: 40,
        content: [
          "Java 및 Live Framework 5.0을 활용하여 의료 데이터 관리 및 비즈니스 로직 구현. 데이터 검색 및 조회 성능을 60% 이상 최적화. ",
        ],
      },
      {
        title: "데이터베이스 성능 개선 및 최적화 (20%)",
        percent: 20,
        content: [
          "Oracle DB의 쿼리 튜닝 및 인덱싱을 적용하여 대량 데이터 조회 속도를 50% 개선.",
        ],
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content: [
          "의료진 및 병원 행정팀과 협업하여 사용자의 요구사항을 반영한 기능을 개발. 지속적인 피드백을 받아 UI/UX 개선 및 백엔드 API 기능 최적화.",
        ],
      },
    ],
  },
};

const project = computed(
  () =>
    projects[id.value] || {
      title: "",
      duration: "",
      url: "",
      thumbnail: "",
      techStack: [],
      summary: "",
      achievements: [],
      participation: [],
    }
);

const hasThumb = computed(() => !!project.value.thumbnail);

const thumbImg = ref(null);
const zoomStyle = ref({});

function handleZoom(e) {
  const rect = thumbImg.value.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  zoomStyle.value = {
    transform: "scale(1.8)",
    transformOrigin: `${x}% ${y}%`,
  };
}

function resetZoom() {
  zoomStyle.value = {
    transform: "scale(1)",
    transformOrigin: "center center",
  };
}
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .transition-colors,
  .transition-transform,
  .transition-all {
    transition: none !important;
  }
}
</style>
