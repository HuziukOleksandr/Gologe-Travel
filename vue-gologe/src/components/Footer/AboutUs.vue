<template>
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
</template>
