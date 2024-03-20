<template>
	<div class="w-[100%] flex flex-col bg-background">
		<router-view name="Header" v-if="route.name !== 'Landing'"/>
		<router-view />
		<router-view name="Footer" />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();


</script>

<style scoped>

</style>