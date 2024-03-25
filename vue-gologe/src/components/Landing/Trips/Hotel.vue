<template>
	<div
		class="hotel max-w-[605px] w-full h-[560px] 
			flex flex-col items-center justify-end gap-[10px] 
				px-[100px] py-[25px] rounded-[20px]"
	>
		<h1
			class="custom-text-4xl font-bold text-white"
		>
			{{ $t("Landing.Trips.hotels") }}
		</h1>
		
		<h2
			class="custom-text-base font-medium text-center text-background"
		>
			{{ $t("Landing.Trips.textHotel") }}
		</h2>

		<CustomButton
			class="custom-text-sm font-medium h-[48px] p-[16px] bg-buttonGreen"
			@click="$router.push({name:'Hotel'})"
		>
			<img 
				src="../../../assets/images/show-flights.svg" 
				alt="hotel"
			>
				{{ $t("Landing.Trips.buttonHotel")}}
		</CustomButton>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.hotel {
	background: url('../../../assets/images/Hotel.png') no-repeat;
	background-size: cover;
	background-position: center;
}

</style>