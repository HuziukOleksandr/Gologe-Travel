<template>
	<div
		class="w-full h-[144px] flex justify-between items-center px-[24px] rounded-[16px] shadow-xl"
		v-for="elem in 10"
	>
		<div
			class="max-w-[800px] w-full flex gap-[32px] items-center"
		>
			<img 
				src="@/assets/images/CVK.png" 
				alt="Emirates"
			>
			<div
				class="h-[52px] flex gap-[24px] items-center"
			>
				<div
					class="max-w-[120px] w-full flex flex-col justify-between gap-[8px]"
				>
					<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						{{ $t("Account.History.check-In") }}
					</h1>
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						Thur, Dec 8
					</h2>
				</div>

				<div class="flex font-bold items-center">&mdash;</div>

				<div
					class="max-w-[120px] w-full flex flex-col justify-between gap-[8px]"
				>	
					<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						{{ $t("Account.History.check-Out") }}
					</h1>
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						Fri, Dec 10
					</h2>
				</div>
			</div>
			<div class="w-[1px] h-[48px] bg-gray"></div>
			<div
				class="max-w-[150px] w-full flex flex-col"
			>
				<div
					class="flex gap-[2px]"
				>
					<img 
						src="@/assets/images/history-flight.svg" 
						alt="history-flight"
					>
					<div
						class="flex flex-col"
					>
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.check-In-Time") }}	
						</p>

						<p
							class="custom-text-base font-bold"
						>
							12:00pm
						</p>
					</div>
				</div>
				<div
					class="max-w-[120px] w-full flex gap-[2px]"
				>
					<img 
						src="@/assets/images/history-flight.svg" 
						alt="history-flight"
					>
					<div
						class="flex flex-col"
					>
						<div
							class="custom-text-xs text-gray font-bold whitespace-nowrap ..."
						>
							{{ $t("Account.History.check-Out-Time") }}	
						</div>

						<p
							class="custom-text-base font-bold"
						>
							6:00pm
						</p>
					</div>
				</div>
			</div>

			<div
				class="max-w-[128px] w-full flex flex-col self-start"
			>
				<div
					class="flex gap-[2px]"
				>
					<img 
						src="@/assets/images/history-gate.svg" 
						alt="history-gate"
					>
					<div
						class="flex flex-col"
					>
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.room") }}	
						</p>

						<p
							class="custom-text-base font-bold"
						>
							On arrival
						</p>
					</div>
				</div>
				
			</div>
		</div>
		<div
			class="flex gap-[5px]"
		>

		<CustomButton
			class="h-[50px] bg-buttonGreen rounded-[4px] custom-text-base font-bold px-[16px]"
		>
			{{$t("Account.upload")}}
		</CustomButton>

		<CustomButton
			class="h-[50px] border-buttonGreen border-[2px] rounded-[4px] px-[16px]"
		>
			<img 
				src="@/assets/images/chevron-down.svg" 
				alt="hotel"
				class="-rotate-90 w-[16px]"
			>
		</CustomButton>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>