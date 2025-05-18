<template>
  <section
    id="about"
    class="min-h-screen transition-opacity duration-700 scroll-mt-14"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <div class="inner max-w-7xl mx-automax-w-7xl mx-auto pt-16 px-20">
      <div class="text-xl font-medium">01</div>
      <h2 class="text-7xl font-extrabold mb-4">
        TURNING STRUCTURE<br class="hidden md:inline" />INTO EXPERIENCE
      </h2>
      <p class="text-base md:text-lg text-gray-700 leading-relaxed">
        저는 정해진 구조 안에서 사용자 경험을 만들어내는 데 가치를 둡니다.<br
          class="hidden sm:inline"
        />
        대형 프로젝트를 통해 축적한 퍼블리싱 경험과 다양한 도메인에 대한 이해를
        바탕으로,<br class="hidden md:inline" />
        개발팀의 요구를 효과적으로 반영하는 동시에 프론트엔드 지원 업무를
        병행하며,<br class="hidden md:inline" />
        협업 역량과 업무 효율성을 입증해왔습니다.<br class="hidden sm:inline" />
        퍼블리셔의 역할을 넘어, 구조를 경험으로 바꾸는 일에 주도적으로
        임해왔습니다.
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  active: Boolean,
});
</script>
