<template>
	<div
		class="w-full flex flex-col gap-[32px] px-[24px] py-[32px] rounded-[16px] shadow-xl"
	>	
		<div
			class="w-full h-[52px]  flex justify-between"
		>
			<div
				class="flex flex-col justify-between"
			>
				<h1
					class="custom-text-base font-bold text-gray"
				>
				{{ $t("Account.Account.name") }}
				</h1>
				<h2
					class="custom-text-xl font-bold"
				>
				John Doe
				</h2>
			</div>

			<CustomButton
				class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[32px]"
			>
				<img src="@/assets/images/change.svg" alt="">
				{{ $t('Account.Account.change') }}
			</CustomButton>
		</div>
		<div
			class="w-full h-[52px]  flex justify-between"
		>
			<div
				class="flex flex-col justify-between"
			>
				<h1
					class="custom-text-base font-bold text-gray"
				>
				{{ $t("Account.Account.email") }}
				</h1>
				<h2
					class="custom-text-xl font-bold"
				>
				john.doe@gmail.com
				</h2>
			</div>
			<div
				class="flex gap-[8px]"
			>
				<CustomButton
					class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[16px]"
				>
					<img src="@/assets/images/add.svg" alt="">
					{{ $t('Account.Account.addEmail') }}
				</CustomButton>
				<CustomButton
					class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[32px]"
				>
					<img src="@/assets/images/change.svg" alt="">
					{{ $t('Account.Account.change') }}
				</CustomButton>
			</div>
		</div>
		<div
			class="w-full h-[52px]  flex justify-between"
		>
			<div
				class="flex flex-col justify-between"
			>
				<h1
					class="custom-text-base font-bold text-gray"
				>
				{{ $t("Account.Account.password") }}
				</h1>
				<h2
					class="custom-text-xl font-bold"
				>
				************
				</h2>
			</div>
			
			<CustomButton
				class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[32px]"
			>
				<img src="@/assets/images/change.svg" alt="">
				{{ $t('Account.Account.change') }}
			</CustomButton>
		</div>
		<div
			class="w-full h-[52px]  flex justify-between"
		>
			<div
				class="flex flex-col justify-between"
			>
				<h1
					class="custom-text-base font-bold text-gray"
				>
				{{ $t("Account.Account.number") }}
				</h1>
				<h2
					class="custom-text-xl font-bold"
				>
				+1 000-000-0000
				</h2>
			</div>
			
			<CustomButton
				class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[32px]"
			>
				<img src="@/assets/images/change.svg" alt="">
				{{ $t('Account.Account.change') }}
			</CustomButton>
		</div>
		<div
			class="w-full h-[52px]  flex justify-between"
		>
			<div
				class="flex flex-col justify-between"
			>
				<h1
					class="custom-text-base font-bold text-gray"
				>
				{{ $t("Account.Account.address") }}
				</h1>
				<h2
					class="custom-text-xl font-bold"
				>
				St 32 main downtown, Los Angeles, California, USA
				</h2>
			</div>
			
			<CustomButton
				class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[32px]"
			>
				<img src="@/assets/images/change.svg" alt="">
				{{ $t('Account.Account.change') }}
			</CustomButton>
		</div>
		<div
			class="w-full h-[52px]  flex justify-between"
		>
			<div
				class="flex flex-col justify-between"
			>
				<h1
					class="custom-text-base font-bold text-gray"
				>
				{{ $t("Account.Account.birth") }}
				</h1>
				<h2
					class="custom-text-xl font-bold"
				>
				01-01-1992
				</h2>
			</div>
			
			<CustomButton
				class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[32px]"
			>
				<img src="@/assets/images/change.svg" alt="">
				{{ $t('Account.Account.change') }}
			</CustomButton>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>