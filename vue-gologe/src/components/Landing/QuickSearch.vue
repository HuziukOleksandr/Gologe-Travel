<template>
	<div
		class="max-w-[1230px] w-full min=h-[280px] bg-white rounded-[15px] p-[32px]
		flex flex-col gap-[20px] shadow-2xl"
	>
		<div
			class="flex gap-[65px]"
		>
			<CustomButtonWithImage
				class="h-[25px] font-bold"
			>
				<img 
					src="./../../assets/images/flight-black.svg" 
					alt="flight"
				>
				{{ $t("Landing.QuickSearch.flights")}}
			</CustomButtonWithImage>

			<CustomButtonWithImage
				class="h-[25px] font-bold"
			>
				<img 
					src="./../../assets/images/hotel-black.svg" 
					alt="hotel"
				>
				{{ $t("Landing.QuickSearch.stays")}}
			</CustomButtonWithImage>
		</div>

		<div 
			class="w-[100%] min-h-[56px] flex justify-between flex-wrap md:gap-[30px] md:justify-start"
		>
			<div
				class="relative max-w-[325px] w-full"
				@click="fromVisible = !fromVisible"
				
			>
				<CustomInput
					class="w-[100%] h-[56px] font-serrat text-green font-medium	"
					
				>
					<template v-slot:input>
						{{ $t("Landing.QuickSearch.fromTo")}}
					</template>

					<template v-slot:image>
						<img 
							src="../../assets/images/arrowswap.svg" 
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
					class="h-[56px] font-serrat text-green font-medium"
				>
					<template v-slot:input>
						{{ $t("Landing.QuickSearch.trip")}}
					</template>

					<template v-slot:image>
						<img 
							src="../../assets/images/chevron-down.svg" 
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
				class="relative max-w-[325px] w-full "
			>
				<CustomInput
					class="h-[56px] font-serrat text-green font-medium"
					@click="departVisible = !departVisible"
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
			>
				<CustomInput
					class="max-w-[325px] w-[100%] h-[56px] font-serrat text-green font-medium"
					@click="classVisible = !classVisible"
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
		</div>

		<div
			class="h-[48px] flex self-end gap-[24px]"
		>
			<CustomButtonWithImage
				class="h-[48px] p-[16px] font-medium"
			>
				<img 
					src="./../../assets/images/add-promo.svg" 
					alt="hotel"
				>
					{{ $t("Landing.QuickSearch.addPromoCode")}}
			</CustomButtonWithImage>

			<CustomButtonWithImage
				class="h-[48px] p-[16px] font-medium bg-button"
			>
				<img 
					src="./../../assets/images/show-flights.svg" 
					alt="hotel"
				>
					{{ $t("Landing.QuickSearch.buttonFlight")}}
			</CustomButtonWithImage>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fromVisible = ref<boolean>(false) 
const tripVisible = ref<boolean>(false) 
const departVisible = ref<boolean>(false) 
const classVisible = ref<boolean>(false) 

</script>