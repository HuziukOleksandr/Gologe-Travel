<template>
	<div 
		class="max-w-[390px] w-[100%] h-[120px] p-[15px]
		 bg-white flex gap-[15px] items-center shadow-lg rounded-[15px]"
		v-for="card in props.name"
	>
		<img 
			:src="getImageUrlPng(card?.city)" 
			alt=""
			class="max-w-[90px] h-[90px]"
		>
		<div 
			class="flex flex-col gap-[5px]"
		>
			<h2
				class="custom-text-base text-green "
			>
				{{ card?.city}}, {{ card?.country }}
			</h2>
			<div
				class="font-serrat font-medium text-green text-sm flex items-center gap-[10px]"
			>
				{{ $t("Landing.Trips.flights") }}

				<div
					class="w-[3px] h-[3px] bg-green rounded-[50%]" 
				></div>

				{{ $t("Landing.Trips.hotels") }}

				<div 
					class="w-[3px] h-[3px] bg-green rounded-[50%]" 
				></div>

				{{ $t("Landing.Trips.resorts") }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getImageUrlPng } from "../../helpers/Helpers.ts"

const props = defineProps<{name?: object}> ()

</script>

<style scoped>

</style>