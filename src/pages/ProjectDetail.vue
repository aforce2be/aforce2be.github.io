<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <!-- 헤더 영역: 모바일 단일 컬럼 → md부터 2열 -->
    <div
      class="flex flex-col md:grid md:grid-cols-5 md:gap-8 items-start gap-6"
    >
      <!-- 썸네일 -->
      <div v-if="hasThumb" class="md:col-span-2 order-1 md:order-none w-full">
        <img
          v-if="project.thumbnail"
          :src="project.thumbnail"
          alt="project thumbnail"
          class="w-full aspect-[4/3] md:aspect-[3/2] object-cover rounded-2xl shadow-md"
          loading="lazy"
        />
      </div>

      <!-- 텍스트 메타 -->
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

        <!-- 기술스택 칩 -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(stack, index) in project.techStack"
            :key="index"
            class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs sm:text-sm text-gray-700"
          >
            {{ stack }}
          </span>
        </div>

        <!-- 외부 링크: 모바일에서도 터치하기 쉽게 block 버튼화 -->
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex md:inline-flex items-center justify-center gap-2 mt-2 rounded-lg border border-gray-300/60 px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
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

    <!-- 본문 영역 -->
    <div class="mt-10 md:mt-12 space-y-8">
      <!-- 프로젝트 개요 -->
      <section>
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          프로젝트 개요
        </h2>
        <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
          {{ project.summary }}
        </p>
      </section>

      <!-- 성과 -->
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

      <!-- 참여도 + 차트 -->
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
            <li>{{ item.content }}</li>
          </ul>
        </div>

        <!-- 차트: 반응형 컨테이너 -->
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
import { useRoute } from "vue-router";
import PieChart from "../components/PieChart.vue";

import thumbnailPms from "../assets/thmb-pms.png";
import thumbnailWoowa from "../assets/thmb-woowa.png";
import thumbnailAcademy from "../assets/thmb-academy.png";
import thumbnailAmore from "../assets/thmb-amore.png";

const route = useRoute();
const id = computed(() => Number(route.params.id));

