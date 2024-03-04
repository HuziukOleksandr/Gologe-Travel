<template>
	<div
		class="max-w-[1230px] w-[100%] min-h-[280px] flex flex-col gap-[40px]"
	>
		<div
			class="flex items-center justify-between"
		>
			<div 
				class="max-w-[1060px] w-[100%] flex  flex-col gap-[15px]"
			>
				<h1
					class="h-[35px]font-serrat font-semibold text-[32px]"
				> 
				{{ $t("Landing.Trips.title") }}
				</h1>
				<h2
					class="font-serrat font-regilar text-[16px] text=gray"
				>
				{{ $t("Landing.Trips.sub-title") }}
				</h2>
			</div>

			<button 
				class="h-[40px] px-[16px] 
					border-[2px] border-button rounded-[4px]"
			>	
			{{ $t("Landing.Trips.button") }}
			</button>
		</div>

		<div
			class="flex flex-wrap gap-[30px]"
		>
			<TripCard 
				:name="cards"
			/>
		</div>

		<div
			class="w-[100%] h-[560px] flex justify-between"
		>
			<div
				class="flight max-w-[605px] w-[100%] h-[560px] 
					flex flex-col items-center justify-end gap-[10px] 
						px-[100px] py-[25px] rounded-[20px]"
			>
				<h1
					class="h-[50px] font-serrat font-bold text-[40px] text-white"
				>
					{{ $t("Landing.Trips.flights") }}
				</h1>
				<h2
					class="font-serrat font-regular text-base text-grey text-center"
				>
					{{ $t("Landing.Trips.textFlight") }}
				</h2>
				<CustomButtonWithImage
					class="h-[48px] p-[16px] font-medium bg-button"
				>
					<img 
						src="./../../assets/images/show-flights.svg" 
						alt="hotel"
					>
						{{ $t("Landing.Trips.buttonFlight")}}
				</CustomButtonWithImage>
			</div>

			<div
				class="hotel max-w-[605px] w-[100%] h-[560px] 
					flex flex-col items-center justify-end gap-[10px] 
						px-[100px] py-[25px] rounded-[20px]"
			>
				<h1
					class="h-[50px] font-serrat font-bold text-[40px] text-white"
				>
					{{ $t("Landing.Trips.hotels") }}
				</h1>
				<h2
					class="font-serrat font-regular text-base text-grey text-center"
				>
					{{ $t("Landing.Trips.textHotel") }}
				</h2>
				<CustomButtonWithImage
					class="h-[48px] p-[16px] font-medium bg-button"
				>
					<img 
						src="./../../assets/images/show-flights.svg" 
						alt="hotel"
					>
						{{ $t("Landing.Trips.buttonHotel")}}
				</CustomButtonWithImage>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TripCard from './TripCard.vue'
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

.flight {
	background: url('../../assets/images/Flight.png') no-repeat;
	background-size: cover;
	background-position: center;
}

.hotel {
	background: url('../../assets/images/Hotel.png') no-repeat;
	background-size: cover;
	background-position: center;
}

</style>