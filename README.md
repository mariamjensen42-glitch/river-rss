# River — 为专注而生的 RSS 阅读器

River 是一款极简优雅的 RSS 阅读器。没有算法推荐，没有信息噪音，只有你关心的内容。

## 技术栈

- **Vue 3** Composition API + `<script setup>`
- **Vite 5** 构建工具
- **TailwindCSS v4** 原子化 CSS
- **vue-router 4** 路由懒加载

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── main.js                    # 应用入口，挂载 router
├── App.vue                    # 根组件（router-view 外壳）
├── style.css                  # 全局样式、动画、TailwindCSS
├── router/
│   └── index.js               # 路由配置（懒加载）
├── views/
│   ├── HomePage.vue           # 着陆页主视图
│   └── NotFoundPage.vue       # 404 页面
└── components/
    ├── AppNavbar.vue          # 导航栏 + Scroll Spy + 移动端菜单
    ├── BackToTop.vue          # 回到顶部按钮
    ├── HeroSection.vue        # 首屏 Hero
    ├── FeaturesSection.vue    # 功能卡片网格
    ├── StatsSection.vue       # 数字滚动统计动画
    ├── HowItWorksSection.vue  # 使用流程 3 步骤
    ├── PreviewSection.vue     # 阅读预览展示
    ├── PricingSection.vue     # 3 档定价方案
    ├── TestimonialsSection.vue # 用户评价
    ├── FaqSection.vue         # 手风琴 FAQ
    ├── CtaSection.vue         # 底部号召行动
    └── AppFooter.vue          # 页脚
```

## 页面内容

| 区域 | 描述 |
|------|------|
| 导航栏 | 固定顶部，Scroll Spy 实时高亮，移动端汉堡菜单 |
| Hero | 渐变动画标题，展示预览卡片 |
| 功能 | 6 张卡片（极简设计、同步阅读、离线保存等） |
| 统计 | 滚动触发数字动画（128K+ 用户等） |
| 使用流程 | 3 步骤上手引导 |
| 预览 | 阅读体验展示 |
| 定价 | Free / Pro / Team 三档方案 |
| 用户评价 | 4 条星级评价 |
| FAQ | 6 个手风琴折叠问答 |
| CTA | 底部号召行动 |
| 页脚 | 4 列链接 + 版权 |
| 404 | 路由 catch-all 错误页面 |

## 视觉效果

- 粒子上升背景（30 个随机速度粒子）
- 3 色浮动光球（靛蓝 / 紫 / 粉）
- 网格科技感背景
- 鼠标跟随光晕效果
- 渐变色流动标题
- 卡片悬浮发光阴影
- fadeUp / scaleIn / slideIn 入场动画 + stagger 逐帧延迟

## 构建优化

- **路由懒加载**：HomePage 与 NotFoundPage 按需加载
- **代码分割**：vendor（Vue + Router）与业务代码分离
- **CSS**：TailwindCSS v4 原生 JIT，仅包含使用到的类

## 已发布

GitHub Pages: [https://mariamjensen42-glitch.github.io/river-rss/](https://mariamjensen42-glitch.github.io/river-rss/)

## License

MIT
