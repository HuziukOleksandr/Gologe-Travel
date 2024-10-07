<template>
  <!-- A drop-down list for input Start -->
  <TransitionGroup>
    <!-- Wraper List Start -->
    <div
      class="wrapper_list"
      v-if="props.dialogVisible"
      v-click-away="onClickAway"
    >
      <div class="list">
        <div
          class="list-element h-16"
          v-for="(element, index) in props.list"
          :class="{ 'border-none': index === props.list.length - 1 }"
        >
          <p class="element-text">
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
const emit = defineEmits(["closeWindow", "selectValue"]);
const onClickAway = () => {
  emit("closeWindow");
};

// const selectValue = (value: string) => {
//   emit("selectValue", value);
// };
</script>

<style lang="scss" scoped>
.wrapper_list {
  @apply absolute w-full mt-3 bg-default
	border-2 border-custom-darkgray border-solid
	rounded opacity-100 z-50;

  .list {
    @apply w-full flex flex-col gap-1  text-custom-darkgray;

    &:hover {
      @apply cursor-pointer;
    }

    .list-element {
      @apply w-full h-14 flex items-center px-4
        border-b-2 border-b-custom-darkgray;

      &:hover {
        @apply text-custom-darkgreen;
      }
      .element-text {
        @apply font-serrat font-semibold text-sm sm:text-xs;
      }
    }
  }
}
</style>
