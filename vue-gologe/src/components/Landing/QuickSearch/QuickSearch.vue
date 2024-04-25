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
		
		<!-- Use Custom Flihgt Search Component -->
		<CustomFlightSearch />
	</div>
	<!-- Quick Search wrapper End -->
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'


</script>

<style scoped>

.search_wrapper {
	@apply
	max-w-[1230px] w-full min-h-[280px] bg-white 
	rounded-[15px] p-[32px]
	flex flex-col gap-[30px] shadow-2xl
}

</style>