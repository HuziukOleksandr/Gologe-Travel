<template>
  <div class="h-[40px]">
    
  </div>
</template>

<script setup lang="ts">
import Content from "./Content.vue";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    flights: [];
  }>(),
  {}
);

const checkList = ref([]);

const addFlights = () => {
  console.log(checkList.value);
};
</script>

<style scoped>


.el-checkbox {
  height: 40px;
}

:deep(.el-card) {
  all: initial;
}

:deep(.el-card__body) {
  all: initial;
}

:deep(.el-checkbox__inner) {
  width: 18px;
  height: 18px;
  border-color: #79747e;
  border-width: 2px;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #112211;
  border-color: #112211;
}

:deep(.el-checkbox__inner:after) {
  width: 4px;
  height: 9px;
}

:deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #112211;
}

.reset {
  background-color: none;
}
</style>
