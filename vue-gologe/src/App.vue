<template>
  <div class="relative w-[100%] flex flex-col bg-default">
    <router-view name="Header" v-if="route.name !== 'Landing'" />
    <router-view class="flex" />
    <router-view name="Footer" />

    <div id="modal"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "@/stores/authStore.ts";
import { useUserStore } from "@/stores/userStore";
import { setItem, getItem } from "@/services/LocaleStorage";

const route = useRoute();

const authStore = useAuthStore();
const userStore = useUserStore();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Add to Pinia Store
      authStore.setAuthState(true);
      userStore.getUserIndatabase(user.email);

      // Add to Locale Storage
      setItem("isLoggedIn", true);
      setItem("email", user.email);
    } else {
      // Add to Locale Storage
      setItem("isLoggedIn", true);
    }
  });
});
</script>
