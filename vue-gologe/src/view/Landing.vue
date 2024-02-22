<template>
	<div 
		class="max-w-[1440px] w-[100%] min-h-[500px] m-auto my-[30px]" 
	>
		<Header
			class="max-w-[1380px] w-[100%] z-50 relative"
		/>
		<Preview 
			class="absolute top-[30px] left-1/2 transform -translate-x-1/2
			w-[100%] h-auto z-0"
		/>
		<div 
			class="w-[100%] flex flex-col items-center relative top-[50px] z-50 gap-[24px]"
		>
			<h2
				class="text-5xl font-serrat font-semibold text-white"
			>
			{{ $t('Landing.Preview.headerTop')}}
			</h2>
			<h1
				class="text-8xl font-serrat font-semibold text-white uppercase"
			>
			{{ $t('Landing.Preview.header')}}
			</h1>
			<h3
				class="text-2xl font-serrat font-bold text-white"
			>
			{{ $t('Landing.Preview.headerBottom')}}
			</h3>
		</div>
	</div>
</template>

<script setup lang="ts">
import Preview from '../components/Landing/Preview.vue'
import Header from '../components/Header/Header.vue'

</script>

<style scoped>

</style>