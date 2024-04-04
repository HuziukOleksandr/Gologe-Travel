<template>
	<CustomButton
		class="h-[48px] p-[16px] font-medium"
	>
		<img 
			src="@/assets/images/add-promo.svg" 
			alt="hotel"
		>
			{{ $t("Landing.QuickSearch.addPromoCode")}}
	</CustomButton>

	<CustomButton
		class="h-[48px] p-[16px] font-medium bg-button bg-buttonGreen"
	>
		<img 
			src="@/assets/images/show-flights.svg" 
			alt="hotel"
		>
			{{ $t("Landing.QuickSearch.buttonFlight")}}
	</CustomButton>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>