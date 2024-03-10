<template>
	<div 
		class="navigation h-[90px] flex gap-[30px] items-center"
	>
		<router-link  
			to="/flight"
			class="custom-text-sm h-full flex items-center gap-[4px] whitespace-nowrap"
			:class="route.name == 'Flight' ? 'border-b-button border-b-[4px]': ''"
		>
			<img 
				src="../../assets/images/flight.svg" 
				alt="flight"
				v-if="route.name == 'Landing'"
			>
			<img 
				src="../../assets/images/flight-black.svg" 
				alt="flight"
				class="w-[25px]"
				v-else
			>
			<div
				class="hidden lg:block"
			>
				{{ $t("Navigation.flight") }}
			</div>
		</router-link>

		<router-link   
			to="/hotel"
			class="custom-text-sm h-full flex items-center gap-[4px] whitespace-nowrap"
			:class="route.name == 'Hotel' ? 'border-b-buttonGreen border-b-[4px]': ''"
		>
			<img 
				src="../../assets/images/hotel.svg" 
				alt="hotel"
				v-if="route.name == 'Landing'"
			>
			<img 
				src="../../assets/images/hotel-black.svg" 
				alt="hotel"
				v-else
			>
			<div
				class="hidden lg:block"
			>
				{{ $t("Navigation.hotel") }}
			</div>
		</router-link>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>

.active-bar {
	border-bottom: 4px solid #122112;
	
}

</style>