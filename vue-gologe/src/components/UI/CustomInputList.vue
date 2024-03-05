<template>
	<TransitionGroup>
		<div
			class="absolute w-[325px] h-[500px] mt-[20px] bg-white  
				border-2 border-grey border-solid
					rounded-[4px] opacity-100"
			v-if="props.dialogVisible"
		>

		</div>
	</TransitionGroup>
</template>

<script setup lang="ts">


const props = defineProps<{ dialogVisible: boolean }>()

</script>

<style scoped>

</style>