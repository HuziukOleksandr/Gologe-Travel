<template>
	<h1
		class="custom-text-3xl font-bold mb-[16px]"
	>
		{{ $t("Account.Payment.title") }}
	</h1>
	<div
		class="w-full flex gap-[24px] px-[24px] py-[32px] rounded-[16px] shadow-xl"
	>
		<Card />
		<Add
			@open-window="open"
		/>
	</div>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import Add from './AddCard.vue'

const emit = defineEmits(['openWindow'])

const open = () => {
	emit('openWindow')
}

</script>

<style scoped>

</style>