<template>
	<!-- Verify wrapper Start -->
	<div
		class="max-w-[1440px] w-full min-h-[900px] py-[50px] px-[104px] flex justify-between"
	>
		<!-- Aside wrapper Start -->
		<div
			class="max-w-[510px] w-full"
		>
			<!-- Use Custom Logo -->
			<CustomLogo 
				class="mb-[64px]"
			/>
			
			<!-- Use Custom Button "Back" Start -->
			<CustomButton
				class="h-[24px] font-medium mb-[15px]"
				@click="$router.push({name:'Login'})"
			>	
				<!-- Button Image -->
				<img 
					src="@/assets/images/chevron-down.svg" 
					alt="hotel"
					class="rotate-90"
				>
				{{ $t("Verify.buttonBack")}}
			</CustomButton>
			<!-- Use Custom Button "Back" End -->

			<!-- Title Start -->
			<h1
				class="custom-text-4xl font-bold mb-[16px]"
			>
				{{ $t("Verify.title") }}
			</h1>
			<!-- Title End -->

			<!-- SubTitle Start -->
			<h2	
				class="custom-text-base font-regular mb-[50px] text-gray"
			>
				{{ $t("Verify.subTitle") }}
			</h2>
			<!-- SubTitle End -->

			<!-- Wrapper input Start -->
			<div
				class="flex flex-col gap-[24px] mb-[15px]"
			>
				<!-- Use Custom Input Password "Code" Start -->
				<CustomInputPassword
					class="h-[56px] font-serrat font-medium text-green"
					:placeHolder="$t('Verify.code')"
				>
					<!-- Use slot for Name Start -->
					<template v-slot:input>
						{{ $t("Verify.code")}}
					</template>
					<!-- Use slot for Name End -->
				</CustomInputPassword>
				<!-- Use Custom Input Password "Code" End -->
			</div>
			<!-- Wrapper input End -->

			<!-- Wrapper for question and resend Start -->
			<div
				class="mb-[30px] w-full h-[20px] flex gap-[5px]"
			>
				<!-- Question Start -->
				<span
					class="custom-text-base font-bold"
				>
					{{ $t("Verify.question") }}
				</span>
				<!-- Question End -->

				<!-- Use Router Link Start -->
				<router-link 
					to="/register"
					class="custom-text-base font-bold text-red"
				>
					{{ $t("Verify.resend") }}
				</router-link>
				<!-- Use Router Link End -->
			</div>
			<!-- Wrapper for question and resend End -->

			<!-- Use Custom Button "Verify Password" Start -->
			<CustomButton
				class="w-full h-[48px] rounded-[4px] mb-[50px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
				@click="$router.push({name:'ChangePassword'})"
			>
				{{ $t("Verify.button") }}
			</CustomButton> 
			<!-- Use Custom Button "Verify Password" End -->
		</div>
		<!-- Aside wrapper End -->

		<!-- Wrapper for Carousel Start -->
		<div
			class="max-w-[620px] w-full relative flex"
		>
			<!-- Use Custom Carousel -->
			<CustomCarousel :slides="slides"/>
		</div>
		<!-- Wrapper for Carousel End -->
	</div>
	<!-- Verify wrapper End -->
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Slades Array for Carousel
const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped>

</style>