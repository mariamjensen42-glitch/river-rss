<template>
  <section class="relative min-h-screen pt-40 pb-32 px-8 flex items-center">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
    <div class="max-w-6xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
      <div class="col-span-1">
        <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-8 animate-fade-up stagger-1">
          <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5 inline-flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            重新定义信息摄入
          </span>
        </p>
        <h1 class="font-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] mb-10 text-pretty animate-fade-up stagger-2">
          <span class="bg-gradient-to-r from-white via-white/70 to-white/40 bg-clip-text text-transparent animate-gradient">
            专注阅读，
          </span><br>
          <span class="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
            回归本质
          </span>
        </h1>
        <p class="text-lg text-white/50 max-w-xl leading-relaxed mb-12 animate-fade-up stagger-3">
          一款简洁优雅的 RSS 阅读器。没有算法推荐，没有信息噪音，只有你关心的内容。
        </p>
        <div class="flex flex-wrap gap-4 animate-fade-up stagger-4">
          <button class="group px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-3 hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            免费试用
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button class="px-8 py-4 bg-transparent border border-white/10 rounded-full font-medium hover:border-white/20 hover:bg-white/5 transition-all duration-300">
            观看演示
          </button>
        </div>
      </div>

      <div class="col-span-1 animate-fade-up stagger-5">
        <div class="glass-subtle glass-hover rounded-2xl p-6">
          <div class="flex items-center gap-3 pb-5 border-b border-white/5">
            <div class="flex gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-white/10"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-white/10"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-white/10"></span>
            </div>
            <span class="text-xs text-white/30 font-mono">river.app/inbox</span>
          </div>
          <div class="pt-5 space-y-4">
            <div v-for="(item, i) in feedItems" :key="i"
                 class="group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                 :class="{ 'bg-white/5': i === 0 }">
              <div class="flex items-start gap-4">
                <div class="w-1.5 h-1.5 rounded-full mt-2" :class="i === 0 ? 'bg-white' : 'bg-white/20'"></div>
                <div class="flex-1 min-w-0">
                  <div class="text-xs text-white/30 mb-1">{{ item.source }}</div>
                  <div class="text-sm mb-1 group-hover:text-white/80 transition-colors">{{ item.title }}</div>
                  <div class="text-xs text-white/30">{{ item.meta }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  feedItems: { type: Array, required: true },
})
</script>
