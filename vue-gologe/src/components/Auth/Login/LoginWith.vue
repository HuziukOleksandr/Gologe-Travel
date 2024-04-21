<template>
	<!-- Login With wrapper Start -->
	<div 
		class="flex justify-between"
	>
		<!-- Use Custom Button "Facebook" Start -->
		<CustomButton
			class="buttons"
		>
			<!-- Button Image -->
			<img 
				src="@/assets/images/facebook-login.svg" 
				alt="facebook"
			>
		</CustomButton>
		<!-- Use Custom Button "Facebook" End -->

		<!-- Use Custom Button "Google" Start -->
		<CustomButton
			class="buttons"
		>
			<!-- Google Image -->
			<img 
				src="@/assets/images/google-login.svg" 
				alt="google"
			>
		</CustomButton> 
		<!-- Use Custom Button "Google" End -->

		<!-- Use Custom Button "Apple" Start -->
		<CustomButton
			class="buttons"
		>
			<!-- Apple Image -->
			<img 
				src="@/assets/images/apple-login.svg" 
				alt="apple"
			>
		</CustomButton>
		<!-- Use Custom Button "Apple" End -->
	</div>
	<!-- Login With wrapper End -->
</template>

<script setup lang="ts">

</script>

<style scoped>

.buttons {
	@apply
	h-[48px] px-[68px] border-[2px] border-solid border-buttonGreen
}

</style>