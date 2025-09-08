<template>
  <section
    id="contact"
    class="min-h-screen scroll-mt-14 flex flex-col justify-between pt-12 pb-12 transition-opacity duration-700 relative bg-white"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <h2
      class="text-8xl font-extrabold transition-all duration-700 ease-in-out px-20"
      :class="
        isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      "
    >
      <span class="block mb-2 text-xl font-medium text-right">03. CONTACT</span>
      TURNING STRUCTURE<br class="hidden md:inline" />INTO EXPERIENCE
    </h2>

    <div class="px-20 text-right text-lg">
      <p>aforce2be@naver.com</p>
      <p>010.3032.0333</p>
      <p>github</p>
    </div>

    <p
      class="text-base md:text-2xl text-gray-700 leading-relaxed text-left transition-all duration-700 ease-in-out px-20"
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
      }, 300);
      setTimeout(() => {
        animateBanner.value = true;
      }, 700);
    } else {
      isAnimated.value = false;
      isBannerVisible.value = false;
      animateBanner.value = false;
    }
  },
  { immediate: true }
);
</script>
