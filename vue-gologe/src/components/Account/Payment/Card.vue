<template>
  <!-- Card wrapper Start -->
  <div class="card_wrapper">
    <!-- Card Top wrapper Start -->
    <div class="w-full flex justify-between">
      <!-- Card Number Wrapper Start -->
      <div class="flex flex-col gap-1">
        <!-- Card Number Non-Active Start -->
        <h1 class="custom-text-2xl font-semibold">**** **** ****</h1>
        <!-- Card Number Non-Active End -->

        <!-- Card Number Start -->
        <h2 class="custom-text-3xl font-semibold">4321</h2>
        <!-- Card Number End -->
      </div>
      <!-- Card Number Wrapper End -->

      <!-- Card Delete Image -->
      <img src="@/assets/images/svg/UI/delete-card.svg" alt="delete-card" />
    </div>
    <!-- Card Top wrapper End -->

    <!-- Card Bottom wrapper Start -->
    <div class="w-full flex justify-between">
      <!-- Card Info wrapper Start -->
      <div class="flex flex-col gap-1">
        <!-- Card Title Start -->
        <h2 class="custom-text-xs font-semibold">Valid Thru</h2>
        <!-- Card Title End -->

        <!-- Carc Expired Date Start -->
        <h1 class="custom-text-xl font-semibold">02/27</h1>
        <!-- Carc Expired Date End -->
      </div>
      <!-- Card Info wrapper End -->

      <!-- Card Icon -->
      <img src="@/assets/images/svg/card-icon.svg" alt="card-icon" />
    </div>
    <!-- Card Bottom wrapper End -->
  </div>
  <!-- Card wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.card_wrapper {
  @apply max-w-[375px] w-full h-[210px] p-4
	rounded-2xl bg-custom-lightgreen 
	flex flex-col justify-between;
}
</style>
