<template>
	<div
		class="max-w-[1230px] w-[100%] h-[280px] bg-white rounded-[15px] p-[32px]
		flex flex-col justify-between shadow-2xl"
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
			class="w-[100%] h-[56px] flex justify-between"
		>
			<CustomInput
				class="max-w-[325px] w-[100%] h-[56px] font-serrat text-green font-medium"
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

			<CustomInput
				class="max-w-[140px] w-[100%] h-[56px] font-serrat text-green font-medium"
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

			<CustomInput
				class="max-w-[325px] w-[100%] h-[56px] font-serrat text-green font-medium"
			>
				<template v-slot:input>
					{{ $t("Landing.QuickSearch.departReturn")}}
				</template>
			</CustomInput>

			<CustomInput
				class="max-w-[325px] w-[100%] h-[56px] font-serrat text-green font-medium"
			>
				<template v-slot:input>
					{{ $t("Landing.QuickSearch.pasengerClass")}}
				</template>
			</CustomInput>

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

</script>