<template>
  <!-- Inputs wrapper Start -->
  <div class="search-wrapper">
    <!-- Inputs "Enter Destination" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.enterWidth"
      @click="enterVisible = !enterVisible"
    >
      <!-- Use Custom Input "Enter Destination" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Istanbul, Turkey"
        v-model="enterValue"
      >
        <!-- Use Stol for Image Start -->
        <template v-slot:previousImage>
          <!-- Image for Input -->
          <img
            src="@/assets/images/svg/UI/hotel-black.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
        <!-- Use Stol for Image End -->
        <!-- Use Stol for Text Start -->
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.enterDestination") }}
          </p>
        </template>
        <!-- Use Stol for Text End -->
      </CustomInput>
      <!-- Use Custom Input "Enter Destination" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="enterVisible"
        :list="['Istanbul, Turkey','New York, USA','Kyyv, Ukraine','Paris, France']"
        @close-window="enterVisible = !enterVisible"
      />
    </div>
    <!-- Inputs "Enter Destination" wrapper End -->

    <!-- Inputs "Check In" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.checkInWidth"
      @click="checkInVisible = !checkInVisible"
    >
      <!-- Use Custom Input "Check In" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Fri 12/2"
        v-model="checkInValue"
      >
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.checkIn") }}
          </p>
        </template>

        <!-- Use Stol for Image Start -->
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/calendar.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
        <!-- Use Stol for Image End -->
      </CustomInput>
      <!-- Use Custom Input "Check In" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="checkInVisible"
        :list="['Fri 12/2',' Sun 12/4','Mon 12/5','Fri 13/5']"
        @close-window="checkInVisible = !checkInVisible"
      />
    </div>
    <!-- Inputs "Check In" wrapper End -->

    <!-- Inputs "Check Out" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.checkOutWidth"
      @click="checkOutVisible = !checkOutVisible"
    >
      <!-- Use Custom Input "Check Out" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Sun 12/4"
        v-model="checkOutValue"
      >
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.checkOut") }}
          </p>
        </template>

        <!-- Use Stol for Image Start -->
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/calendar.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
        <!-- Use Stol for Image End -->
      </CustomInput>
      <!-- Use Custom Input "Check Out" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="checkOutVisible"
        :list="['Fri 12/2',' Sun 12/4','Mon 12/5','Fri 13/5']"
        @close-window="checkOutVisible = !checkOutVisible"
      />
    </div>
    <!-- Inputs "Check Out" wrapper End -->

    <!-- Inputs "Rooms & Guests" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.roomsGuestsWidth"
      @click="roomsGuestsVisible = !roomsGuestsVisible"
    >
      <!-- Use Custom Input "Rooms & Guests" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="1 room, 2 guests"
        v-model="roomsGuestsValue"
      >
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.roomsGuests") }}
          </p>
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
        :list="['1 Room, 2 Guests','2 Rooms, 4 Guests','1 Room, 1 Guest','4 Rooms, 4 Guests']"
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

const enterValue = ref<any>();
const checkInValue = ref<any>();
const checkOutValue = ref<any>();
const roomsGuestsValue = ref<any>();
// Props, expected type input and plaseholder
const props = withDefaults(
  defineProps<{
    enterWidth: string;
    checkInWidth: string;
    checkOutWidth: string;
    roomsGuestsWidth: string;
  }>(),
  {}
);
</script>
