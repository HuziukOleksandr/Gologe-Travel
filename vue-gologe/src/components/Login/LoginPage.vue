<template>
	<div
		class="max-w-[1440px] w-full min-h-[900px] p-[104px] flex justify-between"
	>
		<div
			class="max-w-[510px] w-full"
		>
			<CustomLogo 
				class="mb-[64px]"
			/>

			<h1
				class="custom-text-4xl font-bold mb-[16px]"
			>
				{{ $t("Login.title") }}
			</h1>
			<h2	
				class="custom-text-base font-regular mb-[48px] text-gray"
			>
				{{ $t("Login.subTitle") }}
			</h2>

			<div
				class="flex flex-col gap-[24px] mb-[40px]"
			>
				<CustomInput
					class="h-[56px] font-serrat font-medium text-green"
					:props="email"
				>
					<template v-slot:input>
						{{ $t("Login.email")}}
					</template>
				</CustomInput>

				<CustomInput
					class="h-[56px] font-serrat font-medium text-green" 
					type="password"
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

				<div
					class="w-full h-[25px] flex justify-between "
				>
					<form
						class="flex items-center gap-[5px]"
					>
						<input 
							id="remember" 
							type="checkbox"
							class="w-[20px] h-[20px] rounded-[4px] border-2 border-green border-solid cursor-pointer"
						>
						<label 
							for="remember"
							class="custom-text-base font-bold cursor-pointer flex items-center gap-[5px]"
						>
							<img 
								src="../../assets/images/checked.svg" 
								alt="checked"
								class="w-[20px] h-[20px]"
							>
							{{ $t("Login.remember") }}
						</label>
					</form>

					<router-link 
						to="#"
						class="custom-text-base font-bold text-red"
					>
						{{ $t("Login.forgot") }}
					</router-link>
				</div>
			</div>

			<CustomButton
				class="w-full h-[48px] rounded-[4px] mb-[16px] justify-center custom-text-sm font-bold bg-buttonGreen text-green "
			>
				{{ $t("Login.title") }}
			</CustomButton> 

			<div
				class="mb-[40px] w-full h-[20px] flex justify-center gap-[5px]"
			>
				<span
					class="custom-text-base font-bold"
				>
					{{ $t("Login.question") }}
				</span>
				<router-link 
					to="/register"
					class="custom-text-base font-bold text-red"
				>
					{{ $t("Login.signUp") }}
				</router-link>
			</div>
			
			<div
				class="w-full h-[18px] flex items-center mb-[40px] "
			>
				<hr class="grow text-gray">
				<div
					class="font-serrat font-[400] text-sm px-[10px] grow-0 text-gray bg-background"
				>
					{{ $t("Login.orLoginWith") }}
				</div>
				<hr class="grow text-gray">
			</div>
			<div 
				class="flex justify-between"
			>
				<CustomButton
					class="h-[48px] px-[68px] justify-center border-[2px] border-solid border-buttonGreen"
				>
					<img 
						src="../../assets/images/facebook-login.svg" 
						alt="facebook"
					>
				</CustomButton>

				<CustomButton
					class="h-[48px] px-[68px] justify-center border-[2px] border-solid border-buttonGreen"
				>
					<img 
						src="../../assets/images/google-login.svg" 
						alt="google"
					>
				</CustomButton> 

				<CustomButton
					class="h-[48px] px-[68px] justify-center border-[2px] border-solid border-buttonGreen"
				>
					<img 
						src="../../assets/images/apple-login.svg" 
						alt="apple"
					>
				</CustomButton>  
			</div>
		</div>



		<div
			class="max-w-[620px] w-full relative"
		>
			<Carousel 
				:items-to-show="1"
				pauseAutoplayOnHover="true"
				transition="500"
				autoplay="10000"
				wrapAround="true"
				class="relative"
			>
				<slide
					v-for="slide in slides"
					:key="slide"
				>
					<img :src="getImageUrlPng(slide)" alt="">
				</slide>
				<template #addons>
					<Pagination 
						class="absolute bottom-[24px] left-1/2 transform -translate-x-1/2"
					/>
                </template>
			</Carousel>
			
		</div>
	</div>
</template>

<script setup lang="ts">

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref } from 'vue'
import { getImageUrlPng } from '../../helpers/Helpers.ts'

const slides = ref(["login-one", "login-two", "login-three"]);

console.log(slides.value[1]);


</script>

<style>

.carousel__pagination-button::after {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #fff;
	transition: all .5s;
}

.carousel__pagination-button:hover::after {
	background-color: #8DD3BB;
}

.carousel__pagination-button--active::after{
	width: 32px;
	height: 10px;
	border-radius: 5px;
	background-color: #8DD3BB;
}

</style>

<style scoped>

#remember {
	display: none;
}
#remember:checked {
	display: block;
}
#remember:checked~label img {
	
	display: none;
}
</style>