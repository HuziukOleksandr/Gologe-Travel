<template>
  <div class="max-w-large-width w-full my-7 mx-auto relative flex flex-col">
    <Header class="absolute" />
    <Preview />
    <QuickSearch
      class="fromUp mt-[-100px] mb-10"
      :class="{ animate: isAnimated }"
    />
    <Trips class="mb-10" />
    <Review class="mb-10" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Landing/Preview.vue";
import Header from "@/components/Header/Header.vue";
import QuickSearch from "@/components/Landing/QuickSearch.vue";
import Trips from "@/components/Landing/Trips.vue";
import Review from "@/components/Landing/Reviews.vue";
import { scrollTop } from "@/services/Scroll";
import { ref, onMounted } from 'vue';
import { useAnimationStore } from '@/stores/animatiomStore';


const animationStore = useAnimationStore(),
  isAnimated = ref<any>(false);

scrollTop();
</script>

<style scoped>
.fromUp {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Анімація */
.fromUp.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
