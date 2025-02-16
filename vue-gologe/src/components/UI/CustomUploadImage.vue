<template>
  <form class="flex items-center gap-1 hover:cursor-pointer">
    <!-- Унікальний id -->
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
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore(),
  isUploading = ref(false);
  const props = withDefaults(
  defineProps<{
    path: string;
  }>(),
  {}
);


const uniqueId = `file-input-${Math.random().toString(36).substring(2, 9)}`;

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    isUploading.value = true;
    try {
      const imageUrl = await userStore.uploadImageInStorage(file, props.path);
      if (imageUrl) {
        await userStore.setUserProperty("background", imageUrl);
      }
    } catch (error) {
      console.error("Помилка при завантаженні файлу:", error);
    } finally {
      isUploading.value = false;
    }
  }
}
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
