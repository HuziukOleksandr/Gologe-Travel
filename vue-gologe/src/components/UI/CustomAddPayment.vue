<template>
	<div
		class="max-w-[640px] w-full min-h-[750px]"
	>
		<CustomLogo 
			class="mb-[60px]"
		/>

		<CustomButton
			class="h-[24px] font-medium mb-[15px]"
			@click="$router.push({name:'Register'})"
		>
			<img 
				src="@/assets/images/chevron-down.svg" 
				alt="hotel"
				class="rotate-90"
			>
				{{ $t("AddPayment.back")}}
		</CustomButton>

		<h1
			class="custom-text-4xl font-bold mb-[16px]"
		>
			{{ $t("AddPayment.title") }}
		</h1>
		
		<h2	
			class="custom-text-base font-regular mb-[50px] text-gray"
		>
			{{ $t("AddPayment.subTitle") }}
		</h2>

		<div
			class="flex flex-col gap-[24px] mb-[40px]"
		>
			<CustomInput
				class="w-full h-[56px] font-serrat font-medium text-green"
				type="text"
				:placeHolder="$t('AddPayment.card')"
			>
				<template v-slot:input>
					{{ $t("AddPayment.card") }}
				</template>
			</CustomInput>

			<div
				class="flex justify-between"
			>
				<CustomInput
					class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
					type="date"
					:placeHolder="$t('AddPayment.date')"
				>
					<template v-slot:input>
						{{ $t("AddPayment.date") }}
					</template>
				</CustomInput>

				<CustomInput
					class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
					type="text"
					:placeHolder="$t('AddPayment.CVC')"
				>
					<template v-slot:input>
						{{ $t("AddPayment.CVC") }}
					</template>
				</CustomInput>
			</div>

			
			<CustomInput
				class="h-[56px] font-serrat font-medium text-green" 
				:placeHolder="$t('AddPayment.cardName')"
				
			>
				<template v-slot:input>
					{{ $t("AddPayment.cardName")}}
				</template>

			</CustomInput>

			<div
				class="relative w-full"
				@click="tripVisible = !tripVisible"
			>
				<CustomInput
					class="h-[56px] font-serrat font-medium text-green"
					:placeHolder="$t('AddPayment.from')"
				>
					<template v-slot:input>
						{{ $t("AddPayment.from")}}
					</template>

					<template v-slot:image>
						<img 
							src="@/assets/images/chevron-down.svg" 
							alt="arrowswap"
							class="h-[24px]"
						>
					</template>
				</CustomInput>

				<CustomInputList
					:dialogVisible="tripVisible"
					@close-window="tripVisible = !tripVisible"
				/>
			</div>

			<CustomCheckbox>
				{{ $t("AddPayment.checkbox") }}
			</CustomCheckbox>
		</div>

		<CustomButton
			class="w-full h-[48px] rounded-[4px] mb-[16px] justify-center custom-text-sm font-bold bg-buttonGreen text-green "
		>
			{{ $t("AddPayment.button") }}
		</CustomButton>

		<div
			class="mb-[40px] max-w-[530px] w-full h-[45px] flex mx-auto"
		>
			<span
				class="custom-text-xs font-regular text-center text-gray"
			>
				{{ $t("AddPayment.text") }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const tripVisible = ref<boolean>(false) 
</script>

<style scoped>

</style>