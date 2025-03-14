<template>
  <!-- Footer Wrapper Start -->
  <div
    class="wrapper_footer p-4 animation"
    id="footer"
    :class="{ animate: animationStore.footerIsAnimated }"
  >
    <!-- Subscribe -->
    <section class="mt-[-150px]">
      <div class="subscribe_wrapper">
        <div class="content-wrapper">
          <h1 class="content-title">
            {{ $t("Footer.title") }}
          </h1>
          <div class="flex flex-col gap-2">
            <h2 class="font-serrat text-xl font-semibold text-custom-darkgreen">
              {{ $t("Footer.subTitle") }}
            </h2>

            <p class="font-serrat text-base font-medium text-custom-darkgreen">
              {{ $t("Footer.text") }}
            </p>
          </div>

          <div class="flex gap-4 sm:flex-col">
            <input
              id="subscribe"
              type="email"
              :placeholder="$t('Footer.placeholder')"
              class="custom-text-base input"
            />

            <CustomButton
              class="h-11 px-4 bg-custom-darkgreen lg:h-14 sm:justify-center"
            >
              <p class="custom-text-sm font-semibold text-default">
                {{ $t("Footer.button") }}
              </p>
            </CustomButton>
          </div>
        </div>

        <div class="hidden lg:block">
          <img
            src="@/assets/images/png/Footer/footer.png"
            alt="footer"
            class="h-[300px]"
          />
        </div>
      </div>
    </section>
    <div class="wrapper_container">
      <div
        class="min-w-32 flex flex-col gap-6 sm:flex-row sm:gap-1 sm:w-full sm:justify-around sm:flex-wrap"
      >
        <img
          src="@/assets/images/svg/logo/logo-footer.svg"
          alt="logo"
          class="logo"
        />
        <div class="wrapper_images">
          <img
            src="@/assets/images/svg/messengers/facebook.svg"
            alt="facebook"
            class="w-[24px]"
          />
          <img
            src="@/assets/images/svg/messengers/twitter.svg"
            alt="twitter"
            class="w-[24px]"
          />
          <img
            src="@/assets/images/svg/messengers/youtube.svg"
            alt="youtube"
            class="w-[24px]"
          />
          <img
            src="@/assets/images/svg/messengers/instagram.svg"
            alt="instagram"
            class="w-[24px]"
          />
        </div>
      </div>
      <div class="between w-full flex-wrap gap-5 sm:hidden">
        <!-- Destination -->
        <section class="footer-component-wrapper">
          <h1 class="footer-component-title">
            {{ $t("Footer.ourDestination") }}
          </h1>
          <main class="footer-main-component-wrapper">
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Destination.Canada") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Destination.Alaska") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Destination.France") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Destination.Iceland") }}
            </router-link>
          </main>
        </section>
        <!-- Activities -->
        <section class="footer-component-wrapper">
          <h1 class="footer-component-title">
            {{ $t("Footer.ourActivities") }}
          </h1>
          <main class="footer-main-component-wrapper">
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Activities.NorthernLights") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Activities.CruisingSailing") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Activities.MultiActivities") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Activities.Kayaing") }}
            </router-link>
          </main>
        </section>
        <!-- Blogs -->
        <section class="footer-component-wrapper">
          <h1 class="footer-component-title">
            {{ $t("Footer.travelBlogs") }}
          </h1>
          <main class="footer-main-component-wrapper">
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Blogs.Bali") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Blogs.SriLanks") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Blogs.Peru") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Blogs.Dubai") }}
            </router-link>
          </main>
        </section>
        <!-- About -->
        <section class="footer-component-wrapper">
          <h1 class="footer-component-title">
            {{ $t("Footer.aboutUs") }}
          </h1>
          <main class="footer-main-component-wrapper">
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.AboutUs.OurStory") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.AboutUs.Workwithus") }}
            </router-link>
          </main>
        </section>
        <!-- Contact -->
        <section class="footer-component-wrapper">
          <h1 class="footer-component-title">
            {{ $t("Footer.ContactUs") }}
          </h1>
          <main class="footer-main-component-wrapper">
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Contact.OurStory") }}
            </router-link>
            <router-link to="#" class="footer-component-link-text">
              {{ $t("Footer.Contact.Workwithus") }}
            </router-link>
          </main>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useScrollToElement } from "@/services/ScrollToElement.ts";
import { useAnimationStore } from "@/stores/animatiomStore";

const isVisible = useScrollToElement("footer", window.innerHeight),
  animationStore = useAnimationStore();

watch(isVisible, (newValue) => {
  if (!newValue) animationStore.startAnimation("footerIsAnimated", true, 100);
});
</script>

<style lang="scss" scoped>
.wrapper_footer {
  @apply w-full  m-auto mt-36 pb-8 bg-custom-lightgreen  flex flex-col justify-between md:px-12 sm:px-6 sm:pb-9;

  .wrapper_container {
    @apply max-w-primary-width w-full mx-auto pt-12 flex justify-between gap-5
	  lg:gap-[100px] 
	  sm:flex-col sm:items-center sm:p-2;

    .wrapper_images {
      @apply min-w-[100px] 
	    flex justify-between 
	    sm:gap-[4px] sm:flex-wrap sm:h-[55px];
    }

    .logo:hover {
      transition-duration: 500ms;
      cursor: pointer;
      transform: scale(1.02);
    }
  }
  .subscribe_wrapper {
    @apply max-w-large-width w-full 
      min-h-72 mx-auto p-6 rounded-3xl bg-custom-green 
      flex justify-between;

    .content-wrapper {
      @apply max-w-[700px] w-full flex flex-col justify-between gap-1;

      .content-title {
        @apply font-serrat text-5xl font-semibold sm:text-2xl text-custom-darkgreen;
      }
    }

    .input {
      @apply w-full h-11 px-4 rounded-lg bg-default text-custom-darkgreen 
        placeholder:text-base placeholder:text-custom-darkgreen lg:h-14;
    }
  }
}

.animation {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
