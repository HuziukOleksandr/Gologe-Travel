<template>
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
</template>
