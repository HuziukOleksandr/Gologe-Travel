<template>
	<div class="w-[100%] flex flex-col ">
		<router-view name="Header" v-if="route.name !== 'Landing'"/>
		<router-view />
		<router-view name="Footer" v-if="route.name !== 'Landing'"/>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
 
const route = useRoute();


</script>

<style scoped>

</style>