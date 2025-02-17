<template>
  <div class="subscribe_wrapper">
    <div class="content-wrapper">
      <h1 class="content-title">
        {{ $t("Footer.title") }}
      </h1>
      <div class="flex flex-col gap-2">
        <h2 class="font-serrat text-xl font-semibold text-custom-darkgreen">
          {{ $t("Footer.subTitle") }}
        </h2>

        <p class="font-serrat text-base font-medium text-custom-darkgreen">
          {{ $t("Footer.text") }}
        </p>
      </div>

      <div class="flex gap-4 sm:flex-col">
        <input
          id="subscribe"
          type="email"
          :placeholder="$t('Footer.placeholder')"
          class="custom-text-base input"
        />

        <CustomButton
          class="h-11 px-4 bg-custom-darkgreen lg:h-14 sm:justify-center"
        >
          <p class="custom-text-sm font-semibold text-default">
            {{ $t("Footer.button") }}
          </p>
        </CustomButton>
      </div>
    </div>

    <div class="hidden lg:block">
      <img
        src="@/assets/images/png/Footer/footer.png"
        alt="footer"
        class="h-[300px]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscribe_wrapper {
  @apply max-w-large-width w-full 
  min-h-72 mx-auto p-6 rounded-3xl bg-custom-green flex justify-between;

  .content-wrapper {
    @apply max-w-[700px] w-full flex flex-col justify-between gap-1;

    .content-title {
      @apply font-serrat text-5xl font-semibold sm:text-2xl text-custom-darkgreen;
    }
  }

  .input {
    @apply w-full h-11 px-4 rounded-lg bg-default text-custom-darkgreen 
    placeholder:text-base placeholder:text-custom-darkgreen lg:h-14;
  }
}
</style>
