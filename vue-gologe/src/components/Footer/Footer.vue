<template>
	<div
		class="w-[100%] min-h-[420px] m-auto mt-[150px] pb-[64px]
			bg-buttonGreen  flex flex-col justify-between 
				md:px-[50px] 
					sm:px-[25px]"
	>
		<Subscribe
			class="mt-[-150px]"
		/>

		<div
			class="max-w-[1230px] w-full min-h-[140px] mx-auto py-[50px] flex justify-between gap-[20px]
				lg:gap-[100px] 
					sm:flex-col sm:items-center"
		>
			<div
				class="min-w-[120px] flex flex-col gap-[25px] 
					sm:flex-row sm:gap-[5px]"	
			>
				<img 
					src="../../assets/images/logo-footer.svg" 
					alt="logo"
					class="logo"
					@click="$router.push({name:'Landing'})"
				>
				<div
					class="min-w-[100px] flex justify-between 
						sm:gap-[4px] sm:flex-wrap sm:h-[55px]"
				>
					<img 
						src="../../assets/images/facebook.svg" 
						alt="facebook"
						class="w-[24px]"
					>
					<img 
						src="../../assets/images/twitter.svg" 
						alt="twitter"
						class="w-[24px]"
					>
					<img 
						src="../../assets/images/youtube.svg" 
						alt="youtube"
						class="w-[24px]"
					>
					<img 
						src="../../assets/images/instagram.svg" 
						alt="instagram"
						class="w-[24px]"
					>
				</div>
			</div>
			<div
				class="w-full flex justify-between flex-wrap gap-[20px] 
					sm:justify-center sm:hidden"
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