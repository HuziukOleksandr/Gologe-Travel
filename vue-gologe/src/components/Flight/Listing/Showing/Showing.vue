<template>
  <!-- Showing wrapper Start -->
  <div class="w-full flex justify-between items-center gap-3">
    <!-- Text Left Start -->
    <p class="custom-text-xs text-custom-darkgreen font-semibold">
      {{ $t("ListingFlight.Sort.showing") }}
      {{ props.pages[0] }}
      {{ $t("ListingFlight.Sort.of") }}
      <!-- Link for flight Start -->
      <a href="#" class="text-custom-red">
        {{ props.pages[1] }}
        {{ $t("ListingFlight.Sort.flight") }}
      </a>
      <!-- Link for flight End -->
    </p>
    <!-- Text Left End -->

    <!-- Text Right Start -->
    <div class="flex gap-2 items-center">
      <!-- Text content Start -->
      <p class="custom-text-xs text-custom-darkgreen font-medium">
        {{ $t("ListingFlight.Sort.sort") }}
      </p>
      <!-- Text content Start -->
      <!-- Use Custom Button Start -->
      <CustomButton class="custom-text-xs text-custom-darkgreen font-semibold">
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
