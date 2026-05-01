<template>
  <section id="preview" class="py-32 px-8">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div class="order-2 lg:order-1">
        <div class="glass-subtle rounded-3xl p-10 animate-scale-in">
          <div class="text-center mb-10 pb-8 border-b border-white/5">
            <div class="font-editorial text-6xl mb-2">156</div>
            <div class="text-sm text-white/40">订阅源</div>
          </div>
          <div class="grid grid-cols-3 gap-6 text-center">
            <div>
              <div class="font-editorial text-2xl mb-1">2,847</div>
              <div class="text-xs text-white/30">已读</div>
            </div>
            <div>
              <div class="font-editorial text-2xl mb-1">423</div>
              <div class="text-xs text-white/30">收藏</div>
            </div>
            <div>
              <div class="font-editorial text-2xl mb-1">89</div>
              <div class="text-xs text-white/30">标签</div>
            </div>
          </div>
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 animate-slide-in stagger-1">阅读体验</p>
        <h2 class="font-editorial text-4xl sm:text-5xl font-normal mb-8 animate-slide-in stagger-2">
          简洁即美
        </h2>
        <p class="text-white/50 text-lg leading-relaxed mb-10 animate-slide-in stagger-3">
          去除一切不必要的元素，让内容成为主角。精心设计的排版和舒适的阅读间距，让每一次阅读都成为享受。
        </p>
        <ul class="space-y-5">
          <li v-for="(item, i) in benefits" :key="i" class="flex items-center gap-4 text-white/60 animate-slide-in" :class="'stagger-' + (i + 4)">
            <span class="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <svg class="w-2.5 h-2.5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 12l5 5L20 7"/>
              </svg>
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  benefits: { type: Array, required: true },
})
</script>
