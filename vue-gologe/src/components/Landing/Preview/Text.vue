<template>
	<div 
		class="w-full flex flex-col items-center gap-[24px]"
	>
		<h2
			class="custom-text-5xl font-semibold text-white"
			
		>
			{{ $t('Landing.Preview.headerTop')}}
		</h2>
		<h1
			class="font-serrat font-semibold text-white uppercase"
			:class="getTitleStyles(locale)"
		>
			{{ $t('Landing.Preview.header')}}
		</h1>
		<h3
			class="custom-text-2xl text-white"
		>
			{{ $t('Landing.Preview.headerBottom')}}
		</h3>
	</div>
</template>

<script setup lang="ts">
import { getTitleStyles } from "@/helpers/Localization.ts"
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

</script>