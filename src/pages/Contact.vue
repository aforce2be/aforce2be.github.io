<template>
  <section
    id="contact"
    class="min-h-screen scroll-mt-14 flex flex-col justify-between pt-12 pb-12 transition-opacity duration-700 relative bg-white"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <!-- H2: 왼쪽에서 슬라이드 인 -->
    <h2
      class="text-5xl md:text-8xl font-extrabold transition-all duration-700 ease-in-out px-20"
      :class="
        isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      "
    >
      <span class="block mb-2 text-xl font-medium text-right">03. CONTACT</span>
      COLLABORATION <br class="hidden md:inline" />AND GROWTH
      <br class="hidden md:inline" />
      THROUGH COMMUNICATION
    </h2>

    <!-- 연락처 블록: 아래에서 위로 + 살짝 딜레이 -->
    <div
      class="px-20 text-right text-lg transition-all duration-700 ease-in-out"
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

    <!-- 소개 문단: 오른쪽에서 슬라이드 인 + 더 긴 딜레이 -->
    <p
      class="text-base md:text-2xl text-gray-700 leading-relaxed text-left transition-all duration-700 ease-in-out px-20"
      :class="
        isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      "
      :style="isAnimated ? 'transition-delay: 240ms' : ''"
    >
      지금까지 여러 프로젝트에서 웹 퍼블리싱을 맡으며 사용자 경험을 더 좋게
      만들고, 코드 효율성을 높이는 데 집중해왔습니다.
      <br class="hidden md:inline" />앞으로도 끊임없이 배우고 도전하면서 더
      완성도 높은 결과물을 만들어내고 싶습니다. 협업과 소통을 무엇보다 중요하게
      생각하는 만큼, 함께하는 팀과 즐겁게 성장하며 가치 있는 성과를
      만들어가겠습니다.
    </p>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const { active } = defineProps({ active: Boolean });

// 상태는 단순화: 배너 없음. isAnimated만 제어
const isAnimated = ref(false);

watch(
  () => active,
  (on) => {
    if (on) {
      // 활성화 시 순차 등장 트리거
      // (About처럼 한 프레임 뒤에 켜서 트랜지션 확실히 작동)
      requestAnimationFrame(() => {
        isAnimated.value = true;
      });
    } else {
      // 전환 구간에서 빈 화면 방지: 바로 끄지 않고 유지
      // 필요 시 완전히 화면 밖으로 나갔을 때만 false로 리셋하는 로직을 추가 가능
      // isAnimated.value = false;
    }
  },
  { immediate: true }
);
</script>
