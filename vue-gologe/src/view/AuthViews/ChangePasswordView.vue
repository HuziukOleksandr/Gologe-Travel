<template>
  <div>
    <ChangeComponent class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import ChangeComponent from "@/components/Auth/ChangeComponent.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>
