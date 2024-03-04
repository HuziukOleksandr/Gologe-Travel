<template>
	<div 
		class="h-[90px] flex gap-[30px] items-center"
	>
		<router-link  
			to="/flight"
			class="custom-text-sm h-[20px] flex gap-[4px]  whitespace-nowrap"
		>
			<img 
				src="../../assets/images/flight.svg" 
				alt="flight"
				v-if="route.name == 'Landing'"
			>
			<img 
				src="../../assets/images/flight-black.svg" 
				alt="flight"
				v-else
			>
				{{ $t("Navigation.flight") }}
		</router-link>

		<router-link   
			to="/hotel"
			class="custom-text-sm h-[20px] flex gap-[4px] whitespace-nowrap"
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
				{{ $t("Navigation.hotel") }}
		</router-link>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>