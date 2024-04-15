<template>
	<!-- Quick Search Custom Button Component -->
	<!-- Use Custom Button Component "Add Promo Code" Start -->
	<CustomButton
		class="h-[48px] p-[16px] font-medium"
	>
		<!-- Images for Button "Add Promo Code" -->
		<img 
			src="@/assets/images/add-promo.svg" 
			alt="hotel"
		>
			{{ $t("Landing.QuickSearch.addPromoCode")}}
	</CustomButton>
	<!-- Use Custom Button Component "Add Promo Code" End -->

	<!-- Use Custom Button Component "Show Fkight" Start -->
	<CustomButton
		class="h-[48px] p-[16px] font-medium bg-button bg-buttonGreen"
	>
		<!-- Images for Button "Show Flight" -->
		<img 
			src="@/assets/images/show-flights.svg" 
			alt="hotel"
		>
			{{ $t("Landing.QuickSearch.buttonFlight")}}
	</CustomButton>
	<!-- Use Custom Button Component "Show Fkight" End -->
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>