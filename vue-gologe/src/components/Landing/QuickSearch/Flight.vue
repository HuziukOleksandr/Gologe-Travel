<template>
	<div
		class="relative max-w-[325px] w-full"
		@click="fromVisible = !fromVisible"
	>
		<CustomInput
			class="w-full h-[56px] font-serrat font-medium text-green"
			type="text"
			placeHolder="Lahore - Karachi"
		>
			<template v-slot:input>
				{{ $t("Landing.QuickSearch.fromTo")}}
			</template>

			<template v-slot:image>
				<img 
					src="@/assets/images/arrowswap.svg" 
					alt="arrowswap"
					class="h-[24px]"
				>
			</template>
		</CustomInput>

		<CustomInputList
			:dialogVisible="fromVisible"
			@close-window="fromVisible = !fromVisible"
		/>
	</div>

	<div
		class="relative max-w-[140px] w-full"
		@click="tripVisible = !tripVisible"
	>
		<CustomInput
			class="h-[56px] font-serrat font-medium text-green"
			type="text"
			placeHolder="Return"
		>
			<template v-slot:input>
				{{ $t("Landing.QuickSearch.trip")}}
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

	<div
		class="relative max-w-[325px] w-full hover:cursor-pointer"
		@click="departVisible = !departVisible"

	>
		<CustomInput
			class="h-[56px] font-serrat font-medium text-green"
			type="text"
			placeHolder="07 Nov 22 - 13 Nov 22"
		>
			<template v-slot:input>
				{{ $t("Landing.QuickSearch.departReturn")}}
			</template>
		</CustomInput>

		<CustomInputList
			:dialogVisible="departVisible"
			@close-window="departVisible = !departVisible"
		/>
	</div>

	<div
		class="relative max-w-[325px] w-full"
		@click="classVisible = !classVisible"
	>
		<CustomInput
			class="max-w-[325px] w-full h-[56px] font-serrat font-medium text-green"
			type="text"
			placeHolder="1 Passenger, Economy"
		>
			<template v-slot:input>
				{{ $t("Landing.QuickSearch.pasengerClass")}}
			</template>
		</CustomInput>

		<CustomInputList
			:dialogVisible="classVisible"
			@close-window="classVisible = !classVisible"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fromVisible = ref<boolean>(false) 
const tripVisible = ref<boolean>(false) 
const departVisible = ref<boolean>(false) 
const classVisible = ref<boolean>(false)

</script>

<style scoped>

</style>