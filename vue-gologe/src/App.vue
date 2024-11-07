<template>
  <div class="relative w-[100%]  flex flex-col bg-default">
    <router-view
      name="Header"
      v-if="route.name !== 'Landing'"
    />
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

const route = useRoute();
const isLoggedIn = ref(false);
const authStore = useAuthStore();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      localStorage.setItem("isLoggedIn", isLoggedIn.value ? "true" : "false");
      
      authStore.setAuthState(isLoggedIn.value);
      const firstName = localStorage.getItem("name") || '';
      const lastName = localStorage.getItem("lastName") || '';
    } else {
      isLoggedIn.value = false;
      localStorage.setItem("isLoggedIn", "false");
    }
  });
});
</script>
