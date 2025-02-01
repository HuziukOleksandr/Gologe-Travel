<template>
  <!-- Quick Search -->
  <div 
    class="max-w-large-width w-full flex justify-center px-20 ph:px-10 animation"
    :class="{ animate: animationStore.quickSearchIsAnimated }"
  >
    <!-- Quick Search wrapper Start -->
    <div class="search_wrapper">
      <!-- Quick Search Navigation wrapper Start -->
      <div class="flex gap-16 mb-7 sm:justify-center sm:mb-2">
        <!-- Use Quick Search Navigation Component -->
        <Navigation @changeWindow="change" />
      </div>
      <!-- Quick Search Navigation wrapper End -->

      <!-- Use Custom Flihgt Search Component -->
      <CustomFlightSearch
        v-show="windowName == 'flight'"
        fromWidth="lg:max-w-[324px]"
        tripWidth="lg:max-w-[140px]"
        departWidth="lg:max-w-[324px]"
        classWidth="lg:max-w-[324px]"
      />

      <!-- Use Custom Places Search Component -->
      <CustomPlaceSearch
        v-show="windowName == 'place'"
        enterWidth="lg:max-w-[416px]"
        checkInWidth="lg:max-w-[240px]"
        checkOutWidth="lg:max-w-[240px]"
        roomsGuestsWidth="lg:max-w-[240px]"
      />

      <!-- Buttons wrapper Start -->
      <div
        class="w-full min-h-12 flex justify-end self-end gap-6 sm:flex-wrap sm:justify-end sm:gap-3 ph:justify-center"
      >
        <!-- Use Custom Button Component "Add Promo Code" Start -->
        <CustomButton class="h-12 p-4 ph:w-full ph:justify-center">
          <!-- Images for Button "Add Promo Code" -->
          <img src="@/assets/images/svg/UI/add-promo.svg" alt="hotel" />
          <p class="custom-text-sm font-medium">
            {{ $t("Landing.QuickSearch.addPromoCode") }}
          </p>
        </CustomButton>
        <!-- Use Custom Button Component "Add Promo Code" End -->

        <!-- Use Custom Button Component "Show Flight" Start -->
        <CustomButton
          class="h-12 p-4 font-medium bg-custom-lightgreen ph:w-full ph:justify-center"
          @click="
            $router.push(
              windowName == 'flight' ? { name: 'Listing' } : { name: 'Hotel' }
            )
          "
        >
          <!-- Images for Button "Show Flight" -->
          <img src="@/assets/images/svg/UI/show-flights.svg" alt="hotel" />
          {{
            windowName == "flight"
              ? $t("Landing.QuickSearch.buttonFlight")
              : $t("Landing.QuickSearch.buttonPlace")
          }}
        </CustomButton>
        <!-- Use Custom Button Component "Show Flight" End -->
      </div>
      <!-- Buttons wrapper End -->
    </div>
    <!-- Quick Search wrapper End -->
  </div>
  <!-- Quick Search -->
</template>

<script setup lang="ts">
import Navigation from "./UI/Navigation.vue";
// import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useAnimationStore } from '@/stores/animatiomStore';
// const route = useRoute();
const windowName = ref<string>("flight");

const animationStore = useAnimationStore();

onMounted(() => {
  animationStore.startAnimation();
});

const change = (value: string) => {
  windowName.value = value;
};
</script>

<style lang="scss" scoped>

@mixin font {
  @apply font-serrat;
}

.search_wrapper {
  @apply max-w-primary-width w-full min-h-[280px] bg-default 
	rounded-2xl p-8
	flex flex-col gap-7 shadow-2xl
  ph:gap-4;
}
.animation {
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateY(0);
}

</style>
