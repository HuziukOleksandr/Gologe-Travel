<template>
  <TransitionGroup>
    <div class="w-full max-w-[340px]" v-if="props.dialogVisible">
      <div class="flex gap-4 flex-wrap">
        <div
          class="px-3 py-2 border-solid border-2 border-custom-lightgreen rounded-md"
          v-for="elem in 5"
        >
          <p class="custom-text-xs font-semibold text-custom-darkgreen">{{ elem - 1 }}+</p>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
// TODO: переробити на компонент

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
