<template>
    <div v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-1000"
        :class="{ '-translate-y-full': hide }">
        <strong class="text-white text-4xl font-bold transition-transform duration-1000"
            :style="{ transform: hide ? 'translate(-35%, 0%)' : '' }">
            <!-- <span class="opacity-0 txt01">Turning </span>
      <span class="opacity-0 txt02">structure </span>
      <span class="opacity-0 txt03">into </span>
      <span class="opacity-0 txt04">experience</span> -->
            <span class="block opacity-0 txt05 text-4xl text-white text-center mt-6 font-medium"></span>
        </strong>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const show = ref(true)
const hide = ref(false)

onMounted(() => {
    // setTimeout(() => {
    //   document.querySelector('.txt01').style.opacity = 1
    // }, 600)
    // setTimeout(() => {
    //   document.querySelector('.txt02').style.opacity = 1
    // }, 1200)
    // setTimeout(() => {
    //   document.querySelector('.txt03').style.opacity = 1
    // }, 1800)
    // setTimeout(() => {
    //   document.querySelector('.txt04').style.opacity = 1
    // }, 2400)

    const txt05 = document.querySelector('.txt05')
    const text = 'Every pixel has meaning...'
    let i = 0

    setTimeout(() => {
        txt05.style.opacity = 1
        const typing = setInterval(() => {
            if (i < text.length) {
                txt05.textContent += text[i]
                i++
            } else {
                clearInterval(typing)
            }
        }, 80)
    }, 600)

    setTimeout(() => {
        hide.value = true
    }, 6000)
    setTimeout(() => {
        show.value = false
    }, 7000)
})
</script>

<style scoped>
.txt05 {
    text-align: center;
}

.txt05::after {
    content: '|';
    animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
    to {
        visibility: hidden;
    }
}
</style>