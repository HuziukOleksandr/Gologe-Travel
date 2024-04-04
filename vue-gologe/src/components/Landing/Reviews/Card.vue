<template>
	<div
		class="max-w-[425px] w-full h-[585px] bg-white rounded-[20px]
			shadow-2xl p-[24px] flex flex-col justify-between"
		v-for="review in props.reviews"
	>
		<h1
			class="custom-text-2xl font-bold text-green"
		>
			{{ review?.title }}
		</h1>
		<div
			class="flex flex-col"
		>
			<p
				class="h-[22px] font-serrat font-regular text-sm text-grey
				truncate ..."
			>
			{{ review?.text }}
			</p>
			<button
				class="custom-text-base font-bold text-green flex self-end"
			>
				{{ $t("Landing.Review.more")}}
			</button>
		</div>

		<div
			class="w-[100%] h-[45px] flex gap-[10px]"
		>
			<div
				v-for="index in +review.rate"
			>
				<img 
					src="@/assets/images/star.svg" 
					:alt="`${index}`"
				>
			</div>

			<div
				v-for="index in (5-review?.rate)"
			>
				<img 
					src="@/assets/images/star.svg" 
					:alt="`${index}`"
					class="opacity-35"
				>
			</div>
		</div>

		<div
			class="flex flex-col gap-[5px]"
		>
			<h1
				class="custom-text-sm font-bold text-green"
			>
				{{review?.name}}
			</h1>
			<p
				class="custom-text-sm text-gray"
			>
				{{ review?.subTitle}}
			</p>
		</div>

		<div
			class="flex gap-[10px]"
		>
			<img 
				src="@/assets/images/google.svg" 
				alt="google"
			>
			<p
				class="font-serrat font-bold text-[14px] text-grey"
			>
				Google
			</p>
		</div>

		<img 
			:src="getImageUrlPng(review?.picture)" 
			:alt="review?.picture"
		>
	</div>
</template>

<script setup lang="ts">
import { getImageUrlPng } from '@/helpers/helpers.ts'
import type Reviews  from '@/types/reviews-types.ts'

const props = withDefaults(
  defineProps<{
    reviews: Reviews []
  }>(),
  {}
);

</script>

<style scoped>

</style>