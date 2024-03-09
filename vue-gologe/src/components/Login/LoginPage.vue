<template>
	<div
		class="max-w-[1440px] w-full min-h-[900px] p-[104px] flex justify-between"
	>
		<div
			class="max-w-[510px] w-full "
		>
			<CustomLogo 
				class="mb-[64px]"
			/>

			<h1
				class="custom-text-4xl mb-[16px]"
			>
				{{ $t("Login.title") }}
			</h1>
			<h2	
				class="font-serrat text-base font-[400] text-grey mb-[48px]"
			>
				{{ $t("Login.subTitle") }}
			</h2>

			<div
				class="flex flex-col gap-[24px] mb-[40px]"
			>
				<CustomInput
					class="h-[56px] font-serrat text-green font-medium"
					:props="email"
				>
					<template v-slot:input>
						{{ $t("Login.email")}}
					</template>
				</CustomInput>

				<CustomInput
					class="h-[56px] font-serrat text-green font-medium " type="password"
					:props="password"
				>
					<template v-slot:input>
						{{ $t("Login.password")}}
					</template>

					<template v-slot:image>
						<img 
							src="../../assets/images/forgot-close.svg" 
							alt="arrowswap"
							class="h-[24px]"
						>
					</template>
				</CustomInput>
			</div>

			<CustomButtonWithImage
				class="w-full h-[48px] mb-[16px] bg-button justify-center font-bold text-green text-sm"
			>
				{{ $t("Login.title") }}
			</CustomButtonWithImage> 
			
			
			<div
				class="w-full h-[18px] flex-col items-center  mb-[40px]"
			>
				<div
					class="w-full h-[1px] bg-grey "
				></div>
				<div
					class="font-serrat font-[400] text-sm text-grey  bg-white px-[10px]"
				>
					{{ $t("Login.orLoginWith") }}
				</div>
				
			</div>
			<div 
				class="flex justify-between"
			>
				<CustomButtonWithImage
					class="h-[48px] px-[68px]  justify-center border-[2px] border-solid border-button"
				>
					<img 
						src="../../assets/images/facebook-login.svg" 
						alt=""
					>
				</CustomButtonWithImage>

				<CustomButtonWithImage
					class="h-[48px] px-[68px]  justify-center border-[2px] border-solid border-button"
				>
					<img 
						src="../../assets/images/google-login.svg" 
						alt=""
					>
				</CustomButtonWithImage> 

				<CustomButtonWithImage
					class="h-[48px] px-[68px]  justify-center border-[2px] border-solid border-button"
				>
					<img 
						src="../../assets/images/apple-login.svg" 
						alt=""
					>
				</CustomButtonWithImage>  
			</div>
		</div>



		<div>
			<img src="../../assets/images/LoginOne.png" alt="">	
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>