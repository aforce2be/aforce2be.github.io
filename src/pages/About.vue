<template>
  <section
    id="about"
    class="min-h-screen transition-opacity duration-700 scroll-mt-14 flex flex-col justify-between pt-12 pb-12 px-20"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <!-- H2 텍스트: 왼쪽에서 슬라이드 인 -->
    <h2
      class="text-8xl font-extrabold transition-all duration-900 ease-in-out"
      :class="
        isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      "
    >
      <div class="text-xl font-medium">01</div>
      TURNING STRUCTURE<br class="hidden md:inline" />INTO EXPERIENCE
    </h2>

    <!-- P 텍스트: 오른쪽에서 슬라이드 인 -->
    <p
      class="text-base md:text-2xl text-gray-700 leading-relaxed text-right transition-all duration-900 ease-in-out delay-200"
      :class="
        isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      "
    >
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
  </section>
</template>

<script setup>
import { watch, ref } from "vue";

// 구조 분해로 active 바로 가져오기
const { active } = defineProps({ active: Boolean });

// 내부 애니메이션 트리거용 상태
const isAnimated = ref(false);

// active 상태 감지 후 애니메이션 트리거
watch(
  () => active,
  (newVal) => {
    if (newVal) {
      requestAnimationFrame(() => {
        isAnimated.value = true;
      });
    } else {
      isAnimated.value = false;
    }
  },
  { immediate: true }
);
</script>
