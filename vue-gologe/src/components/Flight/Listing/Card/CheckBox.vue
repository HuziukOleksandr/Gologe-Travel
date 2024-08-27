<template>
  <div>
    <el-checkbox-group
      class="flex flex-col gap-[8px]"
      @change="addAirlines"
      v-model="checkList"
    >
      <el-checkbox label="erer" value="dfg"></el-checkbox>
     
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const checkList = ref()
</script>

<style scoped></style>
