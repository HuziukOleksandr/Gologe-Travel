<template>
	<div 
		class="relative"
	>
		<div 
			class="flex items-center px-[7px] py-[10px]"
		>
			<img
				:src="getImageUrlSvg(locale)"
				alt="Flag uk" 
				class="w-[25px] rounded-[4px] transition duration-200 hover:cursor-pointer hover:scale-105"
				@click="toggleVisible = !toggleVisible"
			>
		</div>
		
		<CustomLocalization  
			:dialogVisible="toggleVisible"
			@close-window="close"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getImageUrlSvg } from '../../helpers/Helpers.ts'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const toggleVisible = ref<boolean>(false) 

const close = () => {
	toggleVisible.value = !toggleVisible
}

</script>