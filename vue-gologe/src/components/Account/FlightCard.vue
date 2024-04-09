<template>
	<div
		class="w-full h-[144px] flex justify-between items-center px-[24px] rounded-[16px] shadow-xl"
		v-for="elen in 10"
	>
		<div
			class="flex gap-[32px] items-center"
		>
			<img 
				src="@/assets/images/Emirates.png" 
				alt="Emirates"
			>
			<div
				class="flex gap-[24px]"
			>
				<div
					class="max-w-[120px] w-full flex flex-col justify-between gap-[8px]"
				>
					<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						Newark(EWR)
					</h1>
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						12:00 pm
					</h2>
				</div>

				<div class="flex items-center font-bold">&mdash;</div>

				<div
					class="max-w-[120px] w-full flex flex-col justify-between gap-[8px]"
				>	
				<h1
						class="custom-text-base text-gray font-bold truncate ..."
					>
						Newark(EWR)
					</h1>
					<h2
						class="custom-text-xl font-bold truncate ..."
					>
						12:00 pm
					</h2>
				</div>
			</div>
			<div class="w-[1px] h-[48px] bg-gray"></div>
			<div
				class="max-w-[180px] w-full flex flex-col justify-between"
			>
				<div
					class="flex gap-[2px]"
				>
					<img 
						src="@/assets/images/date.svg" 
						alt="date"
					>
					<div
						class="flex flex-col"
					>
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.date") }}	
						</p>

						<p
							class="custom-text-base font-bold"
						>
							12-11-22
						</p>
					</div>
				</div>
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
							{{ $t("Account.History.time") }}	
						</p>

						<p
							class="custom-text-base font-bold"
						>
							6:00
						</p>
					</div>
				</div>
			</div>

			<div
				class="max-w-[180px] w-full flex flex-col justify-between"
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
							{{ $t("Account.History.gate") }}	
						</p>

						<p
							class="custom-text-base font-bold"
						>
							A12
						</p>
					</div>
				</div>
				<div
					class="flex gap-[2px]"
				>
					<img 
						src="@/assets/images/history-seat.svg" 
						alt="history-seat"
					>
					<div
						class="flex flex-col"
					>
						<p
							class="custom-text-xs text-gray font-bold"
						>
							{{ $t("Account.History.time") }}	
						</p>

						<p
							class="custom-text-base font-bold"
						>
							125
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