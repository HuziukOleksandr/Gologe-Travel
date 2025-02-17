<template>
  <!-- Footer Wrapper Start -->
  <div
    class="wrapper_footer p-4 animation"
    id="footer"
    :class="{ animate: animationStore.footerIsAnimated }"
  >
    <Subscribe class="mt-[-150px]" />
    <div class="wrapper_container">
      <div
        class="min-w-32 flex flex-col gap-6 sm:flex-row sm:gap-1 sm:w-full sm:justify-around sm:flex-wrap"
      >
        <img
          src="@/assets/images/svg/logo/logo-footer.svg"
          alt="logo"
          class="logo"
        />
        <div class="wrapper_images">
          <img
            src="@/assets/images/svg/messengers/facebook.svg"
            alt="facebook"
            class="w-[24px]"
          />
          <img
            src="@/assets/images/svg/messengers/twitter.svg"
            alt="twitter"
            class="w-[24px]"
          />
          <img
            src="@/assets/images/svg/messengers/youtube.svg"
            alt="youtube"
            class="w-[24px]"
          />
          <img
            src="@/assets/images/svg/messengers/instagram.svg"
            alt="instagram"
            class="w-[24px]"
          />
        </div>
      </div>
      <div class="between w-full flex-wrap gap-5 sm:hidden">
        <Destination />
        <Activities />
        <Blogs />
        <AboutUs />
        <Contact />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Subscribe from "./Subscribe.vue";
import Destination from "./Destination.vue";
import Activities from "./Activities.vue";
import Blogs from "./Blogs.vue";
import AboutUs from "./AboutUs.vue";
import Contact from "./Contact.vue";
import { ref, watch } from "vue";
import { useScrollToElement } from "@/services/ScrollToElement.ts";
import { useAnimationStore } from "@/stores/animatiomStore";

const isVisible = useScrollToElement("footer", window.innerHeight),
  animationStore = useAnimationStore();

watch(isVisible, (newValue) => {
  if (!newValue) animationStore.startAnimation("footerIsAnimated", true, 100);
});
</script>

<style lang="scss" scoped>
.wrapper_footer {
  @apply w-full  m-auto mt-36 pb-8 bg-custom-lightgreen  flex flex-col justify-between md:px-12 sm:px-6 sm:pb-9;

  .wrapper_container {
    @apply max-w-primary-width w-full mx-auto pt-12 flex justify-between gap-5
	lg:gap-[100px] 
	sm:flex-col sm:items-center sm:p-2;

    .wrapper_images {
      @apply min-w-[100px] 
	    flex justify-between 
	    sm:gap-[4px] sm:flex-wrap sm:h-[55px];
    }

    .logo:hover {
      transition-duration: 500ms;
      cursor: pointer;
      transform: scale(1.02);
    }
  }
}

.animation {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
