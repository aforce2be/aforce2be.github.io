<template>
  <div>
    <!-- 로딩 중일 때 -->
    <Loading v-if="isLoading" />

    <!-- 로딩이 끝났을 때 -->
    <div v-else>
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Loading from "./components/Loading.vue";
import Header from "./components/Header.vue";

const isLoading = ref(true);

onMounted(() => {
  // 예시: 2초 후 로딩 종료
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
