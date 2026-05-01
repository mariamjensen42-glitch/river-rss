<template>
  <section class="py-32 px-8 bg-white/[0.01]">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 animate-fade-up stagger-1">用户评价</p>
        <h2 class="font-editorial text-4xl sm:text-5xl font-normal mb-6 animate-fade-up stagger-2">
          被 128,000+ 读者所信赖
        </h2>
        <p class="text-white/50 text-lg animate-fade-up stagger-3">
          听听他们怎么说 River 如何改变了他们的阅读方式。
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(testimonial, i) in testimonials" :key="i"
             class="glass-subtle rounded-2xl p-8 animate-fade-up"
             :class="'stagger-' + (i % 6 + 1)">
          <div class="flex items-center gap-1 mb-6">
            <svg v-for="star in 5" :key="star" class="w-4 h-4" :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-white/10'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p class="text-white/60 leading-relaxed mb-6">"{{ testimonial.quote }}"</p>
          <div class="flex items-center gap-4 pt-4 border-t border-white/5">
            <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg font-editorial text-white/40">
              {{ testimonial.avatar }}
            </div>
            <div>
              <div class="text-sm font-medium">{{ testimonial.name }}</div>
              <div class="text-xs text-white/30">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  testimonials: { type: Array, required: true },
})
</script>
