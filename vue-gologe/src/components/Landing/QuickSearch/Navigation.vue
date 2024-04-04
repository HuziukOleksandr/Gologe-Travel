<template>
	<CustomButton
		class="custom-text-base font-bold"
	>
		<img 
			src="@/assets/images/flight-black.svg" 
			alt="flight"
		>
		{{ $t("Landing.QuickSearch.flights")}}
	</CustomButton>

	<CustomButton
		class="custom-text-base font-bold"
	>
		<img 
			src="@/assets/images/hotel-black.svg" 
			alt="hotel"
		>
		{{ $t("Landing.QuickSearch.stays")}}
	</CustomButton>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>