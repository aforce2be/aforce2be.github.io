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
      <li
        class="project-item px-20 transition-all duration-300 ease-in-out flex justify-between items-center"
      >
        <div>
          <h3 class="transition-transform duration-300 text-4xl font-semibold">
            메가존 클라우드 PMS 구축 및 운영 프로젝트
          </h3>
          <p class="transition-transform duration-300 mt-2 text-l">
            메가존 클라우드 PMS 퍼블리싱(운영 및 신규 개발)
          </p>
          <p class="transition-transform duration-300 text-sm text-gray-400">
            <span>#React</span>
            <span class="ml-2">#React</span>
          </p>
        </div>
        <span
          class="flex items-center gap-2 group text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          GO TO SITE
          <!-- 화살표 아이콘 (Heroicons 기준) -->
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
        </span>
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
