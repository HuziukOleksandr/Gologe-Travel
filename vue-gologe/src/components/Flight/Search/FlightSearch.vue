<template>
  <!-- Flight Search Page wrapper Start -->
  <div class="max-w-[1440px] w-full flex flex-col">
    <!-- Preview Frame wrapper Start -->
    <div class="background w-full h-[540px] py-[80px] px-[128px]">
      <!-- Preview Text wrapper Start -->
      <div class="max-w-[440px] w-full flex flex-col gap-[8px]">
        <!-- Title Start -->
        <h1 class="font-serrat text-5xl font-bold text-white leading-[55px]">
          {{ $t("FlightSearch.Preview.title") }}
        </h1>
        <!-- Title End -->

        <!-- Sub Title Start -->
        <h2 class="custom-text-xl text-white">
          {{ $t("FlightSearch.Preview.sub-Title") }}
        </h2>
        <!-- Sub Title End -->
      </div>
      <!-- Preview Text wrapper End -->
    </div>
    <!-- Preview Frame wrapper End -->

    <!-- Search wrapper Start -->
    <div class="search_wrapper mx-auto top-[-75px] relative">
      <!-- Title Start -->
      <h1 class="custon-text-xl font-bold text-green">
        {{ $t("FlightSearch.Search.question") }}
      </h1>
      <!-- Title End -->

      <!-- Use Flight Component -->
      <CustomFlightSearch />
      <!-- Buttons wrapper Start -->
      <div class="h-[48px] flex self-end gap-[24px]">
        <!-- Use Custom Button Component "Add Promo Code" Start -->
        <CustomButton class="h-[48px] p-[16px] font-medium">
          <!-- Images for Button "Add Promo Code" -->
          <img src="@/assets/images/add-promo.svg" alt="hotel" />
          {{ $t("Landing.QuickSearch.addPromoCode") }}
        </CustomButton>
        <!-- Use Custom Button Component "Add Promo Code" End -->

        <!-- Use Custom Button Component "Show Flight" Start -->
        <CustomButton
          class="h-[48px] p-[16px] font-medium bg-button bg-buttonGreen"
          @click="$router.push({ name: 'Listing' })"
        >
          <!-- Images for Button "Show Flight" -->
          <img src="@/assets/images/show-flights.svg" alt="hotel" />
          {{ $t("Landing.QuickSearch.buttonFlight") }}
        </CustomButton>
        <!-- Use Custom Button Component "Show Flight" End -->
      </div>
      <!-- Buttons wrapper End -->
    </div>
    <!-- Search wrapper End -->

    <!-- Places wrapper Start -->
    <div class="frame-wrapper">
      <!-- Places Header wrapper Start -->
      <div class="frame-header_wrapper">
        <!-- Text wrapper Start -->
        <div class="text_wrapper">
          <!-- Title Start -->
          <h1 class="custom-text-3xl font-semibold text-black">
            {{ $t("FlightSearch.Places.title") }}
          </h1>
          <!-- Title End -->

          <!-- Sub-Title Start -->
          <h2 class="custom-text-base font-regular text-gray">
            {{ $t("FlightSearch.Places.sub-Title") }}
          </h2>
          <!-- Sub-Title End -->
        </div>
        <!-- Text wrapper End -->

        <!-- Places Header button Start -->
        <CustomButton
          class="h-[40px] border-[2px] border-buttonGreen px-[16px]"
        >
          {{ $t("FlightSearch.button") }}
        </CustomButton>
        <!-- Places Header button End -->
      </div>
      <!-- Places Header wrapper End -->

      <!-- Places Content wrapper Start -->
      <div class="w-full h-[490px]">
        <!-- Content image -->
        <img src="@/assets/images/Flight-Places.png" alt="Flight-Places" />
      </div>
      <!-- Places Content wrapper End -->
    </div>
    <!-- Places wrapper End -->

    <!-- Travel wrapper Srart -->
    <div class="frame_wrapper px-[104px]">
      <!-- Travel Header wrapper Start -->
      <div class="frame-header_wrapper mb-[40px]">
        <!-- Text wrapper Start -->
        <div class="text_wrapper">
          <!-- Title Start -->
          <h1 class="custom-text-3xl font-semibold text-black">
            {{ $t("FlightSearch.Travel.title") }}
          </h1>
          <!-- Title End -->

          <!-- Sub-Title Start -->
          <h2 class="custom-text-base font-regular text-gray max-w-[850px]">
            {{ $t("FlightSearch.Travel.sub-Title") }}
          </h2>
          <!-- Sub-Title End -->
        </div>
        <!-- Text wrapper End -->

        <!-- Travel Header button Start -->
        <CustomButton
          class="h-[40px] border-[2px] border-buttonGreen px-[16px]"
        >
          {{ $t("FlightSearch.button") }}
        </CustomButton>
        <!-- Travel Header button End -->
      </div>
      <!-- Travel Header wrapper End -->

      <!-- Travel Content wrapper Start -->
      <div class="w-full h-[490px] flex justify-between">
        <!-- Use Travel Card Component -->
        <TravelCard :cards="cards" />
      </div>
      <!-- Travel Content wrapper End -->
    </div>
    <!-- Travel wrapper End -->

    <!-- Travel wrapper Srart -->
    <div class="frame_wrapper px-[104px]">
      <!-- Travel Header wrapper Start -->
      <div class="frame-header_wrapper mb-[40px]">
        <!-- Text wrapper Start -->
        <div class="text_wrapper">
          <!-- Title Start -->
          <h1 class="custom-text-3xl font-semibold text-black">
            {{ $t("FlightSearch.Travel.title") }}
          </h1>
          <!-- Title End -->

          <!-- Sub-Title Start -->
          <h2 class="custom-text-base font-regular text-gray max-w-[850px]">
            {{ $t("FlightSearch.Travel.sub-Title") }}
          </h2>
          <!-- Sub-Title End -->
        </div>
        <!-- Text wrapper End -->

        <!-- Travel Header button Start -->
        <CustomButton
          class="h-[40px] border-[2px] border-buttonGreen px-[16px]"
        >
          {{ $t("FlightSearch.button") }}
        </CustomButton>
        <!-- Travel Header button End -->
      </div>
      <!-- Travel Header wrapper End -->

      <!-- Travel Content wrapper Start -->
      <div class="w-full h-[490px] flex justify-between">
        <!-- Aside wrapper Start -->
        <div
          class="max-w-[552px] w-full h-[424px] bg-buttonGreen rounded-[20px] p-[24px] flex flex-col justify-between"
        >
          <!-- Top wrapper Start -->
          <div class="flex flex-col gap-[24px]">
            <!-- Header wrapper Start -->
            <div class="w-full flex justify-between">
              <!-- Title Start -->
              <h1 class="custom-text-4xl font-bold text-green max-w-[363px]">
                {{ $t("FlightSearch.Travel.card-Title") }}
              </h1>
              <!-- Title End -->
              <!-- Button with Price Start -->
              <CustomButton
                class="h-[62px] px-[8px] flex gap-[4px] flex-col justify-center bg-white"
              >
                <!-- Button text Start -->
                <p class="custom-text-sm fort-regular text-green">
                  {{ $t("FlightSearch.Travel.card-Button") }}
                </p>
                <!-- Button text End -->

                <!-- Price Text Start -->
                <h1 class="custom-text-xl font-bold text-green">$700</h1>
                <!-- Price Text End -->
              </CustomButton>
              <!-- Button with Price End -->
            </div>
            <!-- Header wrapper End -->

            <!-- Text wrapper Start -->
            <div class="w-full">
              <!-- Text Start -->
              <p class="custom-text-sm font-regular text-green">
                {{ $t("FlightSearch.Travel.card-Text") }}
              </p>
              <!-- Text End -->
            </div>
            <!-- Text wrapper End -->
          </div>
          <!-- Top wrapper End -->

          <!-- Use Custom Button Component Start -->
          <CustomButton class="custom-text-sm card-button">
            {{ $t("FlightSearch.Travel.button") }}
          </CustomButton>
          <!-- Use Custom Button Component End -->
        </div>
        <!-- Aside wrapper End -->

        <!-- Left Side wrapper Start -->
        <div
          class="max-w-[656px] w-full h-[424px] grid grid-rows-2 grid-cols-2 gap-y-[24px] gap-x-[20px]"
        >
          <!-- Image -->
          <img src="@/assets/images/shri-Lanka-1.png" alt="shri-Lanka-1" />
          <!-- Image -->
          <img src="@/assets/images/shri-Lanka-2.png" alt="shri-Lanka-2" />
          <!-- Image -->
          <img src="@/assets/images/shri-Lanka-3.png" alt="shri-Lanka-3" />
          <!-- Image -->
          <img src="@/assets/images/shri-Lanka-4.png" alt="shri-Lanka-4" />
        </div>
        <!-- Left Side wrapper End -->
      </div>
      <!-- Travel Content wrapper End -->
    </div>
    <!-- Travel wrapper End -->
  </div>
  <!-- Flight Search Page wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import TravelCard from "./TravelCard.vue";
