<template>
  <!-- Preview Start -->
  <div
    class="landing-component-wrapper"
  >
    <!-- Preview wrapper Start -->
    <div
      class="background max-w-secondary-width w-full min-h-[600px] flex items-center rounded-2xl"
    >
      <!-- Preview Text wrapper Start -->
      <div class="w-full flex flex-col items-center gap-6">
        <!-- Preview Sub Title Start -->
        <h2
          class="custom-text-5xl text-default font-semibold sm:text-3xl ph:text-2xl"
        >
          {{ $t("Landing.Preview.headerTop") }}
        </h2>
        <!-- Preview Sub Title End -->

        <!-- Preview Title Start -->
        <h1
          class="font-serrat font-semibold text-default uppercase text-center
          "
          :class="getTitleStyles(locale)"
        >
          {{ $t("Landing.Preview.header") }}
        </h1>
        <!-- Preview Title End -->

        <!-- Preview Text Start -->
        <h3 class="custom-text-2xl text-default sm:text-xl ph:text-sm text-center">
          {{ $t("Landing.Preview.headerBottom") }}
        </h3>
        <!-- Preview Text End -->
      </div>
      <!-- Preview Text wrapper Start -->
    </div>
    <!-- Preview wrapper End -->
  </div>
  <!-- Preview End -->
</template>

<script setup lang="ts">
import { getTitleStyles } from "@/helpers/Localization.ts";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
.background {
  background: url("../../assets/images/png/Landing/background.png");
  background-position: center;
  background-size: cover;
}
</style>
