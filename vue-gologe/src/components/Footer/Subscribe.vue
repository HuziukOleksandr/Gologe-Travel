<template>
  <!-- Subscribe wrapper Start -->
  <div class="wrapper_subscribe">
    <!-- Wrapper Content Start -->
    <div class="max-w-[700px] w-full flex flex-col justify-between gap-[20px]">
      <!-- Title Start -->
      <h1 class="custom-text-4xl font-bold text-green sm:text-2xl">
        {{ $t("Footer.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text wrapper Start -->
      <div class="flex flex-col gap-[10px]">
        <!-- Sub Title Start -->
        <h2 class="custom-text-xl font-bold text-green">
          {{ $t("Footer.subTitle") }}
        </h2>
        <!-- Sub Title End -->

        <!-- Text Start -->
        <p class="custom-text-base font-medium text-green">
          {{ $t("Footer.text") }}
        </p>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Input and Button wraper Start -->
      <div class="flex gap-[15px] sm:flex-col">
        <!-- Email input  -->
        <input
          type="email"
          :placeholder="$t('Footer.placeholder')"
          class="custom-text-base input"
        />

        <!-- Button for add Email -->
        <!-- Use button component Start -->
        <CustomButton
          class="custom-text-sm font-semibold h-[45px] px-[16px] text-white bg-green lg:h-[56px] sm:justify-center"
        >
          {{ $t("Footer.button") }}
        </CustomButton>
        <!-- Use button component End -->
      </div>
      <!-- Input and Button wraper End -->
    </div>
    <!-- Wrapper Content End -->

    <!-- Subscribe Image wrapper Start -->
    <div class="hidden lg:block">
      <!-- Subscribe Image -->
      <img src="@/assets/images/png/Footer/footer.png" alt="footer" class="h-[300px]" />
    </div>
    <!-- Subscribe Image wrapper End -->
  </div>
  <!-- Subscribe wrapper End -->
</template>

<style scoped>
.wrapper_subscribe {
  @apply max-w-[1230px] w-full min-h-[300px] 
	m-auto p-[24px]
	rounded-[20px] bg-lightGreen
	flex justify-between;
}

.input {
  @apply w-full h-[45px] px-[16px] rounded-[8px]
	bg-white text-green 
	placeholder:text-base placeholder:text-green lg:h-[56px];
}
</style>
