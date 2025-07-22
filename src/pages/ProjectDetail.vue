<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row items-start gap-6">
      <img
        :src="project.thumbnail"
        alt="project thumbnail"
        class="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
      />
      <div class="flex-1 space-y-4">
        <h1 class="text-3xl font-bold">{{ project.title }}</h1>
        <p class="text-gray-600">{{ project.duration }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(stack, index) in project.techStack"
            :key="index"
            class="bg-gray-100 text-sm px-3 py-1 rounded-full"
          >
            {{ stack }}
          </span>
        </div>
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          class="flex items-center justify-center gap-2 text-base text-gray-600 hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Go Site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
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

    <div class="mt-8 space-y-6">
      <section>
        <h2 class="text-xl font-semibold mb-2">프로젝트 개요</h2>
        <p class="text-gray-700">{{ project.summary }}</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2">성과</h2>
        <ul class="list-disc list-inside text-gray-700">
          <li v-for="(achievement, index) in project.achievements" :key="index">
            {{ achievement }}
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2">참여도</h2>
        <div
          v-for="(item, index) in project.participation"
          :key="index"
          :class="index > 0 ? 'mt-3' : ''"
        >
          <p class="font-semibold text-gray-600">{{ item.title }}</p>
          <ul class="list-disc list-inside text-gray-700">
            <li>
              {{ item.content }}
            </li>
          </ul>
        </div>
        <div class="w-[400px] mx-auto">
          <PieChart :participation="project.participation" class="mt-8" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import PieChart from "../components/PieChart.vue";

const route = useRoute();
const id = computed(() => Number(route.params.id)); // 핵심 수정

const project = computed(() => projects[id.value] || {});

import thumbnailPms from "../assets/thmb-pms.png";
import thumbnailWoowa from "../assets/thmb-woowa.png";
import thumbnailAcademy from "../assets/thmb-academy.png";
import thumbnailAmore from "../assets/thmb-amore.png";

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
    title: "",
    duration: "2022.07 ~ 2024.11",
    url: "",
    thumbnail: thumbnailAmore,
    techStack: [""],
    summary: "",
    achievements: ["S"],
    participation: [
      {
        title: "",
        percent: 1,
        content: "",
      },
    ],
  },
  2: {
    title: "",
    duration: "2022.07 ~ 2024.11",
    url: "",
    thumbnail: "",
    techStack: [""],
    summary: "",
    achievements: ["S"],
    participation: [
      {
        title: "",
        percent: 1,
        content: "",
      },
    ],
  },
  1: {
    title: "",
    duration: "2022.07 ~ 2024.11",
    url: "",
    thumbnail: "",
    techStack: [""],
    summary: "",
    achievements: ["S"],
    participation: [
      {
        title: "",
        percent: 1,
        content: "",
      },
    ],
  },
};
</script>

<style scoped></style>
