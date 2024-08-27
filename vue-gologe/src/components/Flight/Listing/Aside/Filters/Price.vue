<template>
  <TransitionGroup>
    <div class="w-full" v-if="props.dialogVisible">
      <div>
        <el-slider
          v-model="value"
          range
          show-stops
          :min="50"
          :max="1200"
          :show-tooltip="false"
        />
      </div>
      <div class="flex justify-between">
        <div class="custom-text-xs font-bold text-green">${{ value[0] }}</div>
        <div class="custom-text-xs font-bold text-green">${{ value[1] }}</div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref([50, 1200]);

const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
  }>(),
  {}
);
</script>

<style scoped>

:deep(.el-slider__button) {
  background-color: #8DD3BB;
  border-color: #8DD3BB;
}
:deep(.el-slider__bar) {
  background-color: #112211;
  height: 3px;
}
:deep(.el-slider) {
  --el-slider-button-wrapper-offset: -16px
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
