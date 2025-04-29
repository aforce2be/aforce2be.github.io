<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
        <nav class="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <!-- Logo / Name -->
            <div class="text-2xl font-bold">
                <a href="/">Sujin's Portfolio</a>
            </div>

            <!-- Navigation Links -->
            <ul class="flex space-x-8 text-lg font-medium">
                <li>
                    <RouterLink to="/about" class="hover:text-blue-500 transition">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects" class="hover:text-blue-500 transition">Projects</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact" class="hover:text-blue-500 transition">Contact</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
// import About from "../pages/About.vue";
export default {
    name: "Header",
};
</script>

<style scoped>
/* Smooth scrolling for internal links */
html {
    scroll-behavior: smooth;
}
</style>
