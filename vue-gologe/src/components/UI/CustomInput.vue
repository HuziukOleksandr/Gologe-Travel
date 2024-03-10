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
			:type="props.type"
			class="w-[100%] h-[100%]"
			placeholder="Lahore - Karachi"
		>
		
		<slot name="image"></slot>
		
	</div>
</template>

<script setup lang="ts">

const props = defineProps<{type: string}>()

</script>