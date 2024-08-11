<template>
  <!-- Preview Start -->
  <div
    class="w-full flex justify-center px-[30px] md:px-[30px] sm:px-[30px] ph:px-[20px]"
  >
    <!-- Preview wrapper Start -->
    <div
      class="background max-w-[1380px] w-full min-h-[600px] flex items-center rounded-[16px]"
    >
      <!-- Preview Text wrapper Start -->
      <div class="w-full flex flex-col items-center gap-[24px]">
        <!-- Preview Sub Title Start -->
        <h2
          class="custom-text-5xl font-semibold text-white sm:text-3xl ph:text-2xl"
        >
          {{ $t("Landing.Preview.headerTop") }}
        </h2>
        <!-- Preview Sub Title End -->

        <!-- Preview Title Start -->
        <h1
          class="font-serrat font-semibold text-white uppercase sm:text-4xl ph:text-3xl"
          :class="getTitleStyles(locale)"
        >
          {{ $t("Landing.Preview.header") }}
        </h1>
        <!-- Preview Title End -->

        <!-- Preview Text Start -->
        <h3 class="custom-text-2xl text-white sm:text-xl ph:text-sm">
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
import { getTitleStyles } from "@/helpers/localization.ts";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
.background {
  background: url("../../../assets/images/png/Landing/background.png") no-repeat;
  background-position: center;
  background-size: cower;
}
</style>
