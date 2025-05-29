<template>
  <section
    id="about"
    class="min-h-screen scroll-mt-14 flex flex-col justify-between pt-12 pb-12 transition-opacity duration-700 relative"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <!-- h3: 왼쪽 슬라이드 인 -->
    <h2
      class="text-8xl font-extrabold transition-all duration-700 ease-in-out px-20"
      :class="
        isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      "
    >
      <span class="block mb-2 text-xl font-medium">01. ABOUT</span>
      TURNING STRUCTURE<br class="hidden md:inline" />INTO EXPERIENCE
    </h2>

    <!-- p: 오른쪽 슬라이드 인 + delay -->
    <p
      class="text-base md:text-2xl text-gray-700 leading-relaxed text-right transition-all duration-700 ease-in-out px-20"
      :class="
        isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      "
      :style="isAnimated ? 'transition-delay: 200ms' : ''"
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

    <!-- 텍스트 배너 -->
    <div
      class="relative overflow-hidden h-16 mt-12 pr-16 transition-opacity duration-700 ease-in-out"
      :class="isBannerVisible ? 'opacity-100' : 'opacity-0'"
    >
      <div
        ref="track"
        :class="[
          'flex absolute whitespace-nowrap gap-8',
          animateBanner ? 'animate-wave-loop' : 'initial-position',
        ]"
        @mouseenter="pauseAnimation"
        @mouseleave="resumeAnimation"
      >
        <div class="flex gap-8">
          <span
            v-for="n in 20"
            :key="n"
            class="text-7xl font-extrabold whitespace-nowrap"
          >
            EVERY PIXEL HAS MEANING.
          </span>
        </div>
        <div class="flex gap-8">
          <span
            v-for="n in 20"
            :key="'b' + n"
            class="text-7xl font-extrabold whitespace-nowrap"
          >
            EVERY PIXEL HAS MEANING.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const { active } = defineProps({ active: Boolean });

const isAnimated = ref(false);
const isBannerVisible = ref(false);
const animateBanner = ref(false);
const track = ref(null);

const pauseAnimation = () => {
  if (track.value) track.value.style.animationPlayState = "paused";
};

const resumeAnimation = () => {
  if (track.value) track.value.style.animationPlayState = "running";
};

watch(
  () => active,
  (newVal) => {
    if (newVal) {
      requestAnimationFrame(() => {
        isAnimated.value = true;
      });
      setTimeout(() => {
        isBannerVisible.value = true;
      }, 1000);
      setTimeout(() => {
        animateBanner.value = true;
      }, 1200);
    } else {
      isAnimated.value = false;
      isBannerVisible.value = false;
      animateBanner.value = false;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
@keyframes wave-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-wave-loop {
  animation: wave-loop 100s linear infinite;
  will-change: transform;
}

.initial-position {
  transform: translateX(0);
}
</style>
