<template>
  <!-- Contacts wrapper Start -->
  <div class="flex flex-col gap-[15px]">
    <!-- Contact Title Start -->
    <h1 class="customtext-base font-bold text-green">
      {{ $t("Footer.ContactUs") }}
    </h1>
    <!-- Contact Title End -->

    <!-- Content wrapper Start -->
    <div class="flex flex-col gap-[10px]">
      <!-- Router link "Our Story" Start -->
      <router-link to="#" class="custom-text-sm h-[17px] text-gray">
        {{ $t("Footer.Contact.OurStory") }}
      </router-link>
      <!-- Router link "Our Story" End -->

      <!-- Router link "Work with us" Start -->
      <router-link to="#" class="custom-text-sm h-[17px] text-gray">
        {{ $t("Footer.Contact.Workwithus") }}
      </router-link>
      <!-- Router link "Work with us" End -->
    </div>
    <!-- Content wrapper End -->
  </div>
  <!-- Contacts wrapper End -->
</template>

<script setup lang="ts"></script>
