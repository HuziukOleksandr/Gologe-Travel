<template>
  <div class="wrapper_input">
    <h1 class="title">
      <slot name="input"></slot>
    </h1>
    <slot name="previousImage"></slot>
    <input
      class="input"
      :type="props.type"
      :placeholder="props.placeHolder"
      v-model="internalValue"
    />
    <slot name="image"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

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
  h-14 md:h-12 sm:h-10;

  .title {
    @apply absolute top-[-15px] z-40 px-3  font-serrat 
    bg-default text-custom-darkgreen
    md:text-sm sm:text-xs sm:top-[-10px];
  }

  .input {
    @apply w-full h-full md:text-sm sm:text-xs;
  }
}
</style>
