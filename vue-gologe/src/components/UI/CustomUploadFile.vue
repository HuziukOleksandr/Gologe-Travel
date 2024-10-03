<template>
  <!-- Custom Upload File componemt wrapper Start -->
  <form class="flex items-center gap-1 px-4 hover:cursor-pointer">
    <!-- Input with type="file" and style="hidden" -->
    <input
      id="checkboxId"
      type="file"
      class="w-5 h-5 rounded-full border-2 border-custom-darkgreen border-solid"
    />

    <!-- Label for displaying input Start  -->
    <label
      for="checkboxId"
      class="custom-text-base font-semibold flex items-center gap-1"
    >
      <!-- Image for input -->
      <img
        src="@/assets/images/svg/UI/upload-file.svg"
        alt="checked"
        class="w-5 h-5"
      />
      <!-- Slot for Image or something else -->
      <slot></slot>
    </label>
    <!-- Label for displaying input End  -->
  </form>
  <!-- Custom Upload File componemt wrapper End -->
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
