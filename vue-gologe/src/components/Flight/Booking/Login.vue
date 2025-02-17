<template>
  <section class="booking-section-wrapper min-h-[455px]">
    <div class="flex flex-col gap-4">
      <h1 class="custom-text-xl text-custom-darkgreen font-semibold">
        {{ $t("FlightBooking.Login.title") }}
      </h1>
      <CustomInput
        class="custom-text-sm text-custom-darkgreen font-medium"
        :placeHolder="$t('FlightBooking.Login.placeholder')"
        type="text"
      >
      </CustomInput>
      <p class="custom-text-sm text-custom-darkgreen font-medium">
        {{ $t("FlightBooking.Login.text") }}
      </p>
    </div>
    <CustomButton class="w-full h-12 bg-custom-lightgreen flex justify-center">
      <p class="custom-text-base text-custom-darkgreen font-semibold">
        {{ $t("FlightBooking.Login.button") }}
      </p>
    </CustomButton>
    <div class="w-full flex items-center mb-4 lg:mb-6">
      <hr class="grow text-custom-darkgray" />
      <div class="custom-text-sm px-3 grow-0 text-custom-darkgray bg-default">
        {{ $t("FlightBooking.Login.or") }}
      </div>
      <hr class="grow text-custom-darkgray" />
    </div>
    <CustomLoginWith />
    <CustomButton
      class="w-full h-12 flex justify-center border-custom-lightgreen border-2"
    >
      <img src="@/assets/images/svg/UI/mail.svg" alt="mail" />
      <p class="custom-text-base text-custom-darkgreen font-semibold">
        {{ $t("FlightBooking.Login.withEmail") }}
      </p>
    </CustomButton>
  </section>
</template>

