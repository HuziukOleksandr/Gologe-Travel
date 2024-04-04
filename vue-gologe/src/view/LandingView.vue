<template>
	<div
		class="max-w-[1440px] w-[100%] m-auto my-[30px]" 
	>
		<Header
			class="max-w-[1380px] w-[100%]  relative z-[99]"
		/>
		<Preview 
			class="mt-[-100px] w-[100%] h-auto z-[0] mx-auto  relative"
		/>
		<QuickSearch
			class="mx-auto top-[-100px] relative z-[97]"
		/>
		<Trips 
			class="mx-auto relative z-[90]"

		/>
		<Review 
			class="mx-auto mt-[100px] relative z-[99]"
		/>
	</div>

</template>

<script setup lang="ts">
import Preview from '@/components/Landing/Preview/Preview.vue'
import Header from '@/components/Header/Header.vue'
import QuickSearch from '@/components/Landing/QuickSearch/QuickSearch.vue'
import Trips from '@/components/Landing/Trips/Trips.vue'
import Review from '@/components/Landing/Reviews/Reviews.vue'

</script>

<style scoped>

</style>