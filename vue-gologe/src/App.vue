<template>
  <div class="relative w-[100%] h-[100vh] flex flex-col bg-background">
    <router-view
      name="Header"
      v-if="route.name !== 'Landing'"
      class="shadow-md"
    />
    <router-view class="flex-grow flex" />
    <router-view name="Footer" />

    <div id="modal"></div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
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
      authStore.setUserField("firstName", localStorage.getItem("name"));
      authStore.setUserField("lastName", localStorage.getItem("lastName"));
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>
