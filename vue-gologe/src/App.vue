<template>
  <div class="relative w-[100%] flex flex-col bg-default">
    <router-view name="Header" v-if="route.name !== 'Landing'" />
    <router-view class="flex" />
    <router-view name="Footer" />
    <div id="modal"></div>
    <div id="error"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { nextTick, onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "@/stores/authStore.ts";
import { useUserStore } from "@/stores/userStore";
import { setItem, removeItem } from "@/services/LocaleStorage";

const route = useRoute(),
  authStore = useAuthStore(),
  userStore = useUserStore();
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      setItem("isLoggedIn", true);
      authStore.setAuthState(true);
      userStore.getCurrentUser();
      await nextTick();

      try {
        const backgroundImageUrl = await userStore.updateRefImage("background");
        const userImageUrl = await userStore.updateRefImage("userImage");
        userStore.setUserProperty("background", backgroundImageUrl);
        userStore.setUserProperty("userImage", userImageUrl);
      } catch (error) {
        console.error("Помилка при оновленні зображення:", error);
      }
    } else {
      setItem("isLoggedIn", false);
      setItem("uid", null);
      removeItem("email");
    }
  });
});
</script>
