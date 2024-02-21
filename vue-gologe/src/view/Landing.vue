<template>
	<div 
		class="max-w-[1440px] w-[100%] min-h-[500px] m-auto my-[30px]" 
	>
		<Header
			class="max-w-[1380px] w-[100%] px-[32px] z-50 relative"
		/>
		<Preview 
			class="absolute top-[30px] left-1/2 transform -translate-x-1/2
			w-[100%] h-auto z-0"
		/>
	</div>
</template>

<script setup lang="ts">
import Preview from '../components/Landing/Preview.vue'
import Header from '../components/Header/Header.vue'

</script>

<style scoped>

</style>