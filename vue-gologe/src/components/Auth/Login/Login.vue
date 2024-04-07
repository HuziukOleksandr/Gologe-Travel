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
				{{ $t("Login.title") }}
			</h1>

			<h2	
				class="custom-text-base font-regular mb-[50px] text-gray"
			>
				{{ $t("Login.subTitle") }}
			</h2>

			<div
				class="flex flex-col gap-[24px] mb-[40px]"
			>
				<CustomInput
					class="h-[56px] font-serrat font-medium text-green"
					type="email"
					:placeHolder="$t('Login.email')"
					@inputValue="loginForm"
				>
					<template v-slot:input>
						{{ $t("Login.email")}}
					</template>
				</CustomInput>

				<CustomInputPassword
					class="h-[56px] font-serrat font-medium text-green" 
					:placeHolder="$t('Login.password')"
				>
					<template v-slot:input>
						{{ $t("Login.password")}}
					</template>
				</CustomInputPassword>

				<div
					class="w-full h-[25px] flex justify-between "
				>
					<CustomCheckbox>
						{{ $t("Login.remember") }}
					</CustomCheckbox>

					<router-link 
						to="/login/forgotpassword/"
						class="custom-text-base font-bold text-red"
					>
						{{ $t("Login.forgot") }}
					</router-link>
				</div>
			</div>

			<CustomButton
				class="w-full h-[48px] rounded-[4px] mb-[16px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
				@click="$router.push({name:'Account'})"
			>
				{{ $t("Login.title") }}
			</CustomButton> 

			<div
				class="mb-[40px] w-full h-[20px] flex justify-center gap-[5px]"
			>
				<span
					class="custom-text-base font-bold"
				>
					{{ $t("Login.question") }}
				</span>
				<router-link 
					to="/register"
					class="custom-text-base font-bold text-red"
				>
					{{ $t("Login.signUp") }}
				</router-link>
			</div>
			
			<div
				class="w-full h-[18px] flex items-center mb-[40px] "
			>
				<hr class="grow text-gray">
				<div
					class="font-serrat font-[400] text-sm px-[10px] grow-0 text-gray bg-background"
				>
					{{ $t("Login.orLoginWith") }}
				</div>
				<hr class="grow text-gray">
			</div>
			
			<LoginWith />
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
import LoginWith from './LoginWith.vue'

const slides = ref(["login-one", "login-two", "login-three"]);

let login = ref<string>()

const loginForm = (value: string) => {
	login.value = value
}

</script>

<style scoped>

</style>