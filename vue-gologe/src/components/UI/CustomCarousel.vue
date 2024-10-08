<template>
  <!-- Custom Carousel Start -->
  <Carousel
    :items-to-show="1"
    :pauseAutoplayOnHover="true"
    :transition="500"
    :autoplay="10000"
    :wrapAround="true"
    class="relative"
  >
    <!-- Slide Start -->
    <slide v-for="slide in props.slides" :key="slide">
      <!-- Slides Images -->
      <img :src="getCarouselImagePng(slide)" :alt="slide" />
    </slide>
    <!-- Slide End -->

    <!-- Paggination Start -->
    <template #addons>
      <Pagination
        class="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      />
    </template>
    <!-- Paggination End -->
  </Carousel>
  <!-- Custom Carousel End -->
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { getCarouselImagePng } from "@/helpers/Helpers.ts";

// Props, array with name of images
const props = withDefaults(
  defineProps<{
    slides: string[];
  }>(),
  {}
);
</script>

<style scoped>
:deep(.carousel__pagination-button::after) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.5s;
}

:deep(.carousel__pagination-button:hover::after) {
  background-color: #8dd3bb;
}

:deep(.carousel__pagination-button--active::after) {
  width: 32px;
  height: 10px;
  border-radius: 5px;
  background-color: #8dd3bb;
}

</style>
