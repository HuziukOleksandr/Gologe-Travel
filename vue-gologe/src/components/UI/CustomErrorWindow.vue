<template>
  <Teleport to="#error">
    <Transition name="slide-from-right-to-left">
      <div v-if="props.isOpen" class="fixed inset-0 flex justify-end m-4">
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
  }>(),
  {}
);

const emit = defineEmits(["closeWindow"]);

const startAutoClose = () => {
  setTimeout(() => {
    emit("closeWindow");
  }, 5000);
};
</script>

<style scoped>
.slide-from-right-to-left-enter-active,
.slide-from-right-to-left-leave-active {
  transition: transform 5s ease, opacity 5s ease;
}

.slide-from-right-to-left-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-from-right-to-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-from-right-to-left-leave {
  transform: translateX(0);
  opacity: 1;
}

.slide-from-right-to-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
