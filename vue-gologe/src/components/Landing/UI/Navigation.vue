<template>
  <CustomButton
    class="custom-text-base font-semibold"
    @click="changeName('flight')"
  >
    <img src="@/assets/images/svg/UI/flight-black.svg" alt="flight" />
    {{ $t("Landing.QuickSearch.flights") }}
  </CustomButton>
  <CustomButton
    class="custom-text-base font-semibold"
    @click="changeName('place')"
  >
    <img src="@/assets/images/svg/UI/hotel-black.svg" alt="hotel" />
    {{ $t("Landing.QuickSearch.stays") }}
  </CustomButton>
</template>

<script setup lang="ts">
const emit = defineEmits(["changeWindow"]);

const changeName = ( value: string ) => {
  emit("changeWindow", value)
};
</script>
