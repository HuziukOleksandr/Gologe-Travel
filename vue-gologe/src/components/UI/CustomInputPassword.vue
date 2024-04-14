<template>
	<!-- Custom input for password Start -->
	<div
		class="wrapper_input"
	>
		<!-- Title Start -->
		<h1 	
			class="absolute top-[-12px] z-55 px-[10px]
			bg-background font-serrat text-green"
		>
			<!-- Slot for name input -->
			<slot name="input"></slot>
		</h1>
		<!-- Title End -->

		<!-- Input password -->
		<input 
			class="w-full h-full"
			:type="passwordFieldType"
			:placeholder="props.placeHolder"
			v-model="inputValue"
			@change="changeValue(inputValue)"
		>
		
		<!-- Image for close password -->
		<img 
			src="@/assets/images/password-close.svg" 
			alt="arrowswap"
			class="h-[24px] hover:cursor-pointer"
			@click="switchVisibility"
			v-if="passwordFieldType === 'password'"
		>

		<!-- Image for open password -->
		<img 
			src="@/assets/images/password-open.svg" 
			alt="arrowswap"
			class="h-[24px] hover:cursor-pointer"
			@click="switchVisibility"
			v-else
		>
	</div>
	<!-- Custom input for password End -->
</template>

<script setup lang="ts">

import { ref } from 'vue';
const props = defineProps<{placeHolder: string}>()

let inputValue= ref<string>('')

const emit = defineEmits(['inputValue'])

const changeValue = (value: string) => {
	emit('inputValue', value);
}

let passwordFieldType = ref<string>("password")
const switchVisibility = () => { passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password" }

</script>

<style scoped>

.wrapper_input {
	@apply
	flex gap-[10px] items-center 
	rounded-[4px] px-[15px] 
	border-2 border-gray border-solid 
	relative
}
</style>