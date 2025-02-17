<template>
  <div class="footer-component-wrapper">
    <h1 class="footer-component-title">
      {{ $t("Footer.ourDestination") }}
    </h1>
    <div class="footer-main-component-wrapper">
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
    </div>
  </div>
</template>
