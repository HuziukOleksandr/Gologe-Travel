<template>
  <div>
    <el-checkbox-group
      class="flex gap-2"
      @change="addFilters"
      v-model="checkList"
    >
      <el-checkbox
        v-for="element in props.filters"
        :label="element"
        :value="element"
      />
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkList = ref([]);

const addFilters = () => {};

const props = withDefaults(
  defineProps<{
    filters: string[];
  }>(),
  {}
);
</script>

<style scoped>
:deep(.el-checkbox__inner) {
  width: 18px;
  height: 18px;
  border-color: #79747e;
  border-width: 2px;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #8dd3bb;
  border-color: #8dd3bb;
}

:deep(.el-checkbox__inner:after) {
  width: 4px;
  height: 9px;
}

:deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #112211;
}

:deep(.el-checkbox__label) {
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  color: #112211;
}
</style>
