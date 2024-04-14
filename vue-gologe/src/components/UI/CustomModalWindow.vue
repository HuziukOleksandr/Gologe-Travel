<template>
	<!-- Custom modal component wrapper Start -->
	<div
		class="background fixed w-full h-screen top-0 flex justify-center owerflow-hidden" 
	>
		<!-- Content wrapper Start-->
		<div
			class="sticky w-[640px] h-[740px] bg-white "
			v-click-away="onClickAway"
		>
		
		</div>
		<!-- Content wrapper End-->
	</div>
	<!-- Custom modal component wrapper End -->
</template>

<script setup lang="ts">

// Emit for Close
const emit = defineEmits(['closeWindow'])

const onClickAway = () => {
	emit('closeWindow')
}

</script>

<style scoped>

.background {
	background-color: rgba(0, 0, 0, 0.5);
}

</style>