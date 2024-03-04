<template>
	<div
		class="w-[100%] h-[420px] m-auto mt-[150px] pb-[64px]
			bg-button  flex flex-col justify-between "
	>
		<Subscribe
			class="mt-[-150px]"
		/>

		<div
			class="max-w-[1230px] w-[100%] h-[140px] mx-auto flex justify-between"
		>
			<div
				class="w-[120px] flex flex-col gap-[25px]"	
			>
				<img 
					src="../../assets/images/logo-footer.svg" 
					alt="logo"
					class="logo"
				>
				<div
					class="flex justify-between"
				>
					<img 
						src="../../assets/images/facebook.svg" 
						alt="facebook"
					>
					<img 
						src="../../assets/images/twitter.svg" 
						alt="twitter"
					>
					<img 
						src="../../assets/images/youtube.svg" 
						alt="youtube"
					>
					<img 
						src="../../assets/images/instagram.svg" 
						alt="instagram"
					>
				</div>
			</div>
			<div
				class="max-w-[970px] w-[100%] flex justify-between"
			>
				<Destination />
				<Activities />
				<Blogs />
				<AboutUs />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Subscribe from './Subscribe.vue'
import Destination from './Destination.vue'
import Activities from './Activities.vue'
import Blogs from './Blogs.vue'
import AboutUs from './AboutUs.vue'
</script>

<style scoped>

.logo:hover { 

	transition-duration: 500ms;
	cursor: pointer;
	transform: scale(1.02);

}

</style>