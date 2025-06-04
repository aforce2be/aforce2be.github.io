<template>
  <main>
    <div
      :style="`
    background: url(${bgImage}) no-repeat center center / cover;
    opacity: ${bgOpacity};
    transition: opacity 0.1s linear;
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  `"
    ></div>

    <About :active="activeSection === 'about'" />
    <div ref="projectRef">
      <Projects :active="activeSection === 'projects'" />
    </div>
    <Contact :active="activeSection === 'contact'" />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import bgImage from "../assets/base-bg.png";

const isOpen = ref(false);
const activeSection = ref("about");
const isScrolled = ref(false);
const cursorDot = ref(null);
const projectRef = ref(null);
const bgOpacity = ref(0);

onMounted(() => {
  const sections = document.querySelectorAll("section");
  const projectSection = document.getElementById("projects");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));

  // 초기 섹션 감지
  setTimeout(() => {
    const topSection = Array.from(sections).find((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });

    if (topSection) {
      activeSection.value = topSection.id;
    }
  }, 100);

  // 스크롤 상태 감지 + Projects 진입 시 opacity 계산
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;

    if (projectRef.value) {
      const rect = projectRef.value.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = 0;

      let progress =
        1 - Math.min(Math.max((rect.top - end) / (start - end), 0), 1);

      // opacity 증가 가속
      progress = Math.pow(progress, 0.8); // 더 빠르게 증가하도록 (0.5 < 1)
      bgOpacity.value = progress.toFixed(2);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  onUnmounted(() => {
    sections.forEach((section) => observer.unobserve(section));
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
