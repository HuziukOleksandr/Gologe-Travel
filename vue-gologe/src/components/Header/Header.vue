<template>
	<div 
		class="max-w-[1440px] w-full h-[90px] m-auto
			flex justify-between items-center 
				lg:px-[104px] 
					md:px-[50px] 
						sm:px-[25px]"
	>
		<CustomNavigation 
			:class="route.name !== 'Landing' ? 'text-green' : 'text-white'" 
		/>
		
		<CustomLogo 
			class="sm:hidden"
		/>
		
		<div 
			class="flex items-center justify-beetwen gap-[8px]
				md:gap-[10px] 
					sm:gap-[5px]"
		>
			<CustomButton 
				:class="route.name !== 'Landing' ? 'text-green' : 'text-white'"
				class="custom-text-sm font-bold hidden h-[48px] px-[24px] lg:block"
				@click="$router.push({name:'Login'})"
			>
				{{$t("Header.login")}}
			</CustomButton>

			<CustomButton
				:class="route.name !== 'Landing' ? 'text-white bg-green' : 'text-green bg-white'"
				class="custom-text-sm font-bold hidden h-[48px] px-[24px] lg:block"
				@click="$router.push({name:'Register'})"
			>
				{{$t("Header.signUp")}}
			</CustomButton>

			<Localization />

			<img 
				src="../../assets/images/login-white.svg" 
				alt="login-white"
				class="w-[25px] lg:hidden"
				:class="route.name !== 'Landing' ? 'hidden' : 'block'"
			>
			
			<img 
				src="../../assets/images/login-black.svg" 
				alt="login-black"
				class="w-[25px] lg:hidden"
				:class="route.name !== 'Landing' ? 'block' : 'hidden'"
			>
		</div>
	</div>
</template>

<script setup lang="ts">

import Localization from './Localization.vue'

import { useRoute } from 'vue-router';
import { ref } from 'vue'

const route = useRoute();

</script>

<style scoped>

.logo:hover { 
    transition-duration: 500ms;
    cursor: pointer;
	transform: scale(1.02);
}

</style>