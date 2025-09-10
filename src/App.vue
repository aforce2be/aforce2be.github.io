<template>
  <div>
    <!-- 로딩 중일 때 -->
    <!-- <Loading v-if="isLoading" /> -->

    <!-- 로딩이 끝났을 때 -->
    <div>
      <MouseEffects
        :variant="route.name === 'ProjectDetail' ? 'detail' : 'default'"
      />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Loading from "./components/Loading.vue";
import MouseEffects from "./components/MouseEffects.vue";
import Home from "./pages/Home.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isLoading = ref(true);

onMounted(() => {
  // setTimeout(() => {
  //   isLoading.value = false;
  // }, 5000);
});
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
  margin: 0;
}
</style>
