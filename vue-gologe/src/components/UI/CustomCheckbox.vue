<template>
	<form
		class="flex items-center gap-[5px]"
	>
		<input 
			id="checkboxId" 
			type="checkbox"
			class="w-[20px] h-[20px] rounded-[4px] border-2 border-green border-solid cursor-pointer"
		>
		<label 
			for="checkboxId"
			class="custom-text-base font-bold cursor-pointer flex items-center gap-[5px]"
		>
			<img 
				src="@/assets/images/checked.svg" 
				alt="checked"
				class="w-[20px] h-[20px]"
			>
			<slot></slot>
		</label>
	</form>
</template>

<script setup lang="ts">

</script>

<style scoped>

#checkboxId {
	display: none;
}
#checkboxId:checked {
	display: block;
}
#checkboxId:checked~label img {
	
	display: none;
}

</style>