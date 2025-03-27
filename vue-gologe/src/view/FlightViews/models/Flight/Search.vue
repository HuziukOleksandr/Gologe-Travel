<template>
  <div class="max-w-large-width w-full flex justify-center px-20 ph:px-10">
    <div class="search_wrapper mx-auto top-[-75px] relative">
      <h1 class="custon-text-xl font-semibold text-custom-darkgreen">
        {{ $t("FlightSearch.Search.question") }}
      </h1>
      <CustomFlightSearch
        fromWidth="lg:max-w-[324px]"
        tripWidth="lg:max-w-[140px]"
        departWidth="lg:max-w-[324px]"
        classWidth="lg:max-w-[324px]"
      />
      <div class="flex self-end gap-6 sm:flex-wrap sm:gap-4">
        <CustomButton class="h-12 p-4 sm:flex-grow sm:justify-center">
          <img src="@/assets/images/svg/UI/add-promo.svg" alt="hotel" />
          <p class="custom-text-sm text-custom-darkgreen font-medium">
            {{ $t("Landing.QuickSearch.addPromoCode") }}
          </p>
        </CustomButton>
        <CustomButton
          class="h-12 p-4 bg-custom-lightgreen sm:flex-grow sm:justify-center"
          @click="$router.push({ name: 'Listing' })"
        >
          <img src="@/assets/images/svg/UI/show-flights.svg" alt="hotel" />
          <p class="custom-text-sm text-custom-darkgreen font-medium">
            {{ $t("Landing.QuickSearch.buttonFlight") }}
          </p>
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search_wrapper {
  @apply max-w-[1230px] w-full bg-white 
	rounded-[16px] p-[32px]
	flex flex-col gap-[30px] shadow-2xl
  sm:gap-[20px];
}
</style>
