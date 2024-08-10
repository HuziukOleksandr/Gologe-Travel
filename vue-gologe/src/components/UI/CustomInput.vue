<template>
  <!-- Custom input Start -->
  <div class="wrapper_input">
    <!-- Text Start -->
    <h1
      class="absolute top-[-15px] z-55 px-[10px] bg-background font-serrat text-green
      md:text-sm sm:text-xs sm:top-[-10px]"
    >
      <!-- Slot for text -->
      <slot name="input"></slot>
    </h1>
    <!-- Text End -->

    <!-- Input -->
    <input
      class="w-full h-full md:text-sm sm:text-xs"
      :type="props.type"
      :placeholder="props.placeHolder"
      v-model="inputValue"
      @input="changeValue(inputValue)"
    />
    <!-- Slot for Image -->
    <slot name="image"></slot>
  </div>
  <!-- Custom input Start -->
</template>

<script setup lang="ts">
import { ref } from "vue";

// Props, expected type input and plaseholder
const props = withDefaults(
  defineProps<{
    type: string;
    placeHolder: string;
  }>(),
  {}
);

// Input Value
let inputValue = ref<string>("");

// Emit passes the entered value
const emit = defineEmits(["inputValue"]);

const changeValue = (value: string) => {
  emit("inputValue", value);
};
</script>

<style scoped>
.wrapper_input {
  @apply flex gap-[10px] items-center rounded-[4px] px-[15px] 
	border-2 border-gray border-solid relative
  h-[60px]
  md:h-[50px]
  sm:h-[45px];
}
</style>
