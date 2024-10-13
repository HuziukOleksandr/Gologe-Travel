<template>
  <!-- Custom input Start -->
  <div class="wrapper_input">
    <!-- Text Start -->
    <h1 class="title">
      <!-- Slot for text -->
      <slot name="input"></slot>
    </h1>
    <!-- Text End -->
    <!-- Slot for Image -->
    <slot name="previousImage"></slot>
    <!-- Input -->
    <input
      class="input"
      :type="props.type"
      :placeholder="props.placeHolder"
      v-model="internalValue"
    />
    <!-- Slot for Image -->
    <slot name="image"></slot>
  </div>
  <!-- Custom input Start -->
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

// Props, expected type input and plaseholder
const props = withDefaults(
  defineProps<{
    type: string;
    placeHolder: string;
    modelValue: string;
  }>(),
  { 
    type: "text",
    modelValue: "",
  }
);

// Emit passes the entered value
const emit = defineEmits(["update:modelValue"]);
const internalValue = ref(props.modelValue);

watch(internalValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style lang="scss" scoped>
.wrapper_input {
  @apply flex gap-2.5 items-center rounded px-4
	border-2 border-custom-darkgray border-solid relative
  h-14 md:h-12 sm:h-10 flex-grow;

  .title {
    @apply absolute top-[-15px] z-50 px-3  font-serrat 
    bg-default text-custom-darkgreen
    md:text-sm sm:text-xs sm:top-[-10px];
  }

  .input {
    @apply w-full h-full md:text-sm sm:text-xs;
  }
}
</style>
