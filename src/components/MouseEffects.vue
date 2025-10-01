<template>
  <div class="custom-cursor">
    <div
      ref="cursorDot"
      class="cursor-dot"
      :class="{ active: isHovering, detail: props.variant === 'detail' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const cursorDot = ref(null);
const isHovering = ref(false);
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

let onMouseMoveTrack; // 포인터 추적
let onMouseMoveHover; // projects 내부 hover 감지

const props = defineProps({
  variant: { type: String, default: "default" },
});

onMounted(() => {
  // 마우스 이동 좌표 추적
  onMouseMoveTrack = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  window.addEventListener("mousemove", onMouseMoveTrack);

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

  onMouseMoveHover = (e) => {
    const inside = !!e.target.closest("#projects");
    if (inside !== isHovering.value) {
      isHovering.value = inside;
    }
  };
  document.addEventListener("mousemove", onMouseMoveHover);
});

onUnmounted(() => {
  if (onMouseMoveTrack)
    window.removeEventListener("mousemove", onMouseMoveTrack);
  if (onMouseMoveHover)
    document.removeEventListener("mousemove", onMouseMoveHover);
});
</script>

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

/* Projects 영역일 때 커서 작게 */
.cursor-dot.active {
  width: 16px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.3);
}

.cursor-dot.detail {
  width: 16px;
  height: 16px;
  background-color: rgba(0, 200, 255, 0.5);
}
</style>
