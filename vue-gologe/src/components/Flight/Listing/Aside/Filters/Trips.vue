<template>
  <TransitionGroup>
    <div class="w-full" v-if="props.dialogVisible">
      <el-checkbox-group
        class="flex flex-col gap-2"
        @change="addTrips"
        v-model="checkList"
      >
        <el-checkbox
          v-for="element in props.trips"
          :label="element"
          :value="element"
        />
      </el-checkbox-group>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
  
const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
    trips: string[];
  }>(),
  {}
);

const checkList = ref([]);

const addTrips = () => {

}
</script>

<style scoped>

:deep(.el-checkbox__inner) {
  width: 18px;
  height: 18px;
  border-color: #79747E;
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

:deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
  color: #112211;
}

:deep(.el-checkbox__label) {
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  color: #79747E;
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
