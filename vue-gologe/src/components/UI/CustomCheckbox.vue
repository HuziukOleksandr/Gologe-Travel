<template>
  <!-- Custom checkbox form Start -->
  <form class="flex items-center gap-1">
    <!-- Input with type="checkbox" and style="hidden" -->
    <input
      id="checkboxId"
      type="checkbox"
      class="w-5 h-5 rounded border-2 border-solid border-custom-darkgreen cursor-pointer"
    />
    <!-- Label for displaying input Start  -->
    <label
      for="checkboxId"
      class="w-full cursor-pointer flex items-center gap-1"
    >
      <!-- Checkbox image -->
      <img
        src="@/assets/images/svg/UI/checked.svg"
        alt="checked"
        class="w-5 h-5"
      />
      <!-- Slot for text or something -->
      <slot></slot>
    </label>
    <!-- Label for displaying input End  -->
  </form>
  <!-- Custom checkbox form End -->
</template>

<script setup lang="ts"></script>

<style scoped>
#checkboxId {
  display: none;
}
#checkboxId:checked {
  display: block;
}
#checkboxId:checked ~ label img {
  display: none;
}
</style>
