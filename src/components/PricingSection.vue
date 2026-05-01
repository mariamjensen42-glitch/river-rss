<template>
  <section id="pricing" class="py-32 px-8">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-20 text-center mx-auto">
        <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 animate-fade-up stagger-1">定价方案</p>
        <h2 class="font-editorial text-4xl sm:text-5xl font-normal mb-6 animate-fade-up stagger-2">
          选择适合你的方案
        </h2>
        <p class="text-white/50 text-lg animate-fade-up stagger-3">
          所有方案均包含 7 天免费试用，无需信用卡即可开始。
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div v-for="(plan, i) in plans" :key="i"
             class="glass-subtle glass-hover rounded-2xl p-8 animate-fade-up flex flex-col"
             :class="['stagger-' + (i + 1), plan.featured ? 'relative border-white/20 ring-1 ring-white/10' : '']">
          <div v-if="plan.featured" class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs rounded-full font-medium">
            最受欢迎
          </div>
          <h3 class="text-lg font-medium mb-2">{{ plan.name }}</h3>
          <p class="text-sm text-white/40 mb-8">{{ plan.desc }}</p>
          <div class="mb-8">
            <span class="font-editorial text-5xl">{{ plan.price }}</span>
            <span v-if="plan.period" class="text-white/30 text-sm">/{{ plan.period }}</span>
          </div>
          <ul class="space-y-4 mb-10 flex-1">
            <li v-for="(item, j) in plan.items" :key="j" class="flex items-start gap-3 text-sm text-white/50">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12l5 5L20 7"/>
              </svg>
              {{ item }}
            </li>
          </ul>
          <button :class="[
            'w-full py-3 rounded-full font-medium text-sm transition-all duration-300',
            plan.featured ? 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
          ]">
            {{ plan.cta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  plans: { type: Array, required: true },
})
</script>
