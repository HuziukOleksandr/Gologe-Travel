<template>
  <!-- Contacts wrapper Start -->
  <section class="footer-component-wrapper">
    <!-- Contact Title Start -->
    <h1 class="footer-component-title">
      {{ $t("Footer.ContactUs") }}
    </h1>
    <!-- Contact Title End -->

    <!-- Content wrapper Start -->
    <main class="footer-main-component-wrapper">
      <!-- Router link "Our Story" Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.Contact.OurStory") }}
      </router-link>
      <!-- Router link "Our Story" End -->

      <!-- Router link "Work with us" Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.Contact.Workwithus") }}
      </router-link>
      <!-- Router link "Work with us" End -->
    </main>
    <!-- Content wrapper End -->
  </section>
  <!-- Contacts wrapper End -->
</template>
