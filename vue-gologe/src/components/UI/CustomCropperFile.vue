<template>
	<cropper :src="img" @change="change" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

const img = ref<string>('https://images.pexels.com/photos/4323307/pexels-photo-4323307.jpeg');

interface ChangeEvent {
	coordinates: unknown;
	canvas: HTMLCanvasElement;
}

const change = ({ coordinates, canvas }: ChangeEvent) => {
	console.log(coordinates, canvas);
};
</script>
