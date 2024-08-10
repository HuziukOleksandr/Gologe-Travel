<template>
  <!-- Reviews Start -->
  <div
    class="w-full flex justify-center px-[30px] md:px-[30px] sm:px-[30px] ph:px-[20px]"
  >
    <!-- Review wrapper Start -->
    <div class="max-w-[1380px] w-full min-h-[280px] flex flex-col gap-[40px]">
      <!-- Review Heared wrapper Start -->
      <div class="flex items-center justify-between">
        <!-- Text wrapper Start -->
        <div class="flex flex-col gap-[15px]">
          <!-- Review Title Start -->
          <h1 class="w-[90%] min-h-[35px] font-serrat font-semibold text-[32px]">
            {{ $t("Landing.Review.title") }}
          </h1>
          <!-- Review Title End -->

          <!-- Review Sub-Title Start -->
          <h2 class="font-serrat font-regilar text-[16px] text-gray">
            {{ $t("Landing.Review.sub-title") }}
          </h2>
          <!-- Review Sub-Title End -->
        </div>
        <!-- Text wrapper End -->

        <!-- Review Button Start -->
        <CustomButton
          class="h-[40px] border-[2px] border-buttonGreen px-[16px] sm:hidden"
        >
          {{ $t("Landing.Review.button") }}
        </CustomButton>
        <!-- Review Button End -->
      </div>
      <!-- Review Heared wrapper Start -->

      <!-- Review Content wrapper Start -->
      <div class="flex flex-wrap justify-between gap-[20px] md:justify-around sm:justify-center">
        <!-- Use Review Card Component -->
        <Card :reviews="reviews" />
      </div>
      <!-- Review Content wrapper End -->

      <!-- Review Button Start -->
      <CustomButton
        class="h-[40px] border-[2px] border-buttonGreen px-[16px] hidden sm:flex sm:justify-center"
      >
        {{ $t("Landing.Review.button") }}
      </CustomButton>
      <!-- Review Button End -->
    </div>
    <!-- Review wrapper End -->
  </div>
  <!-- Reviews End -->
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import axios from "axios";
import { ref } from "vue";

const reviews = ref<array []>();

// Get Cards fron json file

async () => {
  axios
  .get("/Review.json")
  .then(function (response) {
    reviews.value = response.data.Reviews ?? response.data.Reviews.lice(0, 3);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
}

</script>