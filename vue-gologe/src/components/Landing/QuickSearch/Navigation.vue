<template>
  <!-- Use Custom Button Component "Flight" Start -->
  <CustomButton
    class="custom-text-base font-semibold"
    @click="changeName('flight')"
  >
    <!-- Flight Button Image -->
    <img src="@/assets/images/svg/UI/flight-black.svg" alt="flight" />
    {{ $t("Landing.QuickSearch.flights") }}
  </CustomButton>
  <!-- Use Custom Button Component "Flight" End -->

  <!-- Use Custom Button Component "Hotel" Start -->
  <CustomButton
    class="custom-text-base font-semibold"
    @click="changeName('place')"
  >
    <!-- Hotel Button Image -->
    <img src="@/assets/images/svg/UI/hotel-black.svg" alt="hotel" />
    {{ $t("Landing.QuickSearch.stays") }}
  </CustomButton>
  <!-- Use Custom Button Component "Hotel" End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const windowName = ref("flight");
const emit = defineEmits(["changeWindow"]);

const changeName = ( value: string ) => {
  emit("changeWindow", value)
};
</script>
