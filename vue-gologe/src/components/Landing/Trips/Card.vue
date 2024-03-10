<template>
	<div 
		class="max-w-[390px] w-full h-[120px] p-[15px] bg-white
			flex items-center gap-[15px] shadow-lg rounded-[15px]"
		v-for="card in props.name"
	>
		<img 
			:src="getImageUrlPng(card?.city)" 
			:alt="card?.city"
			class="max-w-[90px] h-[90px]"
		>
		<div 
			class="flex flex-col gap-[5px]"
		>
			<h2
				class="custom-text-base font-bold text-gray "
			>
				{{ card?.city}}, {{ card?.country }}
			</h2>
			<div
				class="custom-text-sm font-medium flex items-center gap-[10px] text-green"
			>
				{{ $t("Landing.Trips.flights") }}

				<hr class="w-[4px] h-[4px] rounded-[50%] bg-green">

				{{ $t("Landing.Trips.hotels") }}

				<hr class="w-[4px] h-[4px] rounded-[50%] bg-green">

				{{ $t("Landing.Trips.resorts") }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getImageUrlPng } from "../../../helpers/Helpers.ts"

const props = defineProps<{name?: object}> ()

</script>

<style scoped>

</style>