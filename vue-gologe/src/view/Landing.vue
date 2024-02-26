<template>
	<div
		class="max-w-[1440px] w-[100%] m-auto my-[30px]" 
	>
		<Header
			class="max-w-[1380px] w-[100%] x-99 relative"
		/>
		<Preview 
			class="mt-[-100px] w-[100%] h-auto z-[0] mx-auto  relative"
		/>
		<QuickSearch
			class="relative mx-auto top-[-100px]  x-99"
		/>
		<Trips 
			class="relative mx-auto x-99"

		/>
		<Review 
			class="relative mx-auto x-99"
		/>
	</div>

</template>

<script setup lang="ts">
import Preview from '../components/Landing/Preview.vue'
import Header from '../components/Header/Header.vue'
import QuickSearch from '../components/Landing/QuickSearch.vue'
import Trips from '../components/Landing/Trips.vue'
import Review from '../components/Landing/Review.vue'

</script>

<style scoped>

</style>