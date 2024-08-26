<template>
  <!-- A drop-down list for input Start -->
  <TransitionGroup>
    <!-- Wraper List Start -->
    <div
      class="wrapper_list"
      v-if="props.dialogVisible"
      v-click-away="onClickAway"
    >
      <div class="w-full flex flex-col gap-[5px] hover:cursor-pointer text-gray">
        
        <div
          class="w-full h-[60px] flex items-center px-[15px] border-b-gray border-b-[2px] hover:text-buttonGreen"
          v-for="(element, index) in props.list"
          :class="{ 'border-none': index === props.list.length - 1 }"
        >
          <p
            class="font-serrat font-bold text-sm md:text-sm sm:text-xs"
          >
          {{ element }}
        </p>
        </div>
      </div>
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
    list: [];
  }>(),
  {}
);

// Emit for close
const emit = defineEmits(["closeWindow"]);
const onClickAway = () => {
  emit("closeWindow");
};

const style = "border-none";
</script>

<style scoped>
.wrapper_list {
  @apply absolute 
	mt-[10px] bg-white w-full
	border-2 border-gray border-solid
	rounded-[4px] opacity-100 z-[99];
}
</style>
