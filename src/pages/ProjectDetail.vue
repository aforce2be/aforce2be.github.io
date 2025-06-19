<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const projectId = route.params.id;
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Project Detail</h1>
    <p>Project ID: {{ projectId }}</p>
  </div>
</template>
