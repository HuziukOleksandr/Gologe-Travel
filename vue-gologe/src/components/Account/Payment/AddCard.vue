<template>
	<!-- Add Payment wrapper Start -->
	<div
		class="add_wrapper"
		@click="open"
	>
		<!-- Content wrapper Start -->
		<div
			class="flex flex-col gap-[18px] items-center"
		>
			<!-- Add Button Start -->
			<CustomButtom
				class="button"
			>
				<!-- Button Image -->
				<img 
					src="@/assets/images/plus.svg" 
					alt="plus"
				>
			</CustomButtom>
			<!-- Add Button End -->

			<!-- Button Title Start -->
			<h1
				class="custom-text-sm"
			>
				{{ $t("Account.Payment.addButton") }}
			</h1>
			<!-- Button Title End -->
		</div>
		<!-- Content wrapper End -->
	</div>
	<!-- Add Payment wrapper End -->
</template>

<script setup lang="ts">
import { ref }from 'vue'

const emit = defineEmits(['openWindow'])

const open = () => {
	emit('openWindow')
}

</script>

<style scoped>

.add_wrapper {
	@apply
	max-w-[375px] w-full h-[210px] 
	border-dashed border-buttonGreen border-[2px] rounded-[16px] 
	flex justify-center items-center cursor-pointer
}

.button {
	@apply
	w-[48px] h-[48px] 
	border-solid border-buttonGreen border-[2px] rounded-[50%]
	flex justify-center items-center
}

</style>