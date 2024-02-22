<template>
	<TransitionGroup>
		<div 
			class="flex flex-col p-[7px] gap-[10px] rounded-[5px] w-[39px] absolute " 
			v-if="props.dialogVisible"
		>
			<img 
				src="../../assets/images/EN.svg" 
				alt="Flag uk"
				class="w-[25px] rounded-[4px] hover:cursor-pointer hover:scale-105 transition duration-200"
				@click="close('EN')"
				v-if="locale != 'EN'"
			>

			<img 
				src="../../assets/images/UA.svg" 
				alt="Flag uk" 
				class="w-[25px] rounded-[4px] hover:cursor-pointer hover:scale-105 transition duration-200"
				@click="close('UA')"
				v-else
			>
		</div>
    </TransitionGroup>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const props = defineProps<{ dialogVisible: boolean }>()
let language = ref('EN');
const { locale } = useI18n()

localStorage.setItem('language', language.value)
const emit = defineEmits(['closeWindow'])

const close = (item: string) => {
	emit('closeWindow')
	language.value = item
	change(item)
}

const change = (item: string) => {
	localStorage.setItem('language', item)
	if(locale.value != item){
		locale.value = item
	}
};

</script>

<style scoped>

.v-enter-active, .v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

</style>