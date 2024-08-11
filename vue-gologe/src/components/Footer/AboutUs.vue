<template>
  <!-- About Us wrapper Start -->
  <div class="w-[170px] flex flex-col gap-[15px]">
    <!-- Blogs Title Start -->
    <h1 class="custom-text-base font-bold text-green">
      {{ $t("Footer.aboutUs") }}
    </h1>
    <!-- Blogs Title End -->

    <!-- Content wrapper Start -->
    <div class="flex flex-col gap-[10px]">
      <!-- Router link "Our Story" Start -->
      <router-link to="#" class="custom-text-sm h-[17px] text-gray">
        {{ $t("Footer.AboutUs.OurStory") }}
      </router-link>
      <!-- Router link "Our Story" End -->

      <!-- Router link "Work with us" Start -->
      <router-link to="#" class="custom-text-sm h-[17px] text-gray">
        {{ $t("Footer.AboutUs.Workwithus") }}
      </router-link>
      <!-- Router link "Work with us" End -->
    </div>
    <!-- Content wrapper End -->
  </div>
  <!-- About Us wrapper End -->
</template>
