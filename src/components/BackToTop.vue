<template>
  <div ref="btn" class="back-to-top opacity-0 fixed bottom-8 right-8 z-40 transition-all duration-500"
       :class="{ 'opacity-100 translate-y-0': visible, 'translate-y-4 opacity-0': !visible }">
    <button class="w-12 h-12 glass-subtle rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
            @click="scrollToTop">
      <svg class="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const btn = ref(null)
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
