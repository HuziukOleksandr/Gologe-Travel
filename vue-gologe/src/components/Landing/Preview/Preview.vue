<template>
	<!-- Preview wrapper Start -->
	<div
		class="background max-w-[1380px] w-full min-h-[600px] flex items-center"	
	>
		<!-- Preview Text wrapper Start -->
		<div 
			class="w-full flex flex-col items-center gap-[24px]"
		>
			<!-- Preview Sub Title Start -->
			<h2
				class="custom-text-5xl font-semibold text-white"
				
			>
				{{ $t('Landing.Preview.headerTop')}}
			</h2>
			<!-- Preview Sub Title End -->

			<!-- Preview Title Start -->
			<h1
				class="font-serrat font-semibold text-white uppercase"
				:class="getTitleStyles(locale)"
			>
				{{ $t('Landing.Preview.header')}}
			</h1>
			<!-- Preview Title End -->

			<!-- Preview Text Start -->
			<h3
				class="custom-text-2xl text-white"
			>
				{{ $t('Landing.Preview.headerBottom')}}
			</h3>
			<!-- Preview Text End -->
		</div>
		<!-- Preview Text wrapper Start -->
	</div>
	<!-- Preview wrapper End -->
</template>

<script setup lang="ts">
import { getTitleStyles } from "@/helpers/localization.ts"
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

</script>

<style scoped>

.background {
	background: url("../../../assets/images/background.png") no-repeat;
	background-position: center;
	background-size: cower;
}
</style>