<template>
  <TransitionGroup>
    <div class="w-full" v-if="props.dialogVisible">
      <div>
        <el-slider
          v-model="modelValue"
          range
          show-stops
          :step="900000"
          :min="dateStartMls"
          :max="dateEndMls"
          :show-tooltip="false"
          @change="changeValues"
        />
      </div>
      <div class="flex justify-between">
        <div class="custom-text-xs font-semibold text-custom-darkgreen">
          {{ dateStart }}
        </div>
        <div class="custom-text-xs font-semibold text-custom-darkgreen">
          {{ dateEnd }}
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
  }>(),
  {}
);

const dateStart = ref(dayjs.utc("2024-08-25T00:01:00.000Z").format("h:mm A"));
const dateEnd = ref(dayjs.utc("2024-08-25T23:59:59.000Z").format("h:mm A"));

const dateStartMls = dayjs.utc("2024-08-25T00:01:00.000Z").valueOf();
const dateEndMls = dayjs.utc("2024-08-25T23:59:59.000Z").valueOf();

const modelValue = ref([dateStartMls, dateEndMls]);

const changeValues = (rangeDate) => {
  dateStart.value = dayjs.utc(rangeDate[0]).format("h:mm A");
  dateEnd.value = dayjs.utc(rangeDate[1]).format("h:mm A");
};
</script>

<style scoped>
:deep(.el-slider__button) {
  background-color: #8dd3bb;
  border-color: #8dd3bb;
}
:deep(.el-slider__bar) {
  background-color: #112211;
  height: 3px;
}
:deep(.el-slider) {
  --el-slider-button-wrapper-offset: -16px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.el-slider__button {
  background-color: black;
}
</style>
