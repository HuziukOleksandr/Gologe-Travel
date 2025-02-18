<template>
  <div class="search-wrapper">
    <div
      class="search-input-wrapper"
      :class="props.fromWidth"
      @click="fromVisible = !fromVisible"
    >
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Lahore - Karachi"
        v-model="fromValue"
      >
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.fromTo") }}
          </p>
        </template>
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/arrowswap.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
      </CustomInput>
      <CustomInputList
        :dialogVisible="fromVisible"
        :list="['Lahore - Karachi', 'Lahore - Karachi', 'Lahore - Karachi']"
        @close-window="fromVisible = !fromVisible"
      />
    </div>
    <div
      class="search-input-wrapper"
      :class="props.tripWidth"
      @click="tripVisible = !tripVisible"
    >
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="Return"
        v-model="tripValue"
      >
        <template v-slot:input>
          <p class="search-input-text">{{ $t("Landing.QuickSearch.trip") }}</p>
        </template>
        <template v-slot:image>
          <img
            src="@/assets/images/svg/UI/chevron-down.svg"
            alt="arrowswap"
            class="search-image"
          />
        </template>
      </CustomInput>
      <CustomInputList
        :dialogVisible="tripVisible"
        :list="tripList"
        @close-window="tripVisible = !tripVisible"
      />
    </div>
    <div
      class="search-input-wrapper"
      :class="props.departWidth"
      @click="departVisible = !departVisible"
    >
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="07 Nov 22 - 13 Nov 22"
        v-model="departValue"
      >
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.departReturn") }}
          </p>
        </template>
        <!-- Use Stol for Text End -->
      </CustomInput>
      <CustomInputList
        :dialogVisible="departVisible"
        :list="[
          '17 Nov 22 - 23 Nov 22',
          '24 Nov 22 - 25 Nov 22',
          '07 Nov 22 - 13 Nov 22',
        ]"
        @close-window="departVisible = !departVisible"
      />
    </div>
    <div
      class="search-input-wrapper"
      :class="props.classWidth"
      @click="classVisible = !classVisible"
    >
      <CustomInput
        class="search-input"
        type="text"
        placeHolder="1 Passenger, Economy"
        v-model="classValue"
      >
        <template v-slot:input>
          <p class="search-input-text">
            {{ $t("Landing.QuickSearch.pasengerClass") }}
          </p>
        </template>
      </CustomInput>
      <CustomInputList
        :dialogVisible="classVisible"
        :list="[
          '1 Passenger, Economy',
          '2 Passenger, Economy',
          '2 Passenger, 1 Class',
        ]"
        @close-window="classVisible = !classVisible"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fromVisible = ref<boolean>(false),
  tripVisible = ref<boolean>(false),
  departVisible = ref<boolean>(false),
  classVisible = ref<boolean>(false),
  fromValue = ref<any>(),
  tripValue = ref<any>(),
  departValue = ref<any>(),
  classValue = ref<any>(),
  tripList = ["Return", "Depart"],
  props = withDefaults(
    defineProps<{
      fromWidth: string;
      tripWidth: string;
      departWidth: string;
      classWidth: string;
    }>(),
    {}
  );
</script>
