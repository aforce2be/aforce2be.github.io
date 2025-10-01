<template>
  <section
    id="contact"
    class="min-h-screen scroll-mt-14 relative flex flex-col justify-between space-y-6 md:space-y-10 lg:space-y-12 pt-6 pb-8 md:pt-12 md:pb-12 transition-opacity duration-700 bg-white"
    :class="{ 'opacity-100': active, 'opacity-60': !active }"
  >
    <h2
      class="font-extrabold transition-all duration-700 ease-in-out leading-tight px-4 sm:px-8 md:px-12 lg:px-20 text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
      :class="
        isAnimated
          ? 'translate-x-0 opacity-100'
          : '-translate-x-6 sm:-translate-x-8 md:-translate-x-12 opacity-0'
      "
    >
      <span
        class="block mb-2 sm:mb-3 text-base sm:text-lg md:text-xl font-medium text-right"
      >
        03. CONTACT
      </span>
      COLLABORATION <br class="hidden md:inline" />AND GROWTH
      <br class="hidden md:inline" />
      THROUGH COMMUNICATION
    </h2>

    <div
      class="transition-all duration-700 ease-in-out px-4 sm:px-8 md:px-12 lg:px-20 text-right text-base sm:text-lg"
      :class="
        isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      "
      :style="isAnimated ? 'transition-delay: 120ms' : ''"
    >
      <p>aforce2be@naver.com</p>
      <p class="mt-2">010.3032.0333</p>

      <a
        href="https://github.com/aforce2be"
        target="_blank"
        rel="noopener noreferrer"
        class="flex justify-end mt-2 transition-opacity duration-300 hover:opacity-80"
        aria-label="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="text-gray-800 hover:text-black transition-colors"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-1 .8-1-.9-.1-1.8-.5-1.8-2 0-.5.2-.9.5-1.2-.1-.1-.2-.6 0-1.2 0 0 .4-.1 1.3.5.4-.1.9-.2 1.4-.2s1 .1 1.4.2c.9-.6 1.3-.5 1.3-.5.2.6.1 1.1 0 1.2.3.3.5.7.5 1.2 0 1.5-.9 1.9-1.8 2 0 .2.7.8.8 1.5v2c0 .3.2.6.8.5C20.2 21.4 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
          />
        </svg>
      </a>
    </div>

    <p
      class="text-gray-700 leading-relaxed text-left transition-all duration-700 ease-in-out px-4 sm:px-8 md:px-12 lg:px-20 text-sm sm:text-base md:text-xl lg:text-2xl"
      :class="
        isAnimated
          ? 'translate-x-0 opacity-100'
          : 'translate-x-6 sm:translate-x-8 md:translate-x-12 opacity-0'
      "
      :style="isAnimated ? 'transition-delay: 240ms' : ''"
    >
      지금까지 여러 프로젝트에서 웹 퍼블리싱을 맡으며 사용자 경험을 더 좋게
      만들고, 코드 효율성을 높이는 데 집중해왔습니다.
      <br class="hidden md:inline" />
      앞으로도 끊임없이 배우고 도전하면서 더 완성도 높은 결과물을 만들어내고
      싶습니다. 협업과 소통을 무엇보다 중요하게 생각하는 만큼, 함께하는 팀과
      즐겁게 성장하며 가치 있는 성과를 만들어가겠습니다.
    </p>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
const { active } = defineProps({ active: Boolean });

// About와 동일한 트리거 방식: 한 프레임 뒤 켜서 트랜지션 보장
const isAnimated = ref(false);

watch(
  () => active,
  (on) => {
    if (on) {
      requestAnimationFrame(() => {
        isAnimated.value = true;
      });
    } else {
      // 전환 구간에서 빈 화면 방지: 즉시 끄지 않음
      // 필요 시, 섹션이 완전히 화면 밖으로 나갔을 때만 false로 리셋하는 로직 추가 가능
      // isAnimated.value = false;
    }
  },
  { immediate: true }
);
</script>
