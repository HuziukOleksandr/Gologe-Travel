<template>
  <!-- Subscribe wrapper Start -->
  <div class="subscribe_wrapper">
    <!-- Content Wrapper Start -->
    <div class="content-wrapper">
      <!-- Title Start -->
      <h1 class="content-title">
        {{ $t("Footer.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Sub Title Start -->
        <h2 class="content-sub-title">
          {{ $t("Footer.subTitle") }}
        </h2>
        <!-- Sub Title End -->

        <!-- Text Start -->
        <p class="text">
          {{ $t("Footer.text") }}
        </p>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Input and Button wraper Start -->
      <div class="flex gap-4 sm:flex-col">
        <!-- Email input  -->
        <input
          type="email"
          :placeholder="$t('Footer.placeholder')"
          class="custom-text-base input"
        />

        <!-- Button for add Email -->
        <!-- Use button component Start -->
        <CustomButton
          class="h-11 px-4 bg-custom-darkgreen lg:h-[56px] sm:justify-center"
        >
          <p class="custom-text-sm font-semibold text-white">
            {{ $t("Footer.button") }}
          </p>
        </CustomButton>
        <!-- Use button component End -->
      </div>
      <!-- Input and Button wraper End -->
    </div>
    <!-- Content Wrapper End -->

    <!-- Subscribe Image wrapper Start -->
    <div class="hidden lg:block">
      <!-- Subscribe Image -->
      <img
        src="@/assets/images/png/Footer/footer.png"
        alt="footer"
        class="h-[300px]"
      />
    </div>
    <!-- Subscribe Image wrapper End -->
  </div>
  <!-- Subscribe wrapper End -->
</template>

<style lang="scss" scoped>
.subscribe_wrapper {
  @apply max-w-large-width w-full 
  min-h-72 mx-auto p-6 rounded-3xl bg-custom-green flex justify-between;

  .content-wrapper {
    @apply max-w-[700px] w-full flex flex-col gap-1;

    .content-title {
      @apply font-serrat text-4xl font-semibold sm:text-2xl text-custom-darkgreen;
    }

    .text-wrapper {
      @apply flex flex-col gap-2;

      .content-sub-title {
        @apply font-serrat text-xl font-semibold text-custom-darkgreen;
      }

      .text {
        @apply font-serrat text-base font-medium text-custom-darkgreen;
      }
    }
  }

  .input {
    @apply w-full h-[45px] px-[16px] rounded-[8px]
	bg-white text-green 
	placeholder:text-base placeholder:text-green lg:h-[56px];
  }
}
</style>
