<template>
  <Teleport to="#modal">
    <Transition
      name="slide-from-top-right"
      >
      <div
        class="fixed flex items-center "
      >
        <div
          class="modal-content"
          v-click-away="() => emit('closeWindow')"
        >
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

// Таймер для автоматичного закриття
const startAutoClose = () => {
  setTimeout(() => {
    emit("closeWindow");
  }, 5000); // 5 секунд
};
</script>

<style scoped>
/* Анімація для з'явлення з правого верхнього кута */
.slide-from-top-right-enter-active,
.slide-from-top-right-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-from-top-right-enter {
  transform: translate(50%, -50%);
  opacity: 0;
}

.slide-from-top-right-leave-to {
  transform: translate(50%, -50%);
  opacity: 0;
}

/* Стили для модального вікна */
.modal-content {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