import { useRoute } from "vue-router";

const route = useRoute();
// Card array
const cards = ref<array>([
  {
    title: "Melbourne",
    subTitle: "An amazing journey",
    price: "700",
    image: "Melbourne",
  },
  {
    title: "Paris",
    subTitle: "A Paris Adventure",
    price: "600",
    image: "Paris-image",
  },
  {
    title: "London",
    subTitle: "London eye adventure",
    price: "350",
    image: "London-image",
  },
  {
    title: "Columbia",
    subTitle: "Amazing streets",
    price: "700",
    image: "Columbia-image",
  },
]);
</script>

<style scoped>
.background {
  background-image: url("../../../assets/images/Flight-search-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.search_wrapper {
  @apply max-w-[1230px] w-full min-h-[272px] bg-white 
	rounded-[16px] p-[32px]
	flex flex-col gap-[30px] shadow-2xl;
}

.frame-wrapper {
  @apply w-[100%] min-h-[280px] 
	flex flex-col gap-[24px]
	mb-[80px];
}

.frame-header_wrapper {
  @apply flex items-center justify-between;
}

.text_wrapper {
  @apply max-w-[1060px] w-full flex flex-col gap-[15px];
}

.card-button {
  @apply font-medium text-green w-full h-[48px] flex justify-center bg-white;
}
</style>
