<template>
  <form class="flex items-center gap-1 hover:cursor-pointer">
    <input
      :id="uniqueId"
      type="file"
      class="w-5 h-5 rounded-full border-2 border-custom-darkgreen border-solid hover:cursor-pointer"
      @change="handleFileUpload"
    />
    <label
      :for="uniqueId"
      class="custom-text-base font-semibold flex items-center gap-1"
    >
      <slot></slot>
    </label>
  </form>
</template>

<script setup lang="ts">
const uniqueId = `file-input-${Math.random().toString(36).substring(2, 9)}`;
const emit = defineEmits(["upload"]);

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    emit("upload", file);
  }
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
input[type="file"]:checked {
  display: block;
}
input[type="file"]:checked ~ label img {
  display: none;
}
</style>
