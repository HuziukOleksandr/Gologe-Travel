<template>
  <div
    class="background w-full h-[540px] py-20 px-[128px] md:px-16 sm:px-8 sm:py-[120px]"
  >
    <div
      class="lg:max-w-[440px] md:max-w-[380px] w-full flex flex-col gap-2"
    >
      <h1
        class="font-serrat text-5xl font-bold text-default leading-[55px] md:text-4xl sm:text-2xl sm:text-center"
      >
        {{ $t("FlightSearch.Preview.title") }}
      </h1>
      <h2 class="custom-text-xl text-default sm:text-center sm:text-base">
        {{ $t("FlightSearch.Preview.sub-Title") }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("../../../assets/images/png/Flight/Flight-search-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
