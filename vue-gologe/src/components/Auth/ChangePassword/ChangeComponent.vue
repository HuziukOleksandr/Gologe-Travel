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
				
			<h1
				class="custom-text-4xl font-bold mb-[16px]"
			>
				{{ $t("ChangePassword.title") }}
			</h1>

			<h2	
				class="custom-text-base font-regular mb-[50px] text-gray"
			>
				{{ $t("ChangePassword.subTitle") }}
			</h2>

			<div
				class="flex flex-col gap-[24px] mb-[30px]"
			>
				<CustomInputPassword
					class="h-[56px] font-serrat font-medium text-green"
					:placeHolder="$t('ChangePassword.create')"
				>
					<template v-slot:input>
						{{ $t("ChangePassword.create")}}
					</template>
				</CustomInputPassword>

				<CustomInputPassword
					class="h-[56px] font-serrat font-medium text-green"
					:placeHolder="$t('ChangePassword.re-enter')"
				>
					<template v-slot:input>
						{{ $t("ChangePassword.re-enter")}}
					</template>
				</CustomInputPassword>
			</div>

			<CustomButton
				class="w-full h-[48px] rounded-[4px] mb-[50px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
			>
				{{ $t("ChangePassword.button") }}
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