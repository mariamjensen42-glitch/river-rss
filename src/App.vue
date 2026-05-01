<template>
  <div class="app min-h-screen relative overflow-hidden" @mousemove="handleMouseMove">
    <!-- Background Effects -->
    <div class="particles" ref="particlesRef">
      <div v-for="i in 30" :key="i" class="particle" 
           :style="{
             left: Math.random() * 100 + '%',
             animationDuration: (Math.random() * 10 + 8) + 's',
             animationDelay: Math.random() * 10 + 's',
             width: (Math.random() * 3 + 2) + 'px',
             height: (Math.random() * 3 + 2) + 'px'
           }">
      </div>
    </div>
    
    <!-- Floating Orbs -->
    <div class="orb orb-1 animate-pulse-glow"></div>
    <div class="orb orb-2 animate-pulse-glow" style="animation-delay: -4s;"></div>
    <div class="orb orb-3 animate-pulse-glow" style="animation-delay: -2s;"></div>
    
    <!-- Grid Background -->
    <div class="fixed inset-0 grid-bg pointer-events-none opacity-50"></div>
    
    <!-- Mouse Glow -->
    <div class="mouse-glow" ref="mouseGlow" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
    
    <!-- Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 glass-subtle backdrop-blur-xl">
      <div class="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" class="font-editorial text-2xl italic">River</a>
        <nav class="hidden md:flex items-center gap-10">
          <a href="#features" class="text-sm text-white/40 hover:text-white transition-colors duration-300">功能</a>
          <a href="#how-it-works" class="text-sm text-white/40 hover:text-white transition-colors duration-300">使用流程</a>
          <a href="#preview" class="text-sm text-white/40 hover:text-white transition-colors duration-300">预览</a>
          <a href="#pricing" class="text-sm text-white/40 hover:text-white transition-colors duration-300">定价</a>
          <a href="#faq" class="text-sm text-white/40 hover:text-white transition-colors duration-300">常见问题</a>
        </nav>
        <button class="px-6 py-2.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          开始使用
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative min-h-screen pt-40 pb-32 px-8 flex items-center">
      <!-- Hero glow line -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      <div class="max-w-6xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
        <!-- Left Column - Text Content -->
        <div class="col-span-1">
          <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-8 animate-fade-up stagger-1">
            <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5 inline-flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              重新定义信息摄入
            </span>
          </p>
          <h1 class="font-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] mb-10 text-pretty animate-fade-up stagger-2" ref="heroTitle">
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

        <!-- Right Column - Preview Card -->
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

    <!-- Features Section -->
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

    <!-- Stats Section -->
    <section ref="statsRef" class="relative py-20 px-8 border-y border-white/5 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-gradient"></div>
      <div class="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div v-for="(stat, i) in stats" :key="i" class="text-center animate-fade-up" :class="'stagger-' + (i + 1)">
          <div class="font-editorial text-4xl lg:text-5xl mb-2 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            {{ statsAnimated ? (stat.target.toFixed(stat.decimals || 0)) : stat.value.toFixed(stat.decimals || 0) }}{{ stat.suffix }}
          </div>
          <div class="text-sm text-white/40">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
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

    <!-- Preview Section -->
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

    <!-- Pricing Section -->
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
          <div v-for="(plan, i) in pricingPlans" :key="i"
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

    <!-- Testimonials Section -->
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

    <!-- FAQ Section -->
    <section id="faq" class="py-32 px-8">
      <div class="max-w-3xl mx-auto">
        <div class="mb-20 text-center">
          <p class="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 animate-fade-up stagger-1">常见问题</p>
          <h2 class="font-editorial text-4xl sm:text-5xl font-normal mb-6 animate-fade-up stagger-2">
            你的疑问，这里都有答案
          </h2>
          <p class="text-white/50 text-lg animate-fade-up stagger-3">
            如果以下没有你想知道的，欢迎随时联系我们。
          </p>
        </div>
        <div class="space-y-4">
          <div v-for="(faq, i) in faqs" :key="i"
               class="glass-subtle rounded-2xl overflow-hidden animate-fade-up"
               :class="'stagger-' + (i % 6 + 1)">
            <button class="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors duration-300"
                    @click="toggleFaq(i)">
              <span class="text-base font-medium pr-4">{{ faq.question }}</span>
              <svg class="w-5 h-5 flex-shrink-0 text-white/30 transition-transform duration-300" 
                   :class="{ 'rotate-45': openFaqs[i] }"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </button>
            <div class="overflow-hidden transition-all duration-400 ease-out"
                 :style="{ maxHeight: openFaqs[i] ? faqHeights[i] + 'px' : '0px', opacity: openFaqs[i] ? 1 : 0 }">
              <div class="px-6 pb-6 text-sm text-white/50 leading-relaxed" :ref="el => setFaqRef(el, i)">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-32 px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-pink-500/5"></div>
      <div class="max-w-2xl mx-auto text-center relative z-10">
        <h2 class="font-editorial text-4xl sm:text-5xl font-normal mb-6 animate-fade-up stagger-1 bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
          准备好开始了吗？
        </h2>
        <p class="text-white/50 text-lg mb-12 animate-fade-up stagger-2">
          加入超过 128,000 位读者，重新掌控你的信息摄入。
        </p>
        <div class="flex flex-wrap justify-center gap-4 animate-fade-up stagger-3">
          <button class="px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300">
            免费开始
          </button>
          <button class="px-10 py-4 bg-transparent border border-white/10 rounded-full font-medium hover:border-white/20 hover:bg-white/5 transition-all duration-300">
            了解更多
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-8 py-20 border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <span class="font-editorial text-xl italic">River</span>
            <p class="text-sm text-white/30 mt-3">为专注而生的 RSS 阅读器</p>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-[0.15em] text-white/30 mb-5">产品</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">功能</a></li>
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">定价</a></li>
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">更新日志</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-[0.15em] text-white/30 mb-5">资源</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">文档</a></li>
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">API</a></li>
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">社区</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-[0.15em] text-white/30 mb-5">关于</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" class="text-sm text-white/50 hover:text-white transition-colors">使用条款</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-10 border-t border-white/5 text-center text-sm text-white/30">
          © 2026 River. 用心做阅读。
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(-1000)
const mouseY = ref(-1000)

