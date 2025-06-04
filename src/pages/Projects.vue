<template>
  <section
    id="projects"
    class="min-h-screen scroll-mt-14 flex flex-col pt-12 pb-12 transition-opacity duration-700 relative items-center"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <h2 class="px-20 text-center text-white">
      <span class="block mb-2 text-xl font-medium">02. PROJECTS</span>
    </h2>
    <ul class="list text-white">
      <li class="project-item px-20 transition-all duration-300 ease-in-out">
        <h3 class="transition-transform duration-300">
          메가존 클라우드 PMS 구축 및 운영 프로젝트
        </h3>
        <p class="transition-transform duration-300">
          메가존 클라우드 PMS 퍼블리싱(운영 및 신규 개발)
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { active } = defineProps({ active: Boolean });
</script>

<style scoped>
.list {
  width: 90%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.list li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Hover 효과: li 높이 증가 + 내부 요소 왼쪽 이동 */
.project-item:hover {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.project-item:hover h3,
.project-item:hover p {
  transform: translateX(-10px);
}
</style>
