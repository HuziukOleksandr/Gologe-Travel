<template>
	<div 
		class="m-auto max-w-[1440px] w-[100%] h-[90px] lg:px-[104px] 
			flex justify-between items-center md:px-[50px] sm:px-[25px]"
	>
		<CustomNavigation 
			:class="route.name !== 'Landing' ? 'text-green' : 'text-white'" 
		/>
		<CustomLogo 
			class="sm:hidden "
		/>
		
		<div 
			class="flex items-center justify-beetwen md:gap-[10px] sm:gap-[5px]"
		>
			<CustomButton 
				:class="route.name !== 'Landing' ? 'text-green' : 'text-white'"
				class="hidden lg:block"
				@click="$router.push({name:'Login'})"
			>
				{{$t("Header.login")}}
			</CustomButton>

			<CustomButton
				:class="route.name !== 'Landing' ? 'text-white bg-green' : 'text-green bg-white'"
				class="hidden lg:block"
				@click="$router.push({name:'Register'})"
			>
				{{$t("Header.signUp")}}
			</CustomButton>

			<Localization />

			<img 
				src="../../assets/images/login-white.svg" 
				alt=""
				class="w-[25px] lg:hidden"
				:class="route.name !== 'Landing' ? 'hidden' : 'block'"
			>
			
			<img 
				src="../../assets/images/login-black.svg" 
				alt=""
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
let text = ref<string>();

if ( route.name !== 'Landing' ){
	text.value = 'text-button';
}
else {
	text.value = 'text-white';
};
</script>

<style scoped>

.logo:hover { 

    transition-duration: 500ms;
    cursor: pointer;
	transform: scale(1.02);
}

</style>