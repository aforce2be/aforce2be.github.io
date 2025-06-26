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
          class="text-blue-500 hover:underline text-sm"
        >
          프로젝트 바로가기 →
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
        <p class="text-gray-700">{{ project.participation }}</p>
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
      "SCSS 및 Mui를 활용한 반응형 웹 최적화로 다양한 디바이스에서 UX를 개선, 사용자 만족도 50% 상승",
      "안정적인 운영으로 시스템 안정성 90% 이상 유지",
    ],
    participation: "todo",
  },
};
</script>

<style scoped>
/* 추가적인 커스터마이징은 여기에 작성 */
</style>
