<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-subtle backdrop-blur-xl">
    <div class="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
      <button class="font-editorial text-2xl italic cursor-pointer" @click="scrollToTop">River</button>
      <nav class="hidden md:flex items-center gap-10">
        <button v-for="link in navLinks" :key="link.id"
                class="text-sm transition-colors duration-300 cursor-pointer"
                :class="activeSection === link.id ? 'text-white' : 'text-white/40 hover:text-white'"
                @click="scrollTo(link.id)">
          {{ link.label }}
        </button>
      </nav>
      <button class="px-6 py-2.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hidden md:inline-flex">
        开始使用
      </button>
      <button class="md:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors" @click="menuOpen = !menuOpen">
        <svg v-if="!menuOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
        <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </header>

  <div v-if="menuOpen" class="fixed inset-0 z-40 md:hidden" @click="menuOpen = false">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <nav class="absolute top-20 left-4 right-4 glass-subtle rounded-2xl p-6 backdrop-blur-xl" @click.stop>
      <div class="flex flex-col gap-1">
        <button v-for="link in navLinks" :key="link.id"
                class="px-4 py-3 text-sm rounded-xl transition-all text-left w-full cursor-pointer"
                :class="activeSection === link.id ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'"
                @click="scrollTo(link.id); menuOpen = false">
          {{ link.label }}
        </button>
        <div class="pt-3 mt-3 border-t border-white/5">
          <button class="w-full px-4 py-3 text-sm bg-white text-black rounded-xl font-medium" @click="menuOpen = false">开始使用</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { id: 'features', label: '功能' },
  { id: 'how-it-works', label: '使用流程' },
  { id: 'preview', label: '预览' },
  { id: 'pricing', label: '定价' },
  { id: 'faq', label: '常见问题' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

let observer = null

onMounted(() => {
  const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean)
  if (!sections.length) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  )

  sections.forEach(s => observer.observe(s))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
