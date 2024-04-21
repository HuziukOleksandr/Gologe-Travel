<template>
	<!-- Flight Card wrapper Start -->
	<div
		class="wrapper"
		v-for="elen in 10"
	>
		<!-- Container for all Column Start -->
		<div
			class="max-w-[800px] w-full flex gap-[32px] items-center"
		>
			<!-- Card Image -->
			<img 
				src="@/assets/images/Emirates.png" 
				alt="Emirates"
			>

			<!-- Container for From and To Start -->
			<div
				class="flex gap-[24px]"
			>
				<!-- Container for From Start -->
				<div
					class="container__from-to"
				>
					<!-- Title Start -->
					<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						Newark(EWR)
					</h1>
					<!-- Title End -->

					<!-- Text Start -->
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						12:00 pm
					</h2>
					<!-- Text End -->
				</div>
				<!-- Container for From End -->
				
				<!-- Dash Symbol Start -->
				<div
					class="flex items-center font-bold"
				>
					&mdash;
				</div>
				<!-- Dash Symbol End -->

				<!-- Container for To Start -->
				<div
					class="container__from-to"
				>	
					<!-- Title Start -->
					<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						Newark(EWR)
					</h1>
					<!-- Title End -->

					<!-- Text Start -->
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						12:00 pm
					</h2>
					<!-- Text End -->
				</div>
				<!-- Container for To End -->
			</div>
			<!-- Container for From and To End -->

			<!-- Dividing line Start -->
			<div 
				class="w-[1px] h-[48px] bg-gray"
			></div>
			<!-- Dividing line Start -->

			<!-- Container for Date and Flight Time Start -->
			<div
				class="max-w-[180px] w-full flex flex-col justify-between"
			>
				<!-- Flight Date Container Start -->
				<div
					class="flex gap-[2px]"
				>
					<!-- Flight Date Image -->
					<img 
						src="@/assets/images/date.svg" 
						alt="date"
					>

					<!-- Container for Text Start -->
					<div
						class="flex flex-col"
					>
						<!-- Title for Date Start -->
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.date") }}	
						</p>
						<!-- Title for Date End -->

						<!-- Text for Date Start -->
						<p
							class="custom-text-base font-bold"
						>
							12-11-22
						</p>
						<!-- Text for Date End -->

					</div>
					<!-- Container for Text End -->
				</div>
				<!-- Flight Date Container End -->

				<!-- Flight Time Container Start -->
				<div
					class="flex gap-[2px]"
				>
					<!-- Flight Time Image -->
					<img 
						src="@/assets/images/history-flight.svg" 
						alt="history-flight"
					>

					<!-- Container for Time Start -->
					<div
						class="flex flex-col"
					>
						<!-- Title for Time Start -->
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.time") }}	
						</p>
						<!-- Title for Time End -->

						<!-- Text for Time Start -->
						<p
							class="custom-text-base font-bold"
						>
							6:00
						</p>
						<!-- Text for Time End -->
					</div>
					<!-- Container for Time End -->
				</div>
				<!-- Flight Time Container End -->
			</div>
			<!-- Container for Date and Flight Time End -->

			<!-- Container for Gate and Seat Start -->
			<div
				class="max-w-[280px] w-full flex flex-col justify-between"
			>
				<!-- Flight Gate Container Start -->
				<div
					class="flex gap-[2px]"
				>
					<!-- Flight Gate Image -->
					<img 
						src="@/assets/images/history-gate.svg" 
						alt="history-gate"
					>

					<!-- Containet for text Start -->
					<div
						class="flex flex-col"
					>
						<!-- Title for Gate Start -->
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.gate") }}	
						</p>
						<!-- Title for Gate End -->

						<!-- Text for Gate Start -->
						<p
							class="custom-text-base font-bold"
						>
							A12
						</p>
						<!-- Text for Gate End -->
					</div>
					<!-- Containet for text End -->
				</div>
				<!-- Flight Gate Container End -->

				<!-- Flight Seat Number Container Start -->
				<div
					class="flex gap-[2px]"
				>
					<!-- Flight Seat Image -->
					<img 
						src="@/assets/images/history-seat.svg" 
						alt="history-seat"
					>

					<!-- Containet for text Start -->
					<div
						class="flex flex-col"
					>
						<!-- Title for Seat Start -->
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.seat") }}	
						</p>
						<!-- Title for Seat End -->

						<!-- Text for Seat Start -->
						<p
							class="custom-text-base font-bold"
						>
							125
						</p>
						<!-- Text for Seat End -->
					</div>
					<!-- Containet for text End -->
				</div>
				<!-- Flight Seat Number Container End -->
			</div>
			<!-- Container for Gate and Seat End -->
		</div>
		<!-- Container for all Column End -->

		<!-- Containers for placing buttons Start -->
		<div
			class="flex gap-[5px]"
		>
			<!-- Cover download button Start -->
			<CustomButton
				class="custom-text-base buttons bg-buttonGreen font-bold"
			>
				{{$t("Account.upload")}}
			</CustomButton>
			<!-- Cover download End -->

			<!-- Button 'Go to' Start -->
			<CustomButton
				class="buttons border-buttonGreen border-[2px] "
			>
				<!-- Button Image -->
				<img
					src="@/assets/images/chevron-down.svg" 
					alt="chevron-down"
					class="-rotate-90 w-[16px]"
				>
			</CustomButton>
			<!-- Button 'Go to' End -->
		</div>
		<!-- Containers for placing buttons End -->
	</div>
	<!-- Flight Card wrapper End -->
</template>

<script setup lang="ts">

</script>

<style scoped>

.wrapper {
	@apply
	w-full h-[144px] 
	flex justify-between items-center 
	px-[24px] rounded-[16px] 
	shadow-xl
}

.container__from-to {
	@apply 
	max-w-[140px] w-full 
	flex flex-col justify-between gap-[8px]
}

.buttons {
	@apply 
	h-[50px] 
	rounded-[4px]
	px-[16px]
}


</style>