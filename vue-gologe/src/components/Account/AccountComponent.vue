<template>
	<div
		class="max-w-[1230px] w-full min-h-[700px] pt-[50px] flex flex-col gap-[40px] mb-[120px]"
	>
		<div
			class="w-full h-[350px] rounded-[12px] flex relative mb-[165px]"
		>
			<img 
				class="w-full h-full"
				src="@/assets/images/John-background.png"
				alt=""
			>
			<CustomUploadFile
				class="absolute right-[25px] bottom-[25px] h-[50px] bg-buttonGreen rounded-[8px]"
			>
				{{$t("Account.upload")}}
			</CustomUploadFile>
			<div
				class="absolute left-[50%] translate-x-[-50%] top-[275px] 
					max-w-[185px] w-full h-[240px] 
						flex flex-col items-center"
			>
				<div
					class="w-[160px] h-[160px] rounded-[50%] mb-[24px] 
						border-solid border-red border-[3px] 
							flex justify-end items-end"
				>
					
					<CustomButton
						class="p-[10px] bg-red rounded-[50%] flex justify-center items-center"
					>
						<img src="@/assets/images/Pen.svg" alt="">
					</CustomButton>
				</div>
				<h1
					class="custom-text-2xl font-bold mb-[8px]"
				>
				John Doe.
				</h1>
				<h2
					class="custom-text-base text-gray"
				>
				john.doe@gmail.com
				</h2>
			</div>
		</div>
		<div
			class="w-full flex flex-col gap-[40px] rounded-[16px] shadow-xl"
		>
			<div
				class="w-full h-[80px] flex justify-between items-center "
			>
				<CustomButton
					class="custom-text-base relative font-bold
						max-w-[360px] w-full h-full px-[24px]"
					:class="{ active: selectedTab === 'Account' }"
					@click="changeTab('Account')"
				>
					{{ $t("Account.account") }}
				</CustomButton>
				<div class="w-[1px] h-[48px] bg-gray"></div>
				<CustomButton
					class="custom-text-base relative font-bold  
						max-w-[360px] w-full h-full px-[24px]"
					:class="{ active: selectedTab === 'History' }"
					@click="changeTab('History')"
				>
					{{ $t("Account.history") }}
				</CustomButton>
				<div class="w-[1px] h-[48px] bg-gray"></div>
				<CustomButton
					class="custom-text-base relative font-bold
						max-w-[360px] w-full h-full px-[24px]"
					:class="{ active: selectedTab === 'Payment' }"
					@click="changeTab('Payment')"
				>
					{{ $t("Account.payment") }}
				</CustomButton>
			</div>
		</div>
		<History v-if="selectedTab === 'History'" />
		<Payment v-else-if="selectedTab === 'Payment'" />
		<Info v-else="selectedTab === 'Account'" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Info from './Info.vue'
import History from './History.vue'
import Payment from './Payment.vue'

const selectedTab = ref<string>("Account")

const changeTab = (type: string) => {
	selectedTab.value = type
	
}
</script>

<style scoped>

.active::after {
	content: '';
	position: absolute;
	bottom: 0;
	width: 215px;
	border-bottom: solid 3px #8DD3BB;
}

</style>