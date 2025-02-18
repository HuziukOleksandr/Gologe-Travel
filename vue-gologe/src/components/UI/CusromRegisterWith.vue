<template>
  <div class="flex justify-between gap-4">
    <CustomButton class="buttons">
      <img
        class="w-6"
        src="@/assets/images/svg/messengers/facebook-login.svg"
        alt="facebook"
      />
    </CustomButton>
    <CustomButton class="buttons">
      <!-- Google Image -->
      <img
        class="w-6"
        src="@/assets/images/svg/messengers/google-login.svg"
        alt="google"
      />
    </CustomButton>
    <CustomButton class="buttons">
      <img
        class="w-6"
        src="@/assets/images/svg/messengers/apple-login.svg"
        alt="apple"
      />
    </CustomButton>
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  @apply w-full h-12 flex justify-center border-2 border-solid border-custom-lightgreen;
}
</style>
