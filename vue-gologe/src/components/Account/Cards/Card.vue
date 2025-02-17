<template>
  <div class="card_wrapper">
    <div class="w-full flex justify-between">
      <div class="flex flex-col gap-1">
        <h1 class="custom-text-2xl font-semibold">**** **** ****</h1>
        <h2 class="custom-text-3xl font-semibold">4321</h2>
      </div>
      <img src="@/assets/images/svg/UI/delete-card.svg" alt="delete-card" />
    </div>
    <div class="w-full flex justify-between">
      <div class="flex flex-col gap-1">
        <h2 class="custom-text-xs font-semibold">Valid Thru</h2>
        <h1 class="custom-text-xl font-semibold">02/27</h1>
      </div>
      <img src="@/assets/images/svg/card-icon.svg" alt="card-icon" />
    </div>
  </div>
</template>

<style scoped>
.card_wrapper {
  @apply max-w-[375px] w-full h-[210px] p-4
	rounded-2xl bg-custom-lightgreen 
	flex flex-col justify-between;
}
</style>
