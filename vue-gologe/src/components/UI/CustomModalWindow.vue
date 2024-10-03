<template>
  <Teleport to="#modal">
    <Transition>
      <div
        v-show="isOpen"
        class="fixed inset-0 flex items-center justify-center bg-custom-darkgreen bg-opacity-50"
      >
        <div v-click-away="() => emit('closeWindow')">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
  }>(),
  {}
);

const emit = defineEmits(["closeWindow"]);
</script>
