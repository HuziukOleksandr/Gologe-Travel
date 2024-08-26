<template>
  <TransitionGroup>
    <div class="w-full" v-if="props.dialogVisible">
      <!--Filter for Rating Start -->
      <div class="flex gap-[16px]">
        <!-- Rating content Start -->
        <div
          class="px-[12px] py-[8px] border-solid border-[2px] border-buttonGreen rounded-[4px]"
          v-for="elem in 5"
        >
          <!-- Text Start -->
          <p class="custom-text-xs font-bold text-green">{{ elem - 1 }}+</p>
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
