<template>
  <main>
    <div
      :style="`
    background: url(${bgImage}) no-repeat center center / cover;
    opacity: ${bgOpacity};
    transition: opacity 0.1s linear;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;  /* = inset:0 */
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    contain: paint;             
    overflow: hidden;           
    will-change: opacity;       
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
      const nearBottom = rect.bottom <= window.innerHeight * 0.85; // 85% 지점
      if (nearBottom && activeSection.value !== "contact") {
        activeSection.value = "contact"; // 🔽 CONTACT 미리 활성화
      }

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

  // Home.vue
  onMounted(() => {
    const sections = document.querySelectorAll("section");

    const ratios = new Map();
    let current = activeSection.value; // 'about'컴포넌트에서 시작
    const SWITCH_DELTA = 0.15; // 현재 섹션보다 15% 이상 더 보여야 전환
    const MIN_ACTIVATE = 0.6; // 최소 가시율 60% 이상일 때만 전환

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio || 0);
        });

        const sorted = [...ratios.entries()].sort((a, b) => b[1] - a[1]);
        const [topId, topRatio] = sorted[0] || [];
        if (!topId) return;

        const currentRatio = ratios.get(current) ?? 0;

        // 전환 조건: 다른 섹션이 현재보다 충분히 많이 보이고, 절대 가시율도 높을 때
        if (topId !== current) {
          if (topRatio >= Math.max(MIN_ACTIVATE, currentRatio + SWITCH_DELTA)) {
            current = topId;
            activeSection.value = topId;
          }
        } else {
          // 유지
          activeSection.value = current;
        }
      },
      {
        root: null,
        threshold: thresholds,
        // CONTACT가 더 일찍 감지되도록: 아래쪽 30%를 뷰포트에서 빼고 관찰
        rootMargin: "0px 0px -30% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    // 초기 섹션 감지(최초 진입 시 가시율 큰 것)
    requestAnimationFrame(() => {
      const initSorted = [...sections]
        .map((s) => {
          const r = s.getBoundingClientRect();
          const vh = window.innerHeight;
          const visible = Math.max(
            0,
            Math.min(r.bottom, vh) - Math.max(r.top, 0)
          );
          const ratio = visible / Math.min(vh, r.height || vh);
          return { id: s.id, ratio };
        })
        .sort((a, b) => b.ratio - a.ratio);
      if (initSorted[0]) {
        current = initSorted[0].id;
        activeSection.value = current;
      }
    });
  });
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
