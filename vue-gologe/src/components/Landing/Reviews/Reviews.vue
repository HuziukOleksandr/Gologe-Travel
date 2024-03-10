	<template>
	<div
		class="max-w-[1395px] w-[100%] min-h-[280px] flex flex-col gap-[40px]"
	>
		<div
			class="flex items-center justify-between"
		>
			<div 
				class="max-w-[1060px] w-[100%] flex flex-col gap-[15px]"
			>
				<h1
					class="h-[35px] font-serrat font-semibold text-[32px]"
				> 
					{{ $t("Landing.Review.title") }}
				</h1>
				<h2
					class="font-serrat font-regilar text-[16px] text-gray"
				>
					{{ $t("Landing.Review.sub-title") }}
				</h2>
			</div>

			<button 
				class="h-[40px] px-[16px] 
					border-[2px] rounded-[4px] border-buttonGreen"
			>	
				{{ $t("Landing.Review.button") }}
			</button>
		</div>

		<div
			class="flex flex-wrap justify-between"
		>
			<Card />
			<Card />
			<Card />
		</div>
	</div>

</template>

<script setup lang="ts">
import Card from './Card.vue'

</script>

<style scoped>

</style>