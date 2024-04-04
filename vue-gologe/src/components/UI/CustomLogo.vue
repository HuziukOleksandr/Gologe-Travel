<template>
	<img 
		src="@/assets/images/logo.svg" 
		alt="Logo"
		@click="$router.push({name:'Landing'})"
		v-if="route.name == 'Landing'"
		class="logo h-[36px]"
	>
	<img 
		src="@/assets/images/logo-black.svg" 
		alt="Logo"
		class="logo h-[36px]"
		@click="$router.push({name:'Landing'})"
		v-else
	>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>

.logo:hover { 
	transition-duration: 500ms;
	cursor: pointer;
	transform: scale(1.02);
}
</style>