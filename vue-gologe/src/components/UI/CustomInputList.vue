<template>
  <TransitionGroup>
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
  </TransitionGroup>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
    list: string[];
  }>(),
  {
    dialogVisible: false,
  }
);

const emit = defineEmits(["closeWindow", "selectValue"]);
const onClickAway = () => {
  emit("closeWindow");
};
</script>

<style lang="scss" scoped>
.wrapper_list {
  @apply absolute w-full mt-2 bg-default
	border-2 border-custom-darkgray border-solid
	rounded z-50;

  .list {
    @apply relative w-full flex flex-col gap-1 text-custom-darkgray;

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
