<template>
  <div>
    <!-- 로딩 중일 때 -->
    <Loading v-if="isLoading" />

    <!-- 로딩이 끝났을 때 -->
    <div v-else>
      <Home />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Loading from "./components/Loading.vue";
import Home from "./pages/Home.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
});
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
  margin: 0;
}
</style>
