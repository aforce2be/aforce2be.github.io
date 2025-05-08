<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
        <nav class="hover:text-white hover:bg-black max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <!-- Logo / Name -->
            <div class="text-2xl font-bold">
                <a href="/" class="transition">Sujin's Portfolio</a>
            </div>

            <!-- Desktop Navigation Links -->
            <ul class="hidden md:flex space-x-8 text-lg font-medium">
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects">Projects</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>

            <!-- Mobile Hamburger -->
            <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
                <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
        </nav>

        <!-- Mobile Full Screen Menu -->
        <div v-if="isOpen"
            class="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl z-50 transition">

            <!-- X Button inside overlay -->
            <button @click="isOpen = false" class="absolute top-6 right-6 focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <RouterLink @click="isOpen = false" to="/about" class="hover:text-blue-300">About</RouterLink>
            <RouterLink @click="isOpen = false" to="/projects" class="hover:text-blue-300">Projects</RouterLink>
            <RouterLink @click="isOpen = false" to="/contact" class="hover:text-blue-300">Contact</RouterLink>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>