function handleMouseMove(e) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const feedItems = [
  { source: '少数派', title: 'Raycast 效率工作流深度解析', meta: '12 分钟 · 2小时前' },
  { source: '产品沉思录', title: '订阅经济的设计逻辑', meta: '8 分钟 · 4小时前' },
  { source: '差评', title: 'AI 手机使用一月体验', meta: '15 分钟 · 1天前' },
]

const features = [
  {
    title: '极简设计',
    desc: '去除一切干扰，专注于内容本身。精心设计的界面让阅读成为一种享受。',
    icon: `<rect x="4" y="4" width="16" height="16" rx="2"/>`
  },
  {
    title: '同步阅读',
    desc: '在手机、平板、电脑上无缝切换，阅读进度自动同步，随时随地继续阅读。',
    icon: `<path d="M12 2v20M2 12h20"/>`
  },
  {
    title: '离线保存',
    desc: '所有订阅内容自动保存，无网络也能阅读。再也不用担心链接失效。',
    icon: `<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>`
  },
  {
    title: '智能整理',
    desc: 'AI 自动分析内容并打标签，帮你在海量资讯中快速找到想要的内容。',
    icon: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>`
  },
  {
    title: '深夜模式',
    desc: '根据日落自动切换深色模式，保护眼睛，让夜间阅读更加舒适。',
    icon: `<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`
  },
  {
    title: '数据导出',
    desc: '随时导出你的阅读数据和订阅列表，完全掌控属于自己的数据。',
    icon: `<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>`
  },
]

const benefits = [
  '舒适的阅读排版与字体选择',
  '一键收藏、标记和分类管理',
  '支持 RSS、Atom 和 JSON Feed',
  '全文搜索与高级筛选',
  '阅读统计与习惯分析',
  '自定义通知与推送频率',
]

const steps = [
  {
    title: '创建账号',
    desc: '使用邮箱快速注册，或通过 Google、GitHub 一键登录，即刻拥有专属阅读空间。'
  },
  {
    title: '添加订阅',
    desc: '粘贴网址自动识别 RSS 源，支持 OPML 批量导入，从已有平台无缝迁移。'
  },
  {
    title: '开始阅读',
    desc: '根据个人偏好调整视图与排版，享受无干扰的沉浸式阅读。'
  },
]

const pricingPlans = [
  {
    name: 'Free',
    desc: '适合轻度阅读者',
    price: '¥0',
    period: null,
    cta: '免费开始',
    items: [
      '最多订阅 50 个源',
      '基本文章管理',
      '手机 + 网页端访问',
      '社区支持',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    desc: '适合重度信息消费者',
    price: '¥39',
    period: '月',
    cta: '开始试用',
    items: [
      '无限订阅源',
      'AI 智能标签与摘要',
      '全文离线缓存',
      '多设备同步阅读进度',
      '自定义阅读规则',
      '优先技术支持',
    ],
    featured: true,
  },
  {
    name: 'Team',
    desc: '适合团队和内容团队',
    price: '¥99',
    period: '月',
    cta: '联系销售',
    items: [
      '包含所有 Pro 功能',
      '最多 10 位团队成员',
      '共享订阅与标签库',
      '团队阅读看板',
      'API 与企业集成',
      '专属客户经理',
    ],
    featured: false,
  },
]

const testimonials = [
  {
    quote: 'River 让我彻底摆脱了信息过载的困扰。每天早上打开 River，只有我真正想看的文章，再也不用在算法推荐里浪费时间。',
    name: '张明远',
    role: '产品设计师',
    avatar: '张',
    rating: 5,
  },
  {
    quote: '作为开发者，我需要关注上百个技术博客。River 的智能标签功能帮我自动分类，效率提升了不止一倍。',
    name: '陈思涵',
    role: '全栈工程师',
    avatar: '陈',
    rating: 5,
  },
  {
    quote: '之前用过的阅读器功能都太复杂了。River 的设计恰到好处，简单但功能强大，离线阅读在地铁上超实用。',
    name: '林雨桐',
    role: '自由撰稿人',
    avatar: '林',
    rating: 5,
  },
  {
    quote: '团队版让我们整个编辑部的内容来源管理变得井井有条。统一的标签体系让内容发现效率大幅提升。',
    name: '王浩然',
    role: '内容运营总监',
    avatar: '王',
    rating: 4,
  },
]

const faqs = [
  {
    question: 'River 支持哪些平台？',
    answer: 'River 目前支持 Web 端、iOS 和 Android 移动端，以及 macOS 和 Windows 桌面端。所有平台之间数据实时同步，你可以在任何设备上无缝切换阅读。'
  },
  {
    question: '免费版和付费版有什么区别？',
    answer: '免费版支持最多 50 个订阅源和基本的阅读管理功能，适合轻度用户。Pro 版提供无限订阅、AI 标签、全文离线缓存等高级功能。Team 版则为团队协作提供共享订阅、阅读看板和企业集成能力。'
  },
  {
    question: '我的数据安全性如何保障？',
    answer: '我们使用端到端加密保护你的阅读数据，所有数据传输均通过 HTTPS。我们不会分析你的阅读内容用于广告或销售目的。你可以随时导出或删除你的所有数据。'
  },
  {
    question: '可以从其他 RSS 阅读器迁移吗？',
    answer: '当然可以。River 支持 OPML 标准格式导入，你可以从 Feedly、Inoreader、NetNewsWire 等主流阅读器一键迁移所有订阅源和分类。'
  },
  {
    question: '如何发现新的优质 RSS 源？',
    answer: 'River 内置了推荐引擎，会根据你的阅读偏好智能推荐相关的高质量源。此外，我们还维护了一个由社区精选的公开源目录，涵盖科技、设计、商业、学术等热门领域。'
  },
  {
    question: '支持离线阅读吗？',
    answer: '支持。Pro 和 Team 版会自动缓存你订阅源的最新内容，即使在没有网络的环境下也能流畅阅读。你可以设置缓存的文章数量和更新时间，灵活控制存储占用。'
  },
]

const openFaqs = ref([])
const faqHeights = ref([])
const faqRefs = ref([])

function toggleFaq(index) {
  const current = openFaqs.value[index]
  openFaqs.value[index] = !current
  if (!current && faqRefs.value[index]) {
    requestAnimationFrame(() => {
      if (faqRefs.value[index]) {
        faqHeights.value[index] = faqRefs.value[index].scrollHeight
      }
    })
  }
}

function setFaqRef(el, index) {
  if (el) {
    faqRefs.value[index] = el
  }
}

const stats = ref([
  { value: 0, target: 128, suffix: 'K+', label: '活跃用户' },
  { value: 0, target: 2, suffix: ',000+', label: '优质来源' },
  { value: 0, target: 50, suffix: 'M+', label: '文章收藏' },
  { value: 0, target: 99.9, suffix: '%', label: '服务可用', decimals: 1 },
])

const statsRef = ref(null)
const statsAnimated = ref(false)

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

function handleStatsVisible(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated.value) {
      statsAnimated.value = true
      stats.value.forEach(s => animateCounter(s))
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(handleStatsVisible, { threshold: 0.3 })
  if (statsRef.value) observer.observe(statsRef.value)
  window._statsObserver = observer
})

onUnmounted(() => {
  if (window._statsObserver) {
    window._statsObserver.disconnect()
  }
})
</script>