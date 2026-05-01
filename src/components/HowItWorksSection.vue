<template>
  <section id="how-it-works" class="py-32 px-8">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 animate-fade-up stagger-1">快速上手</p>
        <h2 class="font-editorial text-4xl sm:text-5xl font-normal mb-6 animate-fade-up stagger-2">
          三步开始你的阅读之旅
        </h2>
        <p class="text-white/50 text-lg animate-fade-up stagger-3">
          无需复杂配置，几分钟内即可拥有专属的信息流。
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(step, i) in steps" :key="i"
             class="relative text-center animate-fade-up"
             :class="'stagger-' + (i + 1)">
          <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-2xl font-editorial text-white/50">
            {{ i + 1 }}
          </div>
          <h3 class="text-lg font-medium mb-4">{{ step.title }}</h3>
          <p class="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">{{ step.desc }}</p>
          <div v-if="i < 2" class="hidden md:block absolute top-8 left-[60%] w-[calc(100%-4rem)]">
            <svg class="w-full h-4 text-white/5" viewBox="0 0 200 16" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4">
              <path d="M0 8h200"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  steps: { type: Array, required: true },
})
</script>
