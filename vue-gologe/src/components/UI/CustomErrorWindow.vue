<template>
  <Teleport to="#error">
    <Transition name="slide-from-right-to-left">
      <div v-show="props.isOpen" class="fixed inset-0 flex justify-end">
        <div>
          <slot></slot>
        </div>
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
  transition: transform 1s ease, opacity 0.5s ease;
}

.slide-from-right-to-left-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-from-right-to-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
