<template>
	<!-- All Inputs for Flight Frame -->
	<!-- Inputs wrapper Start -->
	<div
		class="w-full min-h-[56px] flex justify-between flex-wrap md:gap-[30px] md:justify-start"
	>
		<!-- Inputs "From/To" wrapper Start -->
		<div
			class="relative max-w-[325px] w-full"
			@click="fromVisible = !fromVisible"
		>
			<!-- Use Custom Input "From/To" Start -->
			<CustomInput
				class="w-full h-[56px] font-serrat font-medium text-green"
				type="text"
				placeHolder="Lahore - Karachi"
			>
				<!-- Use Stol for Text Start -->
				<template v-slot:input>
					{{ $t("Landing.QuickSearch.fromTo")}}
				</template>
				<!-- Use Stol for Text End -->

				<!-- Use Stol for Image Start -->
				<template v-slot:image>
					<!-- Image for Input -->
					<img 
						src="@/assets/images/arrowswap.svg" 
						alt="arrowswap"
						class="h-[24px]"
					>
				</template>
				<!-- Use Stol for Image End -->
			</CustomInput>
			<!-- Use Custom Input "From/To" End -->

			<!-- Use Custom Input List for input -->
			<CustomInputList
				:dialogVisible="fromVisible"
				@close-window="fromVisible = !fromVisible"
			/>
		</div>
		<!-- Inputs "From/To" wrapper Start -->

		<!-- Inputs "Trips" wrapper Start -->
		<div
			class="relative max-w-[140px] w-full"
			@click="tripVisible = !tripVisible"
		>
			<!-- Use Custom Input "Trip" Start -->
			<CustomInput
				class="h-[56px] font-serrat font-medium text-green"
				type="text"
				placeHolder="Return"
			>
				<template v-slot:input>
					{{ $t("Landing.QuickSearch.trip")}}
				</template>

				<!-- Use Stol for Image Start -->
				<template v-slot:image>
					<img 
						src="@/assets/images/chevron-down.svg" 
						alt="arrowswap"
						class="h-[24px]"
					>
				</template>
				<!-- Use Stol for Image End -->
			</CustomInput>
			<!-- Use Custom Input "Trip" End -->

			<!-- Use Custom Input List for input -->
			<CustomInputList
				:dialogVisible="tripVisible"
				@close-window="tripVisible = !tripVisible"
			/>
		</div>
		<!-- Inputs "Trips" wrapper End -->

		<!-- Inputs "Depart Return" wrapper Start -->
		<div
			class="relative max-w-[325px] w-full hover:cursor-pointer"
			@click="departVisible = !departVisible"

		>	
			<!-- Use Custom Input "Depart Return" Start -->
			<CustomInput
				class="h-[56px] font-serrat font-medium text-green"
				type="text"
				placeHolder="07 Nov 22 - 13 Nov 22"
			>
				<!-- Use Stol for Text Start -->
				<template v-slot:input>
					{{ $t("Landing.QuickSearch.departReturn")}}
				</template>
				<!-- Use Stol for Text End -->
			</CustomInput>
			<!-- Use Custom Input "Depart Return" Start -->

			<!-- Use Custom Input List for input -->
			<CustomInputList
				:dialogVisible="departVisible"
				@close-window="departVisible = !departVisible"
			/>
		</div>
		<!-- Inputs "Depart Return" wrapper End -->

		<!-- Inputs "Pasenger Class" wrapper Start -->
		<div
			class="relative max-w-[325px] w-full"
			@click="classVisible = !classVisible"
		>
			<!-- Use Custom Input "Pasenger Class" Start -->
			<CustomInput
				class="max-w-[325px] w-full h-[56px] font-serrat font-medium text-green"
				type="text"
				placeHolder="1 Passenger, Economy"
			>
				<!-- Use Stol for Text Start -->
				<template v-slot:input>
					{{ $t("Landing.QuickSearch.pasengerClass")}}
				</template>
				<!-- Use Stol for Text End -->
			</CustomInput>
			<!-- Use Custom Input "Pasenger Class" End -->

			<!-- Use Custom Input List for input -->
			<CustomInputList
				:dialogVisible="classVisible"
				@close-window="classVisible = !classVisible"
			/>
		</div>
		<!-- Inputs "Pasenger Class" wrapper End -->
	</div>
	<!-- Inputs wrapper End -->
	
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