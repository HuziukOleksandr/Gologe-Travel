<template>
  <TransitionGroup>
    <div class="w-full" v-if="props.dialogVisible">
      <!--Filter for Rating Start -->
      <div class="flex gap-4">
        <!-- Rating content Start -->
        <div
          class="px-3 py-2 border-solid border-2 border-custom-lightgreen rounded-md"
          v-for="elem in 5"
        >
          <!-- Text Start -->
          <p class="custom-text-xs font-semibold text-custom-darkgreen">{{ elem - 1 }}+</p>
          <!-- Text End -->
        </div>
        <!-- Rating content Start -->
      </div>
      <!-- Filter for Rating End -->
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
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
