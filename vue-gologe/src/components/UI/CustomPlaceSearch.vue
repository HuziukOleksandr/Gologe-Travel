<template>
  <div class="search-wrapper">
    <div
      class="search-input-wrapper"
      :class="props.enterWidth"
      @click="enterVisible = !enterVisible"
    >
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Istanbul, Turkey"
        v-model="enterValue"
      >
        <template v-slot:previousImage>
          <img
            src="@/assets/images/svg/UI/hotel-black.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.enterDestination") }}
          </p>
        </template>
      </CustomInput>
      <CustomInputList
        :dialogVisible="enterVisible"
        :list="[
          'Istanbul, Turkey',
          'New York, USA',
          'Kyyv, Ukraine',
          'Paris, France',
        ]"
        @close-window="enterVisible = !enterVisible"
      />
    </div>
    <div
      class="search-input-wrapper"
      :class="props.checkInWidth"
      @click="checkInVisible = !checkInVisible"
    >
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
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/calendar.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
      </CustomInput>
      <CustomInputList
        :dialogVisible="checkInVisible"
        :list="['Fri 12/2', ' Sun 12/4', 'Mon 12/5', 'Fri 13/5']"
        @close-window="checkInVisible = !checkInVisible"
      />
    </div>
    <div
      class="search-input-wrapper"
      :class="props.checkOutWidth"
      @click="checkOutVisible = !checkOutVisible"
    >
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
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/calendar.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
      </CustomInput>
      <CustomInputList
        :dialogVisible="checkOutVisible"
        :list="['Fri 12/2', ' Sun 12/4', 'Mon 12/5', 'Fri 13/5']"
        @close-window="checkOutVisible = !checkOutVisible"
      />
    </div>
    <div
      class="search-input-wrapper"
      :class="props.roomsGuestsWidth"
      @click="roomsGuestsVisible = !roomsGuestsVisible"
    >
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
        <template v-slot:previousImage>
          <img
            src="@/assets/images/svg/UI/user.svg"
            alt="arrowswap"
            class="h-[24px]"
          />
        </template>
      </CustomInput>
      <CustomInputList
        :dialogVisible="roomsGuestsVisible"
        :list="[
          '1 Room, 2 Guests',
          '2 Rooms, 4 Guests',
          '1 Room, 1 Guest',
          '4 Rooms, 4 Guests',
        ]"
        @close-window="roomsGuestsVisible = !roomsGuestsVisible"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const enterVisible = ref<boolean>(false),
  checkInVisible = ref<boolean>(false),
  checkOutVisible = ref<boolean>(false),
  roomsGuestsVisible = ref<boolean>(false),
  enterValue = ref<any>(),
  checkInValue = ref<any>(),
  checkOutValue = ref<any>(),
  roomsGuestsValue = ref<any>(),
  props = withDefaults(
    defineProps<{
      enterWidth: string;
      checkInWidth: string;
      checkOutWidth: string;
      roomsGuestsWidth: string;
    }>(),
    {}
  );
</script>
