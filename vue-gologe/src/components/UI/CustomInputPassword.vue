<template>
  <div class="wrapper_input">
    <h1 class="title">
      <slot name="input"></slot>
    </h1>
    <input
      class="input"
      :type="passwordFieldType"
      :placeholder="props.placeHolder"
      v-model="internalValue"
    />
    <img
      src="@/assets/images/svg/UI/password-close.svg"
      alt="arrowswap"
      class="image"
      @click="switchVisibility"
      v-if="passwordFieldType === 'password'"
    />
    <img
      src="@/assets/images/svg/UI/password-open.svg"
      alt="arrowswap"
      class="image"
      @click="switchVisibility"
      v-else
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    placeHolder: string;
    modelValue: string;
  }>(),
  {
    modelValue: "",
  }
);

const emit = defineEmits(["update:modelValue"]),
  internalValue = ref(props.modelValue);

watch(internalValue, (newValue) => {
  emit("update:modelValue", newValue);
});

let passwordFieldType = ref<string>("password");
const switchVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};
</script>

<style lang="scss" scoped>
.wrapper_input {
  @apply relative flex gap-3 items-center rounded px-4
    border-2 border-custom-darkgray border-solid
    h-14 md:h-12 sm:h-10;

  .title {
    @apply absolute top-[-15px] z-50 px-3  font-serrat 
    bg-default text-custom-darkgreen
    md:text-sm sm:text-xs sm:top-[-10px];
  }

  .input {
    @apply w-full h-full md:text-sm sm:text-xs;
  }
  .image {
    @apply h-6;

    &:hover {
      @apply cursor-pointer;
    }
  }
}
</style>
