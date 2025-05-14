<template>
  <section
    id="about"
    class="min-h-screen bg-white p-8 transition-opacity duration-700 scroll-mt-14"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <div class="inner max-w-7xl mx-automax-w-7xl mx-auto">
      <h2 class="text-3xl font-bold">About</h2>
      <p>소개 내용...</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  active: Boolean,
});
</script>
