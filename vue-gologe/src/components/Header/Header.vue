<template>
	<div 
		class="max-w-[1440px] w-[100%] h-[90px] flex justify-between items-center px-[104px] m-auto"
	>
		<Navigation 
			:class="route.name !== 'Landing' ? 'text-green' : 'text-white'" 
		/>

		<img 
			src="../../assets/images/logo.svg" 
			alt="Logo"
			class="h-[36px]"
			v-if="route.name == 'Landing'"
		>

		<img 
			src="../../assets/images/logo-black.svg" 
			alt="Logo"
			class="h-[36px]"
			v-else
		>
		
		<div class="  flex items-center gap-[10px]">
			<button 
				:class="route.name !== 'Landing' ? 'text-green' : 'text-white'"
				class="font-serrat font-bold text-sm
				h-[45px] px-[24px]"
			>
			{{$t("Header.login")}}
			</button>

			<button
				:class="route.name !== 'Landing' ? 'text-white ' : 'text-green bg-white'"
				class="font-serrat font-bold text-sm
				h-[45px] px-[24px] rounded-[8px] bg-black"
			>
			{{$t("Header.signUp")}}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import Navigation from '../UI/Navigation.vue'
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