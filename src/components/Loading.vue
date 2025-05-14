<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-1000"
    :class="{ '-translate-y-full': hide }"
  >
    <strong
      class="text-white text-3xl md:text-5xl font-bold transition-all duration-1000"
      :class="{ 'opacity-0 scale-95': hide, 'opacity-100 scale-100': !hide }"
    >
      <span
        class="block opacity-0 txt05 text-2xl md:text-4xl text-white text-center mt-6 font-medium"
      ></span>
    </strong>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const show = ref(true);
const hide = ref(false);

onMounted(() => {
  const txt05 = document.querySelector(".txt05");
  const text = "Every pixel has meaning...";
  let i = 0;

  setTimeout(() => {
    txt05.style.opacity = 1;
    const typing = setInterval(() => {
      if (i < text.length) {
        txt05.textContent += text[i];
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);
  }, 600);

  setTimeout(() => {
    hide.value = true;
  }, 4000);
  setTimeout(() => {
    show.value = false;
  }, 5000);
});
</script>

<style scoped>
.txt05 {
  text-align: center;
}

.txt05::after {
  content: "|";
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
