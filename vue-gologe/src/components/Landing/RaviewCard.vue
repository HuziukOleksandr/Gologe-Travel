<template>
	<div
		class="max-w-[425px] w-[100%] h-[585px] bg-white rounded-[20px]
		shadow-2xl p-[24px] flex flex-col justify-between"
	>
		<h1
			class="custom-text-2xl text-green"
		>
		“A real sense of community, nurtured”
		</h1>
		<div
			class="flex flex-col"
		>
			<p
				class="h-[22px] font-serrat font-regular text-sm text-grey
				truncate ..."
			>
			Really appreciate the help and support from the staff during
			these tough times. Shoutout to Katie for helping me always,
			even when I was out of the country. And always available
			when needed.
			</p>
			<button
				class="custom-text-base text-green flex self-end"
			>
				{{ $t("Landing.Review.more")}}
			</button>
		</div>

		<div
			class="w-[100%] h-[45px] flex gap-[10px]"
		>
			<div
				v-for="index in rates"
			>
				<img 
					src="../../assets/images/star.svg" 
					alt="star"
				>
			</div>

			<div
				v-for="index in (5-rates)"
				class=""
			>
				<img 
					src="../../assets/images/star.svg" 
					alt="star"
					class="opacity-35"
				>
			</div>
		</div>

		<div
			class="flex flex-col gap-[5px]"
		>
			<h1
				class="font-serrat font-bold text-[14px] text-green"
			>
				Olga
			</h1>
			<p
				class="font-serrat text-[14px] text-grey"
			>
				Weave Studios – Kai Tak
			</p>
		</div>

		<div
			class="flex gap-[10px]"
		>
			<img src="../../assets/images/google.svg" alt="google">
			<p
				class="font-serrat font-bold text-[14px] text-grey"
			>
			Google
			</p>
		</div>

		<img src="../../assets/images/Olga.png" alt="Olga">
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rates = ref<number>(3)

</script>

<style scoped>

</style>