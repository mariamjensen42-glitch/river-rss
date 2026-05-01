<template>
  <div class="app min-h-screen relative overflow-hidden" @mousemove="handleMouseMove">
    <div class="particles">
      <div v-for="p in particles" :key="p.id" class="particle"
           :style="{
             left: p.left + '%',
             animationDuration: p.duration + 's',
             animationDelay: p.delay + 's',
             width: p.size + 'px',
             height: p.size + 'px'
           }">
      </div>
    </div>

    <div class="orb orb-1 animate-pulse-glow"></div>
    <div class="orb orb-2 animate-pulse-glow" style="animation-delay: -4s;"></div>
    <div class="orb orb-3 animate-pulse-glow" style="animation-delay: -2s;"></div>

    <div class="fixed inset-0 grid-bg pointer-events-none opacity-50"></div>

    <div class="mouse-glow" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>

    <AppNavbar />
    <HeroSection :feedItems="feedItems" />
    <FeaturesSection :features="features" />
    <StatsSection />
    <HowItWorksSection :steps="steps" />
    <PreviewSection :benefits="benefits" />
    <PricingSection :plans="pricingPlans" />
    <TestimonialsSection :testimonials="testimonials" />
    <FaqSection :faqs="faqs" />
    <CtaSection />
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppNavbar from '../components/AppNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import StatsSection from '../components/StatsSection.vue'
import HowItWorksSection from '../components/HowItWorksSection.vue'
import PreviewSection from '../components/PreviewSection.vue'
import PricingSection from '../components/PricingSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import FaqSection from '../components/FaqSection.vue'
import CtaSection from '../components/CtaSection.vue'
import AppFooter from '../components/AppFooter.vue'
import BackToTop from '../components/BackToTop.vue'

const mouseX = ref(-1000)
const mouseY = ref(-1000)

function handleMouseMove(e) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  duration: rand(8, 18),
  delay: Math.random() * 10,
  size: rand(2, 5),
}))

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
    items: ['最多订阅 50 个源', '基本文章管理', '手机 + 网页端访问', '社区支持'],
    featured: false,
  },
  {
    name: 'Pro',
    desc: '适合重度信息消费者',
    price: '¥39',
    period: '月',
    cta: '开始试用',
    items: ['无限订阅源', 'AI 智能标签与摘要', '全文离线缓存', '多设备同步阅读进度', '自定义阅读规则', '优先技术支持'],
    featured: true,
  },
  {
    name: 'Team',
    desc: '适合团队和内容团队',
    price: '¥99',
    period: '月',
    cta: '联系销售',
    items: ['包含所有 Pro 功能', '最多 10 位团队成员', '共享订阅与标签库', '团队阅读看板', 'API 与企业集成', '专属客户经理'],
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
</script>
