<template>
  <section
    id="projects"
    class="min-h-screen scroll-mt-14 flex flex-col pt-12 pb-12 transition-opacity duration-700 relative items-center"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <h2 class="px-20 text-center">
      <span class="block mb-2 text-xl font-medium">02. PROJECTS</span>
    </h2>
    <ul class="list">
      <li>
        <h3>메가존 클라우드 PMS 구축 및 운영 프로젝트</h3>
        <p>메가존 클라우드 PMS 퍼블리싱(운영 및 신규 개발)</p>
      </li>
      <li>
        <h3>우아한형제들 채용 시스템</h3>
        <p>
          채용 시스템의 운영 및 신규 개발 건 퍼블리싱을 주로 담당했고,
          프론트엔드 지원 업무를 병행
        </p>
      </li>
      <li>
        <h3>배민 아카데미</h3>
        <p>우아한형제들 배달의 민족 교육 플랫폼 및 이벤트 페이지 퍼블리싱</p>
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
}
</style>
