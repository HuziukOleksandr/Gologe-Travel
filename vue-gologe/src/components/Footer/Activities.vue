<template>
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
</template>
