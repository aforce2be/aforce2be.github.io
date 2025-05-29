<template>
  <section
    id="contact"
    class="min-h-screen scroll-mt-14 flex flex-col justify-between pt-12 pb-12 transition-opacity duration-700 relative"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    contact
  </section>
</template>

<script setup>
const { active } = defineProps({ active: Boolean });
</script>
