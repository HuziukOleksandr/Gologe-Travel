<template>
  <div class="w-fit flex gap-2 items-center" v-if="isLoggedIn == true">
    <CustomButton class="w-fit flex gap-1 items-center mr-2">
      <img
        src="@/assets/images/svg/UI/favourites-light.svg"
        alt="favourites"
        v-if="route.name == 'Landing'"
      />
      <img
        src="@/assets/images/svg/UI/favourites-dark.svg"
        alt="favourites"
        v-else
      />
      <p
        class="custom-text-sm text-custom-darkgreen font-semibold sm:hidden sq:hidden"
        :class="
          route.name !== 'Landing' ? 'text-custom-darkgreen ' : 'text-default'
        "
      >
        {{ $t("Header.favourites") }}
      </p>
    </CustomButton>
    <div
      class="w-0.5 h-4 bg-custom-darkgreen"
      :class="route.name !== 'Landing' ? 'bg-custom-darkgreen ' : 'bg-default'"
    ></div>
    <div class="w-fit relative hover:cursor-pointer" v-click-away="onClickAway">
      <Transition name="user-name">
        <div
          v-if="!settingsVisible"
          class="flex h-11 gap-1 items-center"
          @click="openWindow"
        >
          <div class="w-11 h-11 rounded-full relative">
            <img
              src="@/assets/images/png/Account/avatar-light.svg"
              alt="avatar"
              class="w-11 h-11"
              v-if="route.name == 'Landing'"
            />
            <img
              src="@/assets/images/png/Account/avatar.svg"
              alt="avatar"
              class="w-11 h-11"
              v-else
            />
            <CustomButton
              class="w-3 h-3 rounded-full absolute bg-custom-red right-0 top-8 flex justify-center items-center"
            >
              <img
                src="@/assets/images/svg/UI/chevron-down-user.svg"
                alt="chevron-down-user"
                class="rotate-180"
                :class="{ 'rotate-0': settingsVisible }"
              />
            </CustomButton>
          </div>
          <p
            class="custom-text-sm text-custom-darkgreen font-semibold sm:hidden sq:hidden flex-shrink-0"
            :class="
              route.name !== 'Landing'
                ? 'text-custom-darkgreen '
                : 'text-default'
            "
          >
            {{ userStore.user.firstName }} {{ userStore.user.lastName }}
          </p>
        </div>
      </Transition>
    </div>
    <Transition name="setting">
      <div v-if="settingsVisible" class="flex gap-1">
        <img
          v-if="route.name !== 'Landing'"
          src="@/assets/images/svg/UI/settings.svg"
          alt="settings"
          class="icon"
          @click="router.push({ name: 'Account' })"
        />
        <img
          v-if="route.name !== 'Landing'"
          src="@/assets/images/svg/UI/sign-out.svg"
          alt="sign-out"
          class="icon"
          @click="signOut"
        />
        <img
          v-if="route.name == 'Landing'"
          src="@/assets/images/svg/UI/settings-white.svg"
          alt="settings"
          class="icon"
          @click="router.push({ name: 'Account' })"
        />
        <img
          v-if="route.name == 'Landing'"
          src="@/assets/images/svg/UI/sign-out-white.svg"
          alt="sign-out"
          class="icon"
          @click="signOut"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore.ts";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(authStore);
const settingsVisible = ref<boolean>(false);

const openWindow = () => {
  settingsVisible.value = true;
};

const onClickAway = () => {
  settingsVisible.value = false;
};

async function signOut() {
  try {
    await authStore.handlerSignOut();
    router.push({ name: "Landing" });
  } catch (error) {
    alert(error);
  }
}
</script>

<style scoped>
.icon {
  @apply w-6 h-6 hover:cursor-pointer transform hover:scale-110 transition duration-200;
}

/* Styles for User Name with Animation Start */
.user-name-enter-active,
.user-name-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.user-name-enter-from,
.user-name-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
/* Styles for User Name with Animation End */

/* Styles for Setting with Animation Start */
.setting-enter-active,
.setting-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.setting-enter-from,
.setting-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
/* Styles for Setting with Animation End */
</style>
