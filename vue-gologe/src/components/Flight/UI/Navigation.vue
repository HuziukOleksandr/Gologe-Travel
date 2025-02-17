<template>
  <div class="flex gap-2">
    <p class="text">Turkey</p>
    <img
      src="@/assets/images/svg/UI/chevron-forward.svg"
      alt="chevron-forward"
    />
    <p class="text">Istanbul</p>
    <img
      src="@/assets/images/svg/UI/chevron-forward.svg"
      alt="chevron-forward"
    />
    <p class="active-text">CVK Park Bosphorus Hotel Istanbul</p>
  </div>
</template>

<style lang="scss" scoped>
.text {
  @apply font-serrat text-sm text-custom-red font-semibold ;

  &:hover {
    @apply cursor-pointer scale-105 
  }
}

.active-text {
  @apply font-serrat text-sm text-custom-darkgreen font-semibold;

  &:hover {
    @apply cursor-pointer
  }
}
</style>
