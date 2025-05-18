<template>
  <main>
    <About :active="activeSection === 'about'" />

    <section
      id="projects"
      class="min-h-screen bg-white p-8 transition-opacity duration-700"
      :class="{
        'opacity-100': activeSection === 'projects',
        'opacity-50': activeSection !== 'projects',
      }"
    >
      <h2 class="text-3xl font-bold">Projects</h2>
      <p>프로젝트 내용...</p>
    </section>

    <section
      id="contact"
      class="min-h-screen bg-gray-100 p-8 transition-opacity duration-700"
      :class="{
        'opacity-100': activeSection === 'contact',
        'opacity-50': activeSection !== 'contact',
      }"
    >
      <h2 class="text-3xl font-bold">Contact</h2>
      <p>연락처 내용...</p>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import About from "../pages/About.vue";

const isOpen = ref(false);
const activeSection = ref("about");
const isScrolled = ref(false);
const cursorDot = ref(null);

onMounted(() => {
  const sections = document.querySelectorAll("section");

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

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
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
