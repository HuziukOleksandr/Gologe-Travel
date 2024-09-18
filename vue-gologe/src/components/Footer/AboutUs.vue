<template>
  <!-- About Us wrapper Start -->
  <section class="footer-component-wrapper">
    <!-- Blogs Title Start -->
    <h1 class="footer-component-title">
      {{ $t("Footer.aboutUs") }}
    </h1>
    <!-- Blogs Title End -->

    <!-- Content wrapper Start -->
    <main class="footer-main-component-wrapper">
      <!-- Router link "Our Story" Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.AboutUs.OurStory") }}
      </router-link>
      <!-- Router link "Our Story" End -->

      <!-- Router link "Work with us" Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.AboutUs.Workwithus") }}
      </router-link>
      <!-- Router link "Work with us" End -->
    </main>
    <!-- Content wrapper End -->
  </section>
  <!-- About Us wrapper End -->
</template>
