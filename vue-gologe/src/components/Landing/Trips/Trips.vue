<template>
	<div
		class="max-w-[1230px] w-full min-h-[280px] flex flex-col gap-[40px]"
	>
		<div
			class="flex items-center justify-between"
		>
			<div 
				class="max-w-[1060px] w-full flex flex-col gap-[15px]"
			>
				<h1
					class="custom-text-3xl font-semibold text-black"
				> 
					{{ $t("Landing.Trips.title") }}
				</h1>

				<h2
					class="custom-text-base font-regular text-gray"
				>
					{{ $t("Landing.Trips.sub-title") }}
				</h2>
			</div>

			<button 
				class="h-[40px] px-[16px]
					border-[2px] border-buttonGreen rounded-[4px]"
			>	
				{{ $t("Landing.Trips.button") }}
			</button>
		</div>

		<div
			class="flex flex-wrap gap-[30px]"
		>
			<Card 
				:name="cards"
			/>
		</div>

		<div
			class="w-full h-[560px] flex justify-between"
		>
			<Flight />
			<Hotel />
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import Hotel from './Hotel.vue'
import Flight from './Flight.vue'
import { ref } from 'vue'

const cards = ref([
	{city: 'Istanbul', country: 'Turkey'},
	{city: 'Sydney', country: 'Australia'},
	{city: 'Baku', country: 'Azerbaijan'},
	{city: 'Male', country: 'Maldives'},
	{city: 'Paris', country: 'France'},
	{city: 'New York', country: 'US'},
	{city: 'London', country: 'UK'},
	{city: 'Tokyo', country: 'Japan'},
	{city: 'Dubai', country: 'UAE'},
])

</script>

<style scoped>



</style>