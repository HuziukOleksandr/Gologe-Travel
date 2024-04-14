<template>
	<div
		class="max-w-[375px] w-full h-[210px] border-dashed border-buttonGreen border-[2px] rounded-[16px] flex justify-center items-center cursor-pointer"
		@click="open"
	>
		<div
			class="flex flex-col gap-[18px] items-center"
		>
			<CustomButtom
				class="w-[48px] h-[48px] border-solid border-buttonGreen border-[2px] rounded-[50%]
					flex justify-center items-center"

			>
				<img src="@/assets/images/plus.svg" alt="">
			</CustomButtom>

			<h1
				class="custom-text-sm"
			>
				{{ $t("Account.Payment.addButton") }}
			</h1>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref }from 'vue'

const emit = defineEmits(['openWindow'])

const open = () => {
	emit('openWindow')
}

</script>

<style scoped>

</style>