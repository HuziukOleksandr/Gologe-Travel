<template>
  <div class="filter-header" @click="changeVisibility()">
    <h2 class="title">
      {{ name }}
    </h2>
    <img
      class="image"
      :class="{ 'rotate-180': visible }"
      src="@/assets/images/svg/UI/chevron.svg"
      alt="chevron-down"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref<boolean>(false),
 emit = defineEmits(["show"])

const props = withDefaults(
  defineProps<{
    name: string;
  }>(),
  {}
);

const changeVisibility = () => {
  visible.value = !visible.value;
  emit("show", visible.value)
};
</script>

<style lang="scss" scoped>
.filter-header {
  @apply flex justify-between;

  &:hover {
    @apply cursor-pointer;
  }

  .title {
    @apply font-serrat text-base font-semibold text-custom-darkgreen;
  }
  .image {
    @apply transition-all duration-300;
  }
}
</style>
