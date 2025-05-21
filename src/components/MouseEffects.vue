<!-- template -->
<template>
  <div class="custom-cursor">
    <div
      ref="cursorDot"
      class="cursor-dot"
      :class="{ active: isHovering }"
    ></div>
  </div>
</template>

<!-- script -->
<script setup>
import { ref, onMounted } from "vue";

const cursorDot = ref(null);
const isHovering = ref(false);
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX + 30;
    mouseY = e.clientY + 30;
  });

  const animate = () => {
    const el = cursorDot.value;
    if (el) {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      el.style.left = `${currentX}px`;
      el.style.top = `${currentY}px`;
    }
    requestAnimationFrame(animate);
  };
  animate();
});
</script>

<!-- style -->
<style>
.custom-cursor {
  cursor: none;
}
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background-color: rgba(43, 228, 99, 0.5);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out;
  z-index: 9999;
}
.cursor-dot.active {
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
