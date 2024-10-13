<template>
  <!-- All Inputs for Flight Frame -->
  <!-- Inputs wrapper Start -->
  <div class="search-wrapper">
    <!-- Inputs "From/To" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.fromWidth"
      @click="fromVisible = !fromVisible"
    >
      <!-- Use Custom Input "From/To" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Lahore - Karachi"
        v-model="fromValue"
      >
        <!-- Use Stol for Text Start -->
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.fromTo") }}
          </p>
        </template>
        <!-- Use Stol for Text End -->

        <!-- Use Stol for Image Start -->
        <template v-slot:image>
          <!-- Image for Input -->
          <img
            src="@/assets/images/svg/UI/arrowswap.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
        <!-- Use Stol for Image End -->
      </CustomInput>
      <!-- Use Custom Input "From/To" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="fromVisible"
        :list="['Lahore - Karachi', 'Lahore - Karachi', 'Lahore - Karachi']"
        @close-window="fromVisible = !fromVisible"
      />
    </div>
    <!-- Inputs "From/To" wrapper Start -->

    <!-- Inputs "Trips" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.tripWidth"
      @click="tripVisible = !tripVisible"
    >
      <!-- Use Custom Input "Trip" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Return"
        v-model="tripValue"
      >
        <template v-slot:input>
          <p class="search-input-text">{{ $t("Landing.QuickSearch.trip") }}</p>
        </template>

        <!-- Use Stol for Image Start -->
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/chevron-down.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
        <!-- Use Stol for Image End -->
      </CustomInput>
      <!-- Use Custom Input "Trip" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="tripVisible"
        :list="tripList"
        @close-window="tripVisible = !tripVisible"
      />
    </div>
    <!-- Inputs "Trips" wrapper End -->

    <!-- Inputs "Depart Return" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.departWidth"
      @click="departVisible = !departVisible"
    >
      <!-- Use Custom Input "Depart Return" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="07 Nov 22 - 13 Nov 22"
        v-model="departValue"
      >
        <!-- Use Stol for Text Start -->
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.departReturn") }}
          </p>
        </template>
        <!-- Use Stol for Text End -->
      </CustomInput>
      <!-- Use Custom Input "Depart Return" Start -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="departVisible"
        :list="['17 Nov 22 - 23 Nov 22', '24 Nov 22 - 25 Nov 22', '07 Nov 22 - 13 Nov 22']"
        @close-window="departVisible = !departVisible"
      />
    </div>
    <!-- Inputs "Depart Return" wrapper End -->

    <!-- Inputs "Pasenger Class" wrapper Start -->
    <div
      class="search-input-wrapper"
      :class="props.classWidth"
      @click="classVisible = !classVisible"
    >
      <!-- Use Custom Input "Pasenger Class" Start -->
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="1 Passenger, Economy"
        v-model="classValue"
      >
        <!-- Use Stol for Text Start -->
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.pasengerClass") }}
          </p>
        </template>
        <!-- Use Stol for Text End -->
      </CustomInput>
      <!-- Use Custom Input "Pasenger Class" End -->

      <!-- Use Custom Input List for input -->
      <CustomInputList
        :dialogVisible="classVisible"
        :list="['1 Passenger, Economy', '2 Passenger, Economy', '2 Passenger, 1 Class']"
        @close-window="classVisible = !classVisible"
      />
    </div>
    <!-- Inputs "Pasenger Class" wrapper End -->
  </div>
  <!-- Inputs wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const fromVisible = ref<boolean>(false);
const tripVisible = ref<boolean>(false);
const departVisible = ref<boolean>(false);
const classVisible = ref<boolean>(false);

const fromValue = ref<any>();
const tripValue = ref<any>();
const departValue = ref<any>();
const classValue = ref<any>();



const tripList = ["Return", "Depart"];

const props = withDefaults(
  defineProps<{
    fromWidth: string;
    tripWidth: string;
    departWidth: string;
    classWidth: string;
  }>(),
  {}
);
</script>

<style lang="scss" scoped></style>
