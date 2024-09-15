<template>
  <!-- Login With wrapper Start -->
  <div class="flex justify-between gap-[10px]">
    <!-- Use Custom Button "Facebook" Start -->
    <CustomButton class="buttons">
      <!-- Button Image -->
      <img
        class="w-[24px]"
        src="@/assets/images/svg/messengers/facebook-login.svg"
        alt="facebook"
      />
    </CustomButton>
    <!-- Use Custom Button "Facebook" End -->

    <!-- Use Custom Button "Google" Start -->
    <CustomButton class="buttons">
      <!-- Google Image -->
      <img
        class="w-[24px]"
        src="@/assets/images/svg/messengers/google-login.svg"
        alt="google"
      />
    </CustomButton>
    <!-- Use Custom Button "Google" End -->

    <!-- Use Custom Button "Apple" Start -->
    <CustomButton class="buttons">
      <!-- Apple Image -->
      <img
        class="w-[24px]"
        src="@/assets/images/svg/messengers/apple-login.svg"
        alt="apple"
      />
    </CustomButton>
    <!-- Use Custom Button "Apple" End -->
  </div>
  <!-- Login With wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.buttons {
  @apply w-full h-[48px] flex justify-center border-[2px] border-solid border-buttonGreen;
}
</style>
