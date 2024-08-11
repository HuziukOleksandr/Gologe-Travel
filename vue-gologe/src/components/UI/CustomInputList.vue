<template>
  <!-- A drop-down list for input Start -->
  <TransitionGroup>
    <!-- Wraper List Start -->
    <div
      class="wrapper_list"
      v-if="props.dialogVisible"
      v-click-away="onClickAway"
    >
      <!-- Slot for content -->
      <slot></slot>
    </div>
    <!-- Wraper List Start -->
  </TransitionGroup>
  <!-- A drop-down list for input Start -->
</template>

<script setup lang="ts">
// Props expected boolean
const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
  }>(),
  {}
);

// Emit for close
const emit = defineEmits(["closeWindow"]);
const onClickAway = () => {
  emit("closeWindow");
};
</script>

<style scoped>
.wrapper_list {
  @apply absolute 
	h-[400px] mt-[10px] bg-white w-full
	border-2 border-gray border-solid
	rounded-[4px] opacity-100 z-[99];
}
</style>
