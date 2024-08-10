<template>
  <!-- Custom checkbox form Start -->
  <form class="flex items-center gap-[5px]">
    <!-- Input with type="checkbox" and style="hidden" -->
    <input
      id="checkboxId"
      type="checkbox"
      class="w-[20px] h-[20px] rounded-[4px] border-2 border-green border-solid cursor-pointer"
    />
    <!-- Label for displaying input Start  -->
    <label
      for="checkboxId"
      class="w-full custom-text-base font-bold cursor-pointer flex items-center gap-[5px]"
    >
      <!-- Checkbox image -->
      <img
        src="@/assets/images/checked.svg"
        alt="checked"
        class="w-[20px] h-[20px]"
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
