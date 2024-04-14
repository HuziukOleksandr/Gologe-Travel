<template>
	<h1
		class="custom-text-3xl font-bold mb-[16px]"
	>
		{{ $t("Account.History.title") }}
	</h1>
	<div
		class="w-full h-[80px] flex items-center shadow-xl rounded-[12px] mb-[32px]"
	>
		<CustomButton
			class="relative max-w-[624px] w-full h-full px-[24px] custom-text-base font-bold"
			:class="{ active: selectedTab === 'Flight' }"
			@click="changeTab('Flight')"
		>
			<img 
				src="@/assets/images/flight-black.svg" 
				alt="flight-black"
			>
			{{ $t("Account.History.flights") }}
		</CustomButton>	

		<div class="w-[1px] h-[48px] bg-gray"></div>

		<CustomButton
			class="relative max-w-[624px] w-full h-full px-[24px] custom-text-base font-bold"
			:class="{ active: selectedTab === 'Stays' }"
			@click="changeTab('Stays')"
		>
			<img 
				src="@/assets/images/hotel-black.svg" 
				alt="hotel-black"
			>
			{{ $t("Account.History.stays") }}
		</CustomButton>
	</div>
	
	<Stays v-if="selectedTab === 'Stays'"/>
	<Flight v-else/>
</template>

<script setup lang="ts">
import Flight from './FlightCard.vue'
import Stays from './StaysCard.vue'
import { ref } from 'vue'

const selectedTab = ref<string>("Flight")

const changeTab = (type: string) => {
	selectedTab.value = type
	
}

</script>

<style scoped>

.active::after {
	content: '';
	position: absolute;
	bottom:0;
	width: 560px;
	border-bottom: solid 3px #8DD3BB;
}

</style>