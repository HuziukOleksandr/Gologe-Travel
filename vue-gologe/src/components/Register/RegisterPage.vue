<template>
	<div
		class="max-w-[1440px] w-full min-h-[900px] p-[104px] flex justify-between"
	>
		<div
			class="max-w-[490px] w-full h-[816px] relative flex"
		>
			<CustomCarousel :slides="slides"/>
			
		</div>

		<div
			class="max-w-[640px] w-full min-h-[750px]"
		>
			<CustomLogo 
				class="mb-[60px]"
			/>
			<h1
				class="custom-text-4xl font-bold mb-[16px]"
			>
				{{ $t("Register.title") }}
			</h1>
			
			<h2	
				class="custom-text-base font-regular mb-[50px] text-gray"
			>
				{{ $t("Register.subTitle") }}
			</h2>

			<div
				class="flex flex-col gap-[24px] mb-[40px]"
			>
				<div
					class="flex justify-between"
				>
					<CustomInput
						class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
						type="text"
						:placeHolder="$t('Register.first')"
					>
						<template v-slot:input>
							{{ $t("Register.first") }}
						</template>
					</CustomInput>

					<CustomInput
						class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
						type="text"
						:placeHolder="$t('Register.last')"
					>
						<template v-slot:input>
							{{ $t("Register.last") }}
						</template>
					</CustomInput>
				</div>

				<div
					class="flex justify-between"
				>
					<CustomInput
						class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
						type="text"
						:placeHolder="$t('Register.email')"
					>
						<template v-slot:input>
							{{ $t("Register.email") }}
						</template>
					</CustomInput>

					<CustomInput
						class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
						type="text"
						:placeHolder="$t('Register.phone')"
					>
						<template v-slot:input>
							{{ $t("Register.phone") }}
						</template>
					</CustomInput>
				</div>

				<CustomInput
					class="h-[56px] font-serrat font-medium text-green" 
					type="password"
					:placeHolder="$t('Register.password')"
				>
					<template v-slot:input>
						{{ $t("Register.password")}}
					</template>

					<template v-slot:image>
						<img 
							src="../../assets/images/forgot-close.svg" 
							alt="arrowswap"
							class="h-[24px]"
						>
					</template>
				</CustomInput>

				<CustomInput
					class="h-[56px] font-serrat font-medium text-green" 
					type="password"
					:placeHolder="$t('Register.confirm')"
					
				>
					<template v-slot:input>
						{{ $t("Register.confirm") }}
					</template>

					<template v-slot:image>
						<img 
							src="../../assets/images/forgot-close.svg" 
							alt="arrowswap"
							class="h-[24px]"
						>
					</template>
				</CustomInput>

				<CustomCheckbox>
					{{ $t("Register.inputStart") }}

					<router-link 
						to="#"
						class="text-red"
					>
						{{ $t("Register.terms") }}
					</router-link>
					
					{{ $t("Register.inputAnd") }}

					<router-link 
						to="#"
						class="text-red"
					>
						{{ $t("Register.privacy") }}
					</router-link>
				</CustomCheckbox>
			</div>

			<CustomButton
				class="w-full h-[48px] rounded-[4px] mb-[16px] justify-center custom-text-sm font-bold bg-buttonGreen text-green "
			>
				{{ $t("Register.title") }}
			</CustomButton>

			<div
				class="mb-[40px] w-full h-[20px] flex justify-center gap-[5px]"
			>
				<span
					class="custom-text-base font-bold"
				>
					{{ $t("Register.question") }}
				</span>
				<router-link 
					to="/login"
					class="custom-text-base font-bold text-red"
				>
					{{ $t("Register.login") }}
				</router-link>
			</div>

			<div
				class="w-full h-[18px] flex items-center mb-[40px] "
			>
				<hr class="grow text-gray">
				<div
					class="font-serrat font-[400] text-sm px-[10px] grow-0 text-gray bg-background"
				>
					{{ $t("Register.orSignUpWith") }}
				</div>
				<hr class="grow text-gray">
			</div>

			<RegisterWith />
		</div>
		
	</div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import RegisterWith from './RegisterWith.vue'

const slides = ref(["register-slide-one", "register-slide-two", "register-slide-one"]);

</script>

<style scoped>

</style>