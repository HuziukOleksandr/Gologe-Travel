<template>
  <!-- Showing wrapper Start -->
  <div class="w-full flex justify-between items-center gap-[10px]">
    <!-- Text Left Start -->
    <p class="custom-text-xs font-semibold text-green">
      {{ $t("ListingFlight.Sort.showing") }}
      {{ props.pages[0] }}
      {{ $t("ListingFlight.Sort.of") }}
      <!-- Link for flight Start -->
      <a href="#" class="text-red">
        {{ props.pages[1] }}
        {{ $t("ListingFlight.Sort.flight") }}
      </a>
      <!-- Link for flight End -->
    </p>
    <!-- Text Left End -->

    <!-- Text Right Start -->
    <div class="flex gap-[8px] items-center">
      <!-- Text content Start -->
      <p class="custom-text-xs text-green flex">
        {{ $t("ListingFlight.Sort.sort") }}
      </p>
      <!-- Text content Start -->
      <!-- Use Custom Button Start -->
      <CustomButton class="custom-text-xs font-bold text-green">
        {{ $t("ListingFlight.Sort.recommended") }}
        <!-- Images for Button -->
        <img src="@/assets/images/svg/UI/chevron-down.svg" alt="chevron-down" />
      </CustomButton>
      <!-- Use Custom Button End -->
    </div>
    <!-- Text Right End -->
  </div>
  <!-- Showing wrapper End -->
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    pages: [];
  }>(),
  {}
);
</script>

<style scoped></style>
