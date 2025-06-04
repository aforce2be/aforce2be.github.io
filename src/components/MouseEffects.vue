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
import { ref, onMounted, onUnmounted } from "vue";

const cursorDot = ref(null);
const isHovering = ref(false);
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

onMounted(() => {
  // 마우스 이동 좌표 추적
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 애니메이션 반복
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

  // projects 영역 감지
  const projectsEl = document.getElementById("projects");
  if (projectsEl) {
    projectsEl.addEventListener("mouseenter", () => {
      isHovering.value = true;
    });
    projectsEl.addEventListener("mouseleave", () => {
      isHovering.value = false;
    });
  }
});

onUnmounted(() => {
  const projectsEl = document.getElementById("projects");
  if (projectsEl) {
    projectsEl.removeEventListener("mouseenter", () => {
      isHovering.value = true;
    });
    projectsEl.removeEventListener("mouseleave", () => {
      isHovering.value = false;
    });
  }
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
  background-color: rgba(223, 31, 72, 0.7);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease-out;
  z-index: 9999;
}

/* 💡 Projects 영역일 때 커서 작게 */
.cursor-dot.active {
  width: 16px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
