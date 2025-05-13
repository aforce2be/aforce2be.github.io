<template>
  <section id="home" class="min-h-screen bg-gray-100 transition-opacity duration-700 py-4"
    :class="{ 'opacity-100': active, 'opacity-50': !active }">
    <div class="inner max-w-7xl mx-automax-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">
        Turning structure into experience
      </h2>
      <p class="text-lg text-gray-600">11년 경력의 웹 퍼블리셔 + 프론트 이해도</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  active: Boolean
});
</script>
