<template>
  <section ref="statsRef" class="relative py-20 px-8 border-y border-white/5 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-gradient"></div>
    <div class="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
      <div v-for="(stat, i) in stats" :key="i" class="text-center animate-fade-up" :class="'stagger-' + (i + 1)">
        <div class="font-editorial text-4xl lg:text-5xl mb-2 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          {{ animated ? (stat.target.toFixed(stat.decimals || 0)) : stat.value.toFixed(stat.decimals || 0) }}{{ stat.suffix }}
        </div>
        <div class="text-sm text-white/40">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = ref([
  { value: 0, target: 128, suffix: 'K+', label: '活跃用户' },
  { value: 0, target: 2, suffix: ',000+', label: '优质来源' },
  { value: 0, target: 50, suffix: 'M+', label: '文章收藏' },
  { value: 0, target: 99.9, suffix: '%', label: '服务可用', decimals: 1 },
])

const statsRef = ref(null)
const animated = ref(false)

const animateCounter = (stat) => {
  const duration = 2000
  const steps = 60
  const increment = stat.target / steps
  let current = 0
  const timer = setInterval(() => {
    current++
    if (current >= steps) {
      stat.value = stat.target
      clearInterval(timer)
    } else {
      stat.value = Math.round((increment * current) * 10) / 10
    }
  }, duration / steps)
}

function handleVisible(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated.value) {
      animated.value = true
      stats.value.forEach(s => animateCounter(s))
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(handleVisible, { threshold: 0.3 })
  if (statsRef.value) observer.observe(statsRef.value)
  window._statsObserver = observer
})

onUnmounted(() => {
  if (window._statsObserver) {
    window._statsObserver.disconnect()
  }
})
</script>