const projects = {
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
      "SCSS 및 Mui를 활용한 반응형 웹 최적화로 다양한 디바이스에서 UX를 개선, 사용자 만족도 50% 상승.",
      "안정적인 운영으로 시스템 안정성 90% 이상 유지.",
    ],
    participation: [
      {
        title: "UI 퍼블리싱 및 반응형 웹 구현 (50%)",
        percent: 50,
        content:
          "프로젝트 전체 UI 퍼블리싱을 담당하며 SCSS 및 Mui를 활용해 일관된 디자인 시스템을 구축. 반응형 UI 설계 및 최적화를 통해 다양한 디바이스에서 최상의 사용자 경험 제공.",
      },
      {
        title: "컴포넌트 개발 (20%)",
        percent: 20,
        content:
          "React와 TypeScript로 재사용 가능한 UI 컴포넌트를 개발 및 유지보수. 코드 일관성과 확장성을 고려한 설계를 적용하여 개발 효율성을 향상.",
      },
      {
        title: "UI/UX 개선 및 최적화 (20%)",
        percent: 20,
        content:
          "사용자 피드백을 분석하여 UI/UX 개선안을 도출하고 직관적인 사용자 경험을 제공하여 사용자 만족도 50% 향상에 기여.",
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content:
          "프론트엔드 개발자 및 기획자와 협업하여 UI/UX 개선 사항을 도출하고 시스템 안정성 90% 이상 유지.",
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
      "SCSS/SASS 및 Vuetify를 활용한 UI 구조 최적화와 퍼블리싱을 통해 채용 시스템의 워크플로를 단순화하여 지원 프로세스 효율성을 60% 향상.",
      "Javascript(ES6) 기반의 동적 페이지 및 인터랙션 기능을 추가하여 사용자 경험(UX) 만족도를 50% 개선.",
      "Vue.js의 컴포넌트 기반 개발 방식을 적용하여 코드 재사용률을 70% 이상 증가시키고 Vuetify 프레임워크를 활용한 UI 구성으로 개발 속도를 50% 단축.",
      "퍼블리싱 및 프론트엔드 지원을 병행하며 API 호출 및 데이터 바인딩을 구현해 데이터 연동 최적화. 프론트엔드 인원 공백을 보완하고 일정 조율 및 협업을 통해 UI 완성도 개선. 코드 정리 및 유지보수성 강화로 프로젝트 완성도 30% 향상.",
    ],
    participation: [
      {
        title: "UI 퍼블리싱 및 반응형 웹 구현 (40%)",
        percent: 40,
        content:
          "HTML5, SCSS/SASS, Vuetify를 활용하여 UI 디자인을 구현하고 채용 시스템 전반의 퍼블리싱을 담당했으며 반응형 웹 및 유지보수가 용이한 퍼블리싱 시스템을 구축.",
      },
      {
        title: "컴포넌트 개발 (30%)",
        percent: 30,
        content:
          "Vue.js를 활용해 재사용 가능한 UI 컴포넌트를 개발. 코드 재사용률을 70% 이상 증가시키고 유지보수성을 강화하여 개발 속도를 50% 단축.",
      },
      {
        title: "동적 페이지 및 인터랙션 구현 (20%)",
        percent: 20,
        content:
          "Javascript(ES6)를 활용한 동적 UI 요소 및 사용자 인터랙션 기능을 추가하여 지원자 경험을 향상. 직관적인 UI/UX 개선을 통해 사용자 만족도를 50% 향상.",
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content:
          "개발자 및 기획자와 협업하여 UI/UX 이슈 해결 및 신규 기능 기획 반영. GitLab을 활용한 코드 리뷰 및 배포 프로세스를 관리하며 프론트엔드 지원 업무와 퍼블리싱을 병행함으로써 팀 인원 공백을 보완하고 프로젝트 완성도를 30% 향상.",
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
        content:
          "신규 이벤트 페이지 개발을 주도하며 반응형 UI 설계 및 최적화 진행. 이를 통해 다양한 디바이스에서 최적화된 UX 제공 및 이벤트 참여율 60% 증가에 기여.",
      },
      {
        title: "컴포넌트 개발 (20%)",
        percent: 20,
        content:
          "Vue.js 를 활용하여 재사용 가능한 UI 컴포넌트 제작 및 유지보수 체계화. 코드 리팩토링을 통해 유지보수 시간을 50% 단축하고 개발 효율성을 향상.",
      },
      {
        title: "동적 페이지 및 인터랙션 구현 (20%)",
        percent: 20,
        content:
          "Javascript(ES6)를 활용하여 동적 UI 요소 및 사용자 인터랙션 기능을 개발하여 사용자 이탈률을 감소시킴.",
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content:
          "기획 및 개발팀과 협업하여 UI/UX 개선을 주도하고 신규 기능 기획 반영. ",
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
      "웹 접근성 준수를 위한 UI 및 코드 개선을 수행하여 2019년과 2021년 ㈜웹와치 웹 접근성 인증 획득. 접근성 준수율 90% 이상 유지.",
      "CSS 최적화 및 리팩토링을 통해 페이지 로딩 속도를 40% 단축하여 사용자 경험을 개선하고 이탈률 감소.",
      "정기 및 비정기 이벤트 페이지 퍼블리싱을 통해 월간 이벤트 참여율 50% 이상 증가.",
      "JQuery 및 Javascript(ES6) 성능 최적화 및 코드 리팩토링을 통해 하이브리드 앱 퍼블리싱 최적화, 앱 업데이트 주기를 20% 단축하여 운영 효율성 향상.",
      "포인트 적립 및 사용 기능의 안정성 강화 및 UI 개선을 통해 사용자 신뢰를 높이고 클레임 건수를 30% 감소시키며 서비스 품질 향상에 기여.",
      "2021년 기준 MAU 65만 규모 앱을 안정적으로 운영한 경험",
    ],
    participation: [
      {
        title: "웹 및 앱 UI 퍼블리싱 및 반응형 웹 구현 (40%)",
        percent: 40,
        content:
          "HTML5, CSS3를 활용하여 반응형 UI 시스템을 구축, 다양한 디바이스에서 일관된 사용자 경험 제공.",
      },
      {
        title: "웹 접근성 개선 및 인증 획득 지원 (20%)",
        percent: 20,
        content:
          "웹 접근성 점검 프로세스 구축 및 지속적인 개선을 수행하여 웹 접근성 인증 획득.",
      },
      {
        title: "이벤트 페이지 제작 및 운영 (20%)",
        percent: 20,
        content:
          "정기 및 비정기 이벤트 페이지 퍼블리싱을 담당하며 월간 이벤트 참여율 50% 증가에 기여.",
      },
      {
        title: "퍼포먼스 최적화 및 유지보수 (10%)",
        percent: 10,
        content:
          "CSS 및 Javascript 최적화 기법을 활용하여 페이지 로딩 속도를 40% 단축. 하이브리드 앱의 유지보수 프로세스를 개선하여 업데이트 주기를 20% 단축.",
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content:
          "개발 및 기획팀과 협업하여 포인트 적립 및 사용 기능의 UI 및 프로세스 개선. 사용자 피드백을 반영하여 클레임 건수를 30% 감소.",
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
        content:
          "HTML5, CSS3, Javascript(ES5), JQuery를 활용하여 금융 상품 조회 및 신청 페이지 UI 수정 수행.",
      },
      {
        title: "백엔드 개발 (40%)",
        percent: 40,
        content:
          "Java, Spring Boot를 활용하여 금융 상품 조회 및 신청 기능을 처리하는 백엔드 API 개발 및 성능 최적화. Spring Boot 기반의 비즈니스 로직을 최적화하여 서버 부하 감소 및 확장성 강화.",
      },
      {
        title: "데이터베이스 성능 개선 및 최적화 (20%)",
        percent: 20,
        content:
          "Oracle DB의 쿼리 최적화 및 인덱싱을 적용하여 대량 데이터 조회 성능을 50% 개선. ",
      },
      {
        title: "보안 및 웹사이트 안정성 강화 (10%)",
        percent: 10,
        content:
          "SSL 인증서 갱신 및 XXS 취약성 대응을 수행하여 보안성을 강화하고 시스템 가용성을 90% 이상 유지. 보안 모니터링 및 유지보수 지원을 통해 금융 서비스의 신뢰성 확보.",
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content:
          "리뉴얼 프로젝트 일정 관리 및 개발/디자인팀과의 협업을 통해 원활한 커뮤니케이션을 유지. 기한 내 프로젝트 완료를 지원하며 클라이언트 요구사항을 반영하여 최적의 솔루션 제공.",
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
        content:
          "X_PLATFORM 9.2 및 Javascript(ES5)를 활용하여 의료진과 행정직원이 직관적으로 사용할 수 있는 UI를 개발. 사용자 경험 최적화를 통해 만족도를 70% 이상 향상.",
      },
      {
        title: "백엔드 개발 (40%)",
        percent: 40,
        content:
          "Java 및 Live Framework 5.0을 활용하여 의료 데이터 관리 및 비즈니스 로직 구현. 데이터 검색 및 조회 성능을 60% 이상 최적화. ",
      },
      {
        title: "데이터베이스 성능 개선 및 최적화 (20%)",
        percent: 20,
        content:
          "Oracle DB의 쿼리 튜닝 및 인덱싱을 적용하여 대량 데이터 조회 속도를 50% 개선.",
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        percent: 10,
        content:
          "의료진 및 병원 행정팀과 협업하여 사용자의 요구사항을 반영한 기능을 개발. 지속적인 피드백을 받아 UI/UX 개선 및 백엔드 API 기능 최적화.",
      },
    ],
  },
};

// 안전 가드: id 없거나 잘못된 경우 빈 객체
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
</script>

<style scoped>
/* 모션 민감 사용자 배려 (선택) */
@media (prefers-reduced-motion: reduce) {
  .transition-colors,
  .transition-transform,
  .transition-all {
    transition: none !important;
  }
}
</style>
