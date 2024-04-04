<template>
	<TransitionGroup>
		<div
			class="absolute h-[400px] mt-[10px] bg-white w-full
				border-2 border-gray border-solid
					rounded-[4px] opacity-100 z-[99]"
			v-if="props.dialogVisible"
			v-click-away="onClickAway"
		>
		</div>
	</TransitionGroup>
</template>

<script setup lang="ts">

const props = defineProps<{ dialogVisible: boolean }>()
const emit = defineEmits(['closeWindow'])

const onClickAway = () => {
	emit('closeWindow')
}

</script>

<style scoped>

</style>