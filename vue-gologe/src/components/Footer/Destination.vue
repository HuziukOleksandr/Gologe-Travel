<template>
  <!-- Destination wrapper Start -->
  <div class="footer-component-wrapper">
    <!-- Dectination Title Start -->
    <h1 class="footer-component-title">
      {{ $t("Footer.ourDestination") }}
    </h1>
    <!-- Dectination Title End -->

    <!-- Router Link wrapper Start -->
    <div class="footer-main-component-wrapper">
      <!-- Router link Cauntry Canada Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.Destination.Canada") }}
      </router-link>
      <!-- Router link Cauntry Canada End -->

      <!-- Router link Cauntry Alaska Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.Destination.Alaska") }}
      </router-link>
      <!-- Router link Cauntry Alaska End -->

      <!-- Router link Cauntry France Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.Destination.France") }}
      </router-link>
      <!-- Router link Cauntry France End -->

      <!-- Router link Cauntry Iceland Start -->
      <router-link to="#" class="footer-component-link-text">
        {{ $t("Footer.Destination.Iceland") }}
      </router-link>
      <!-- Router link Cauntry Iceland End -->
    </div>
    <!-- Router Link wrapper End -->
  </div>
  <!-- Destination wrapper End -->
</template>
