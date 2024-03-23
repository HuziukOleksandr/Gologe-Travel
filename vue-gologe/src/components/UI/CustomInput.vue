<template>
	<div
		class="flex gap-[10px] items-center rounded-[4px] px-[15px] 
		border-2 border-gray border-solid relative"
	>
		<h1 	
			class="absolute top-[-12px] z-55 px-[10px]
			bg-background font-serrat text-green"
		>
			<slot name="input"></slot>
		</h1>

		<input 
			class="w-full h-full"
			:type="props.type"
			:placeholder="props.placeHolder"
			v-model="inputValue"
			@change="changeValue(inputValue)"
		>
		
		<slot name="image"></slot>
		
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{type: string, placeHolder: string}>()

let inputValue= ref<string>('')

const emit = defineEmits(['inputValue'])

const changeValue = (value: string) => {
	emit('inputValue', value);
}


</script>