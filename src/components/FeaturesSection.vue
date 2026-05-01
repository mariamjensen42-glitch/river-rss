<template>
  <section id="features" class="py-32 px-8 bg-white/[0.01]">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 animate-fade-up stagger-1">核心功能</p>
        <h2 class="font-editorial text-4xl sm:text-5xl font-normal mb-6 animate-fade-up stagger-2">
          为专注而生
        </h2>
        <p class="text-white/50 text-lg animate-fade-up stagger-3">
          每一个细节都经过精心设计，只为让你享受纯粹的阅读体验。
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(feature, i) in features" :key="i"
             class="glass-subtle glass-hover rounded-2xl p-8 animate-fade-up group/card hover:border-white/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:-translate-y-1"
             :class="'stagger-' + (i % 6 + 1)">
          <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover/card:bg-white/10 transition-colors duration-400">
            <svg class="w-5 h-5 text-white/50 group-hover/card:text-white/80 transition-colors duration-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" v-html="feature.icon"></svg>
          </div>
          <h3 class="text-lg font-medium mb-3 group-hover/card:text-white transition-colors duration-400">{{ feature.title }}</h3>
          <p class="text-sm text-white/40 leading-relaxed group-hover/card:text-white/60 transition-colors duration-400">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  features: { type: Array, required: true },
})
</script>
