<template>
	<!-- Header wrapper Start -->
	<div 
		class="wrapper_header"
	>
		<!-- Use Navigation UI Component -->
		<CustomNavigation 
			:class="route.name !== 'Landing' ? 'text-green' : 'text-white'" 
		/>
		
		<!-- Use Logo UI Component -->
		<CustomLogo 
			class="sm:hidden"
		/>
		
		<!-- Header-Content wrapper Start -->
		<div 
			class="wrapper_content"
		>

			<!-- Use UI Button component, Login button Start -->
			<CustomButton 
				:class="route.name !== 'Landing' ? 'text-green' : 'text-white'"
				class="custom-text-sm font-bold hidden h-[48px] px-[24px] lg:block"
				@click="$router.push({name:'Login'})"
			>
				{{$t("Header.login")}}
			</CustomButton>
			<!-- Use UI Button component, Login button End -->

			<!-- Use UI Button component, Register button Start -->
			<CustomButton
				:class="route.name !== 'Landing' ? 'text-white bg-green' : 'text-green bg-white'"
				class="custom-text-sm font-bold hidden h-[48px] px-[24px] lg:block"
				@click="$router.push({name:'Register'})"
			>
				{{$t("Header.signUp")}}
			</CustomButton>
			<!-- Use UI Button component, Register button End -->

			<!-- Use Localization Component -->
			<Localization />

			<!-- Image for sm media -->
			<img 
				src="@/assets/images/login-white.svg" 
				alt="login-white"
				class="w-[25px] lg:hidden"
				:class="route.name !== 'Landing' ? 'hidden' : 'block'"
			>

			<!-- Dark Image for sm media -->
			<img 
				src="@/assets/images/login-black.svg" 
				alt="login-black"
				class="w-[25px] lg:hidden"
				:class="route.name !== 'Landing' ? 'block' : 'hidden'"
			>
		</div>
		<!-- Header-Content wrapper End -->
	</div>
	<!-- Header wrapper End -->
</template>

<script setup lang="ts">
import Localization from './Localization.vue'
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>

.wrapper_header {
	@apply
	max-w-[1440px] w-full h-[90px] m-auto
	flex justify-between items-center 
	lg:px-[104px] 
	md:px-[50px] 
	sm:px-[25px]
}

.wrapper_content {
	@apply
	flex items-center justify-between gap-[8px]
	md:gap-[10px] 
	sm:gap-[5px]
}

.logo:hover { 
    transition-duration: 500ms;
    cursor: pointer;
	transform: scale(1.02);
}

</style>