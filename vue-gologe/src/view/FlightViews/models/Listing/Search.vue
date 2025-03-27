<template>
  <div
    class="w-full rounded-2xl flex justify-between shadow-xl mb-8 py-8 px-6 md:gap-5 sm:flex-col sm:gap-4 z-[999]"
  >
    <CustomFlightSearch 
      class="max-w-[1105px]"
      fromWidth="lg:max-w-[295px]"
      tripWidth="lg:max-w-[140px]"
      departWidth="lg:max-w-[295px]"
      classWidth="lg:max-w-[295px]"
    />
    <CustomButton
      class="h-14 p-4 rounded-md bg-custom-lightgreen flex justify-center items-center md:h-12 sm:h-10"
    >
      <img src="@/assets/images/svg/UI/search.svg" alt="Search" />
    </CustomButton>
  </div>
</template>

