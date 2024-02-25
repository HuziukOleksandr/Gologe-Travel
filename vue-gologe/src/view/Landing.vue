<template>
	<div 
		class="max-w-[1440px] w-[100%] m-auto my-[30px]" 
	>
		<Header
			class="max-w-[1380px] w-[100%] z-50 relative"
		/>
		<Preview 
			class="mt-[-100px] w-[100%] h-auto z-[0] mx-auto  relative"
		/>
		<QuickSearch
			class="relative mx-auto top-[-100px]  z-50"
		/>
		<Trips 
			class="relative mx-auto z-50"

		/>
	</div>

</template>

<script setup lang="ts">
import Preview from '../components/Landing/Preview.vue'
import Header from '../components/Header/Header.vue'
import QuickSearch from '../components/Landing/QuickSearch.vue'
import Trips from '../components/Landing/Trips.vue'

</script>

<style scoped>

</style>