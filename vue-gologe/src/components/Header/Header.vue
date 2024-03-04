<template>
	<div 
		class="m-auto max-w-[1440px] w-[100%] h-[90px] px-[104px] 
			flex justify-between items-center"
	>
		<CustomNavigation 
			:class="route.name !== 'Landing' ? 'text-green' : 'text-white'" 
		/>
		<CustomLogo/>
		
		<div 
			class="  flex items-center gap-[10px]"
		>
			<CustomButton 
				:class="route.name !== 'Landing' ? 'text-green' : 'text-white'"
			>
				{{$t("Header.login")}}
			</CustomButton>

			<CustomButton
				:class="route.name !== 'Landing' ? 'text-white bg-green' : 'text-green bg-white'"
			>
				{{$t("Header.signUp")}}
			</CustomButton>
			
			<Localization />
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