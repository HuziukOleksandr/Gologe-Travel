<template>
	<div
		class="max-w-[1230px] w-full min=h-[280px] bg-white rounded-[15px] p-[32px]
		flex flex-col gap-[30px] shadow-2xl"
	>
		<div
			class="flex gap-[65px] mb-[30px]"
		>
			<Navigation />
		</div>

		<div 
			class="w-full min-h-[56px] flex justify-between flex-wrap md:gap-[30px] md:justify-start"
		>
			<Flight />	
		</div>

		<div
			class="h-[48px] flex self-end gap-[24px]"
		>
			<Buttons />
		</div>
	</div>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'
import Flight from './Flight.vue'
import Buttons from './Buttons.vue'

</script>