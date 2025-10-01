<template>
  <section
    ref="sectionEl"
    id="about"
    class="min-h-screen scroll-mt-14 flex flex-col justify-between pt-10 md:pt-12 pb-10 md:pb-12 transition-opacity duration-700 relative"
    :class="{ 'opacity-100': active, 'opacity-60': !active }"
  >
    <!-- h2: 왼쪽 슬라이드 인 -->
    <h2
      :key="'h2-' + animKey"
      class="px-6 md:px-12 lg:px-20 font-extrabold transition-all duration-700 ease-in-out text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight"
      :class="
        isAnimated
          ? 'translate-x-0 opacity-100'
          : '-translate-x-6 sm:-translate-x-8 md:-translate-x-12 opacity-0'
      "
    >
      <span
        class="block mb-2 sm:mb-3 text-base sm:text-lg md:text-xl font-medium"
      >
        01. ABOUT
      </span>
      TURNING STRUCTURE<br class="hidden md:inline" />INTO EXPERIENCE
    </h2>

    <!-- p: 오른쪽 슬라이드 인 + delay -->
    <p
      :key="'p-' + animKey"
      class="px-6 md:px-12 lg:px-20 text-right transition-all duration-700 ease-in-out text-sm sm:text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed"
      :class="
        isAnimated
          ? 'translate-x-0 opacity-100'
          : 'translate-x-6 sm:translate-x-8 md:translate-x-12 opacity-0'
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
      class="relative overflow-hidden h-12 sm:h-14 md:h-16 mt-8 md:mt-12 pr-6 md:pr-16 transition-opacity duration-700 ease-in-out"
      :class="isBannerVisible ? 'opacity-100' : 'opacity-0'"
    >
      <div
        ref="track"
        :class="[
          'flex absolute whitespace-nowrap',
          animateBanner ? 'animate-wave-loop' : 'initial-position',
        ]"
        @mouseenter="pauseAnimation"
        @mouseleave="resumeAnimation"
      >
        <div class="flex items-center gap-6 sm:gap-8 shrink-0">
          <span
            v-for="n in 16"
            :key="n"
            class="whitespace-nowrap font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            EVERY PIXEL HAS MEANING.
          </span>
        </div>
        <div
          class="flex items-center gap-6 sm:gap-8 shrink-0"
          aria-hidden="true"
        >
          <span
            v-for="n in 16"
            :key="'b' + n"
            class="whitespace-nowrap font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            EVERY PIXEL HAS MEANING.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";

const { active } = defineProps({ active: Boolean });

const sectionEl = (ref < HTMLElement) | (null > null);
const isAnimated = ref(false);
const isBannerVisible = ref(false);
const animateBanner = ref(false);

// 섹션이 완전히 화면 밖인지
const isFullyOut = ref(true);
// 재진입 시 애니메이션을 확실히 재가동시키기 위한 키
const animKey = ref(0);

let io = null;
let t1 = null;
let t2 = null;

onMounted(() => {
  io = new IntersectionObserver(
    ([entry]) => {
      // intersectionRatio === 0 이면 완전히 화면 밖
      isFullyOut.value = entry.intersectionRatio === 0;
    },
    { threshold: [0, 0.01] }
  );
  if (sectionEl.value) io.observe(sectionEl.value);
});

onUnmounted(() => {
  if (io && sectionEl.value) io.unobserve(sectionEl.value);
  io?.disconnect();
  if (t1) clearTimeout(t1);
  if (t2) clearTimeout(t2);
});

// 안전한 지연 실행 헬퍼
function restartAnimations() {
  // 키 변화로 h2/p를 가볍게 재마운트
  animKey.value++;

  // 한 프레임 쉬고 가시화
  requestAnimationFrame(() => {
    isAnimated.value = true;
    if (t1) clearTimeout(t1);
    if (t2) clearTimeout(t2);
    t1 = window.setTimeout(() => (isBannerVisible.value = true), 1000);
    t2 = window.setTimeout(() => (animateBanner.value = true), 1200);
  });
}

watch(
  () => active,
  (on) => {
    if (on) {
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
      // 바로 숨기지 말고 배너만 멈춤
      animateBanner.value = false;
      // isAnimated/isBannerVisible 은 유지
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
