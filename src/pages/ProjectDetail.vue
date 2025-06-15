<template>
  <div class="max-w-5xl mx-auto px-4 py-12 text-white">
    <!-- Hero Section -->
    <section class="mb-10">
      <h1 class="text-4xl font-bold">메가존 클라우드 PMS 구축 및 운영</h1>
      <p class="text-gray-400 mt-2 text-sm">2024.12 ~ 현재 진행 중</p>
      <img
        src="../assets/mockup-01.png"
        alt="프로젝트 대표 이미지"
        class="mt-6 rounded-xl shadow-lg w-full max-h-[400px] object-cover"
      />
    </section>

    <!-- Info Grid -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <div class="bg-gray-900 p-4 rounded-lg">
        <h4 class="text-sm text-gray-400">담당 역할</h4>
        <p class="text-white">퍼블리싱, UI 이슈 대응</p>
      </div>
      <div class="bg-gray-900 p-4 rounded-lg">
        <h4 class="text-sm text-gray-400">기여도</h4>
        <p class="text-white">100%</p>
      </div>
      <div class="bg-gray-900 p-4 rounded-lg">
        <h4 class="text-sm text-gray-400">기술 스택</h4>
        <p class="text-white text-sm">SCSS, MUI, TypeScript, React</p>
      </div>
      <div class="bg-gray-900 p-4 rounded-lg">
        <h4 class="text-sm text-gray-400">협업 도구</h4>
        <p class="text-white text-sm">Bitbucket, Jira</p>
      </div>
    </section>

    <!-- Problem / Solution / Result -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">프로젝트 개요</h2>
      <div class="space-y-6 text-sm text-gray-300">
        <div>
          <h3 class="font-semibold text-lg text-white mb-1">문제</h3>
          <p>기존 PMS UI는 비효율적이며 유지보수가 어려운 구조였습니다.</p>
        </div>
        <div>
          <h3 class="font-semibold text-lg text-white mb-1">해결</h3>
          <p>
            React 기반의 MUI 디자인 시스템으로 컴포넌트를 개선하고 반응형 지원을
            강화했습니다.
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-lg text-white mb-1">성과</h3>
          <p>업무 효율성 30% 향상, UI 관련 이슈 50% 감소</p>
        </div>
      </div>
    </section>

    <!-- Screenshot Gallery -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">작업 화면</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src="../assets/screen-01.png"
          alt="화면1"
          class="rounded-lg shadow"
        />
        <img
          src="../assets/screen-02.png"
          alt="화면2"
          class="rounded-lg shadow"
        />
        <img
          src="../assets/screen-03.png"
          alt="화면3"
          class="rounded-lg shadow"
        />
      </div>
    </section>

    <!-- Retrospective -->
    <section>
      <h2 class="text-2xl font-bold mb-4">프로젝트를 통해 배운 점</h2>
      <ul class="list-disc ml-6 text-sm text-gray-300 space-y-2">
        <li>MUI를 커스터마이징하며 디자인 시스템 이해도 향상</li>
        <li>Bitbucket을 통한 PR 리뷰 경험 강화</li>
        <li>Jira와 연계한 이슈 관리 프로세스 습득</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const projectId = route.params.id;
</script>
