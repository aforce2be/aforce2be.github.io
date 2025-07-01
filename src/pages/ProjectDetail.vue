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
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = computed(() => Number(route.params.id)); // 핵심 수정

const project = computed(() => projects[id.value] || {});

import thumbnailPms from "../assets/pms-thmb.png";

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
        content:
          "프로젝트 전체 UI 퍼블리싱을 담당하며 SCSS 및 Mui를 활용해 일관된 디자인 시스템을 구축. 반응형 UI 설계 및 최적화를 통해 다양한 디바이스에서 최상의 사용자 경험 제공.",
      },
      {
        title: "컴포넌트 개발 (20%)",
        content:
          "React와 TypeScript로 재사용 가능한 UI 컴포넌트를 개발 및 유지보수. 코드 일관성과 확장성을 고려한 설계를 적용하여 개발 효율성을 향상.",
      },
      {
        title: "UI/UX 개선 및 최적화 (20%)",
        content:
          "사용자 피드백을 분석하여 UI/UX 개선안을 도출하고 직관적인 사용자 경험을 제공하여 사용자 만족도 50% 향상에 기여.",
      },
      {
        title: "협업 및 프로젝트 지원 (10%)",
        content:
          "프론트엔드 개발자 및 기획자와 협업하여 UI/UX 개선 사항을 도출하고 시스템 안정성 90% 이상 유지.",
      },
    ],
  },
};
</script>

<style scoped>
/* 추가적인 커스터마이징은 여기에 작성 */
</style>
