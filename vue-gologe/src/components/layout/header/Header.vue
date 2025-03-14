<template>
  <!-- Header wrapper Start -->
  <div
    class="header_wrapper animation"
    :class="{ animate: animationStore.headerIsAnimated }"
  >
    <div class="header_content">
      <CustomNavigation
        :class="
          route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
        "
      />
      <CustomLogo class="sm:hidden absolute left-1/2 -translate-x-1/2" />
      <div class="header-auth-wrapper">
        <!-- Guest -->
        <div class="flex gap-2" v-if="isLoggedIn == false">
          <CustomButton
            :class="getButtonClass('Landing')"
            class="button"
            @click="$router.push({ name: 'Login' })"
          >
            <p class="button-text">{{ $t("Header.login") }}</p>
          </CustomButton>
          <CustomButton
            :class="getButtonClass('Register', true)"
            class="button"
            @click="$router.push({ name: 'Register' })"
          >
            <p class="button-text">{{ $t("Header.signUp") }}</p>
          </CustomButton>
        </div>
        <!-- User -->
         
        <HeaderLoggenIn />
        <!-- Localization -->
        <div class="relative">
          <div class="flex items-center px-2 py-3">
            <img
              :src="getImageUrlSvg(locale)"
              alt="Flag uk"
              class="w-6 rounded transition duration-200 hover:cursor-pointer"
              @click="toggleVisible = !toggleVisible"
            />
          </div>
          <CustomLocalization
            :dialogVisible="toggleVisible"
            @close-window="close"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLoggenIn from "./HeaderUser.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAnimationStore } from "@/stores/animatiomStore";
import { useAuthStore } from "@/stores/authStore.ts";
import { storeToRefs } from "pinia";
import { getImageUrlSvg } from "@/services/Helpers";

const { t } = useI18n();
const animationStore = useAnimationStore(),
  authStore = useAuthStore(),
  route = useRoute(),
  toggleVisible = ref<boolean>(false);
const { isLoggedIn } = storeToRefs(authStore),
  { locale } = useI18n();
onMounted(() => {
  animationStore.startAnimation("headerIsAnimated", true, 100);
});

const close = () => {
  toggleVisible.value = !toggleVisible;
};

const getButtonClass = (type: string, isPrimary: boolean = false) => {
  const isLanding = route.name === "Landing";
  if (isPrimary) {
    return isLanding
      ? "text-custom-darkgreen bg-default"
      : "text-default bg-custom-darkgreen";
  }
  return isLanding ? "text-default" : "text-custom-darkgreen";
};
</script>

<style lang="scss" scoped>
.header_wrapper {
  @apply max-w-large-width w-full h-20 mx-auto px-[104px];

  @screen md {
    @apply px-12;
  }

  @screen sm {
    @apply px-12 h-[60px];
  }
  .header_content {
    @apply w-full h-full flex  items-center justify-between relative;

    .header-auth-wrapper {
      @apply max-w-[400px] w-full h-full flex items-center justify-end gap-4;

      .button {
        @apply h-12 px-6 block;

        .button-text {
          @apply font-serrat text-sm font-semibold;
        }
      }
    }
  }
}

.animation {
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
