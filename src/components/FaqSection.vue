<template>
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
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  faqs: { type: Array, required: true },
})

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
</script>
