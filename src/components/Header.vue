<template>
    <header
        :class="[isScrolled ? 'bg-white shadow' : 'bg-transparent', 'fixed top-0 left-0 w-full transition-colors duration-300 z-50']">
        <nav class="max-w-7xl mx-auto flex justify-between items-center py-4">
            <div class="text-2xl font-bold">
                <a href="#" class="transition">Sujin's Portfolio</a>
            </div>

            <!-- Desktop Nav -->
            <ul class="hidden md:flex space-x-8 text-lg font-medium">
                <li>
                    <a :class="linkClass('about')" href="#about">About</a>
                </li>
                <li>
                    <a :class="linkClass('projects')" href="#projects">Projects</a>
                </li>
                <li>
                    <a :class="linkClass('contact')" href="#contact">Contact</a>
                </li>
            </ul>

            <!-- Mobile Hamburger -->
            <button @click="isOpen = true" class="md:hidden focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>

        <!-- Mobile Full Screen Menu -->
        <div v-if="isOpen"
            class="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl z-50 transition">

            <!-- Close Button -->
            <button @click="isOpen = false" class="absolute top-6 right-6 focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <a @click="isOpen = false" :class="linkClass('about')" href="#about">About</a>
            <a @click="isOpen = false" :class="linkClass('projects')" href="#projects">Projects</a>
            <a @click="isOpen = false" :class="linkClass('contact')" href="#contact">Contact</a>
        </div>
    </header>

    <main class="pt-16">
        <Home :active="activeSection === 'home'" />
        <About :active="activeSection === 'about'"></About>

        <section id="projects" class="min-h-screen bg-white p-8 transition-opacity duration-700"
            :class="{ 'opacity-100': activeSection === 'projects', 'opacity-50': activeSection !== 'projects' }">
            <h2 class="text-3xl font-bold">Projects</h2>
            <p>프로젝트 내용...</p>
        </section>

        <section id="contact" class="min-h-screen bg-gray-100 p-8 transition-opacity duration-700"
            :class="{ 'opacity-100': activeSection === 'contact', 'opacity-50': activeSection !== 'contact' }">
            <h2 class="text-3xl font-bold">Contact</h2>
            <p>연락처 내용...</p>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const isOpen = ref(false);
const activeSection = ref('');
const isScrolled = ref(false);

const linkClass = (id) => {
    return activeSection.value === id
        ? 'text-indigo-600 font-semibold underline underline-offset-8 decoration-2 decoration-indigo-400'
        : 'text-gray-700 hover:text-indigo-500 transition-colors duration-200';
};

onMounted(() => {
    const sections = document.querySelectorAll('section');

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
            rootMargin: '0px',
            threshold: 0.5,
        }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 10;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    onUnmounted(() => {
        sections.forEach((section) => observer.unobserve(section));
        window.removeEventListener('scroll', handleScroll);
    });
});
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>
