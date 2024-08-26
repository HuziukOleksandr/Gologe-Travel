<template>
  <TransitionGroup>
    <div class="w-full" v-if="props.dialogVisible">
      <el-checkbox-group
        class="flex flex-col gap-[8px]"
        @change="addAirlines"
        v-model="checkList"
      >
        <el-checkbox
          v-for="element in props.airlines"
          :label="element"
          :value="element"
        />
      </el-checkbox-group>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkList = ref([]);

const addAirlines = () => {};

const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
    airlines: [];
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

<style>
:root {
  --el-color-primary: #112211
}
</style>