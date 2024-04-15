<template>
	<!-- Quick Search wrapper Start -->
	<div
		class="search_wrapper"
	>
		<!-- Quick Search Navigation wrapper Start -->
		<div
			class="flex gap-[65px] mb-[30px]"
		>
			<!-- Use Quick Search Navigation Component -->
			<Navigation />
		</div>
		<!-- Quick Search Navigation wrapper End -->

		<!-- Quick Search Flight or Hotel Start -->
		<div 
			class="w-full min-h-[56px] flex justify-between flex-wrap md:gap-[30px] md:justify-start"
		>
			<!-- Use Flight and Hotel Component -->
			<Flight />	
		</div>
		<!-- Quick Search Flight or Hotel End -->

		<!-- Quick Search Buttons Start -->
		<div
			class="h-[48px] flex self-end gap-[24px]"
		>
			<!-- Use Buttons Component -->
			<Buttons />
		</div>
		<!-- Quick Search Buttons End -->
	</div>
	<!-- Quick Search wrapper End -->
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'
import Flight from './Flight.vue'
import Buttons from './Buttons.vue'

</script>

<style scoped>

.search_wrapper {
	@apply
	max-w-[1230px] w-full min-h-[280px] bg-white 
	rounded-[15px] p-[32px]
	flex flex-col gap-[30px] shadow-2xl
}

</style>