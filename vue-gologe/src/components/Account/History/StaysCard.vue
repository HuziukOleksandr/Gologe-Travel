<template>
	<!-- Stays Card wrapper Start -->
	<div
		class="wrapper"
		v-for="elem in 10"
	>
		<!-- Container for all Column Start -->
		<div
			class="max-w-[800px] w-full flex gap-[32px] items-center"
		>
			<!-- Card Image -->
			<img 
				src="@/assets/images/CVK.png" 
				alt="Emirates"
			>

			<!-- Container for In and Out Start -->
			<div
				class="h-[52px] flex gap-[24px] items-center"
			>
				<!-- Container for Check-In Start -->
				<div
					class="max-w-[120px] w-full flex flex-col justify-between gap-[8px]"
				>
					<!-- Title Start -->
					<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						{{ $t("Account.History.check-In") }}
					</h1>
					<!-- Title End -->

					<!-- Text Start -->
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						Thur, Dec 8
					</h2>
					<!-- Text End -->
				</div>
				<!-- Container for Check-In End -->

				<!-- Dash Symbol Start -->
				<div 
					class="flex font-bold items-center"
				>
					&mdash;
				</div>
				<!-- Dash Symbol End -->

				<!-- Container for Check-Out Start -->
				<div
					class="max-w-[120px] w-full flex flex-col justify-between gap-[8px]"
				>	
					<!-- Title Start -->
					<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						{{ $t("Account.History.check-Out") }}
					</h1>
					<!-- Title End -->

					<!-- Text Start -->
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						Fri, Dec 10
					</h2>
					<!-- Text End -->
				</div>
				<!-- Container for Check-Out End -->
			</div>
			<!-- Container for In and Out End -->

			<!-- Dividing line Start -->
			<div 
				class="w-[1px] h-[48px] bg-gray"
			></div>
			<!-- Dividing line Start -->

			<!-- Container for Check-In-Time and Check-Out-Time Time Start -->
			<div
				class="max-w-[150px] w-full flex flex-col"
			>
				<!-- Container for Check-In-Time Start -->
				<div
					class="flex gap-[2px]"
				>
					<!-- Stays Check-In-Time Image -->
					<img 
						src="@/assets/images/history-flight.svg" 
						alt="history-flight"
					>

					<!-- Container for Text Start -->
					<div
						class="flex flex-col"
					>
						<!-- Title Start -->
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.check-In-Time") }}	
						</p>
						<!-- Title End -->

						<!-- Text Start -->
						<p
							class="custom-text-base font-bold"
						>
							12:00pm
						</p>
						<!-- Text Start -->
					</div>
					<!-- Container for Text End -->
				</div>
				<!-- Container for Сheck-In-Time End -->

				<!-- Container for Сheck-Out-Time Start -->
				<div
					class="max-w-[120px] w-full flex gap-[2px]"
				>
					<!-- Stays Сheck-Out-Time Image -->
					<img 
						src="@/assets/images/history-flight.svg" 
						alt="history-flight"
					>
					<!-- Container for Text Start -->
					<div
						class="flex flex-col"
					>
						<!-- Title Start -->
						<p
							class="custom-text-xs text-gray font-bold whitespace-nowrap ..."
						>
							{{ $t("Account.History.check-Out-Time") }}	
						</p>
						<!-- Title Start -->

						<!-- Text Start -->
						<p
							class="custom-text-base font-bold"
						>
							6:00pm
						</p>
						<!-- Text End -->
					</div>
					<!-- Container for Text End -->
				</div>
				<!-- Container for Сheck-Out-Time Start -->
			</div>
			<!-- Container for Check-In-Time and Check-Out-Time Time End -->

			<!-- Container for Room Time Start -->
			<div
				class="max-w-[128px] w-full flex flex-col self-start"
			>
				<!-- Container for Room Time Start -->
				<div
					class="flex gap-[2px]"
				>
					<!-- Stays Room Image -->
					<img 
						src="@/assets/images/history-gate.svg" 
						alt="history-gate"
					>
					<!-- Container for Room Start -->
					<div
						class="flex flex-col"
					>
						<!-- Title Start -->
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.room") }}	
						</p>
						<!-- Title End -->

						<!-- Text Start -->
						<p
							class="custom-text-base font-bold"
						>
							On arrival
						</p>
						<!-- Text End -->
					</div>
					<!-- Container for Room End -->
				</div>
				<!-- Container for Room Time End -->
			
			</div>
			<!-- Container for Room Time End -->
		</div>
		<!-- Container for all Column End -->

		<!-- Containers for placing buttons Start -->
		<div
			class="flex gap-[5px]"
		>
			<!-- Cover download button Start -->
			<CustomButton
				class="buttons custom-text-base bg-buttonGreen font-bold "
			>
				{{$t("Account.upload")}}
			</CustomButton>
			<!-- Cover download End -->

			<!-- Button 'Go to' Start -->
			<CustomButton
				class="buttons border-buttonGreen border-[2px]"
			>
				<!-- Button Image -->
				<img 
					src="@/assets/images/chevron-down.svg" 
					alt="hotel"
					class="-rotate-90 w-[16px]"
				>
			</CustomButton>
			<!-- Button 'Go to' End -->
		</div>
		<!-- Containers for placing buttons End -->
	</div>
	<!-- Stays Card wrapper End -->
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

.buttons {
	@apply 
	h-[50px] 
	rounded-[4px]
	px-[16px]
}

</style>