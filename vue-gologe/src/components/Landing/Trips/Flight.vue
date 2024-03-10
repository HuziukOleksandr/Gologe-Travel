<template>
	<div
		class="flight max-w-[605px] w-full h-[560px] 
			flex flex-col items-center justify-end gap-[10px] 
				px-[100px] py-[25px] rounded-[20px]"
	>
		<h1
			class="custom-text-4xl font-bold text-white"
		>
			{{ $t("Landing.Trips.flights") }}
		</h1>
		<h2
			class="custom-text-base font-regular text-center text-background"
		>
			{{ $t("Landing.Trips.textFlight") }}
		</h2>
		<CustomButton
			class="custom-text-sm font-medium h-[48px] p-[16px] bg-button"
			@click="$router.push({name:'Flight'})"
		>
			<img 
				src="../../../assets/images/show-flights.svg" 
				alt="hotel"
			>
				{{ $t("Landing.Trips.buttonFlight")}}
		</CustomButton>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.flight {
	background: url('../../../assets/images/Flight.png') no-repeat;
	background-size: cover;
	background-position: center;
}

</style>