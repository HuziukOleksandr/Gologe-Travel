<template>
  <Teleport to="#error">
    <Transition name="slide-fade">
      <div v-show="props.isOpen" class="fixed inset-0 flex justify-end m-4">
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isOpen: boolean;
  }>(),
  {}
);

const emit = defineEmits(["closeWindow"]);
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
