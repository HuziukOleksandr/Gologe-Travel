<template>
  <!-- All Inputs for Places Frame -->
  <!-- Inputs wrapper Start -->
  <div
    class="w-full min-h-[56px] flex justify-between flex-wrap md:gap-[25px] sm:gap-[15px] sm:justify-around"
  >
    <!-- Inputs "Enter Destination" wrapper Start -->
    <div
      class="relative flex-grow lg:max-w-[416px] lg:w-full"
      @click="enterVisible = !enterVisible"
    >
      <!-- Use Custom Input "Enter Destination" Start -->
      <CustomInput
        class="w-full font-serrat font-medium text-green"
        type="text"
        placeHolder="Istanbul, Turkey"
      >
        <!-- Use Stol for Image Start -->
        <template v-slot:previousImage>
          <!-- Image for Input -->
          <img
            src="@/assets/images/svg/UI/hotel-black.svg"
            alt="arrowswap"
            class="h-[24px]"
          />
        </template>
        <!-- Use Stol for Image End -->
        <!-- Use Stol for Text Start -->
        <template v-slot:input>
          {{ $t("Landing.QuickSearch.enterDestination") }}
        </template>
        <!-- Use Stol for Text End -->
      </CustomInput>
      <!-- Use Custom Input "Enter Destination" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="enterVisible"
        @close-window="enterVisible = !enterVisible"
      />
    </div>
    <!-- Inputs "Enter Destination" wrapper End -->

    <!-- Inputs "Check In" wrapper Start -->
    <div
      class="relative flex-grow lg:max-w-[240px] lg:w-full"
      @click="checkInVisible = !checkInVisible"
    >
      <!-- Use Custom Input "Check In" Start -->
      <CustomInput
        class="font-serrat font-medium text-green"
        type="text"
        placeHolder="Fri 12/2"
      >
        <template v-slot:input>
          {{ $t("Landing.QuickSearch.checkIn") }}
        </template>

        <!-- Use Stol for Image Start -->
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/calendar.svg"
            alt="arrowswap"
            class="h-[24px]"
          />
        </template>
        <!-- Use Stol for Image End -->
      </CustomInput>
      <!-- Use Custom Input "Check In" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="checkInVisible"
        @close-window="checkInVisible = !checkInVisible"
      />
    </div>
    <!-- Inputs "Check In" wrapper End -->

    <!-- Inputs "Check Out" wrapper Start -->
    <div
      class="relative flex-grow lg:max-w-[240px] lg:w-full"
      @click="checkInVisible = !checkInVisible"
    >
      <!-- Use Custom Input "Check Out" Start -->
      <CustomInput
        class="font-serrat font-medium text-green"
        type="text"
        placeHolder="Sun 12/4"
      >
        <template v-slot:input>
          {{ $t("Landing.QuickSearch.checkOut") }}
        </template>

        <!-- Use Stol for Image Start -->
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/calendar.svg"
            alt="arrowswap"
            class="h-[24px]"
          />
        </template>
        <!-- Use Stol for Image End -->
      </CustomInput>
      <!-- Use Custom Input "Check Out" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="checkOutVisible"
        @close-window="checkOutVisible = !checkOutVisible"
      />
    </div>
    <!-- Inputs "Check Out" wrapper End -->

    <!-- Inputs "Rooms & Guests" wrapper Start -->
    <div
      class="relative flex-grow lg:max-w-[240px] lg:w-full"
      @click="checkInVisible = !checkInVisible"
    >
      <!-- Use Custom Input "Rooms & Guests" Start -->
      <CustomInput
        class="font-serrat font-medium text-green"
        type="text"
        placeHolder="1 room, 2 guests"
      >
        <template v-slot:input>
          {{ $t("Landing.QuickSearch.roomsGuests") }}
        </template>

        <!-- Use Stol for Image Start -->
        <template v-slot:previousImage>
          <img
            src="@/assets/images/svg/UI/user.svg"
            alt="arrowswap"
            class="h-[24px]"
          />
        </template>
        <!-- Use Stol for Image End -->
      </CustomInput>
      <!-- Use Custom Input "Rooms & Guests" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="roomsGuestsVisible"
        @close-window="roomsGuestsVisible = !roomsGuestsVisible"
      />
    </div>
    <!-- Inputs "Rooms & Guests" wrapper End -->
  </div>
  <!-- Inputs wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const enterVisible = ref<boolean>(false);
const checkInVisible = ref<boolean>(false);
const checkOutVisible = ref<boolean>(false);
const roomsGuestsVisible = ref<boolean>(false);
</script>

<style scoped></style>
