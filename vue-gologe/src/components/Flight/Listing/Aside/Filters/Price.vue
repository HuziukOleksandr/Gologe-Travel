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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
