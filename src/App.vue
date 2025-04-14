<template>
  <loading></loading>
  <Header />
  <router-view />
</template>

<script setup>
import Loading from "./components/Loading.vue"
import Header from "./components/Header.vue";
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
  margin: 0;
}
</style>
