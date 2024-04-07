<template>
	<div
		class="max-w-[1440px] w-full min-h-[900px] py-[50px] px-[104px] flex justify-between"
	>
	<div
			class="max-w-[510px] w-full"
		>
			<CustomLogo 
				class="mb-[64px]"
			/>
			
			<CustomButton
				class="h-[24px] font-medium mb-[15px]"
				@click="$router.push({name:'Login'})"
			>
				<img 
					src="@/assets/images/chevron-down.svg" 
					alt="hotel"
					class="rotate-90"
				>
					{{ $t("Verify.buttonBack")}}
			</CustomButton>


			<h1
				class="custom-text-4xl font-bold mb-[16px]"
			>
				{{ $t("Verify.title") }}
			</h1>

			<h2	
				class="custom-text-base font-regular mb-[50px] text-gray"
			>
				{{ $t("Verify.subTitle") }}
			</h2>

			<div
				class="flex flex-col gap-[24px] mb-[15px]"
			>
				<CustomInputPassword
					class="h-[56px] font-serrat font-medium text-green"
					:placeHolder="$t('Verify.code')"
				>
					<template v-slot:input>
						{{ $t("Verify.code")}}
					</template>
				</CustomInputPassword>
			</div>

			<div
				class="mb-[30px] w-full h-[20px] flex gap-[5px]"
			>
				<span
					class="custom-text-base font-bold"
				>
					{{ $t("Verify.question") }}
				</span>
				<router-link 
					to="/register"
					class="custom-text-base font-bold text-red"
				>
					{{ $t("Verify.resend") }}
				</router-link>
			</div>
			<CustomButton
				class="w-full h-[48px] rounded-[4px] mb-[50px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
				@click="$router.push({name:'ChangePassword'})"
			>
				{{ $t("Verify.button") }}
			</CustomButton> 
		</div>

		<div
			class="max-w-[620px] w-full relative flex"
		>
			<CustomCarousel :slides="slides"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped>

</style>