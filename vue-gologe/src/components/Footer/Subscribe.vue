<template>
	<div 
		class="max-w-[1230px] w-[100%] min-h-[300px] 
			m-auto bg-lightGreen rounded-[20px]
				flex justify-between p-[24px]"
	>
		<div
			class="max-w-[700px] w-[100%]  flex flex-col justify-between gap-[20px]"
		>
			<h1
				class="custom-text-4xl text-green sm:text-2xl"
			>
				{{ $t("Footer.title")}}
			</h1>

			<div 
				class="flex flex-col gap-[10px]"
			>
				<h2
					class="custom-text-xl text-green"
				>
					{{ $t("Footer.subTitle")}}
				</h2>
				<p
					class="custom-text-base text-green"
				>
					{{ $t("Footer.text")}}
				</p>
			</div>

			<div
				class="flex gap-[15px] sm:flex-col"
			>
				<input 
					type="email"
					:placeholder="$t('Footer.placeholder')"
					class="custom-text-base  w-[100%] h-[45px] px-[16px] rounded-[8px]
						bg-white text-green 
							placeholder:text-base placeholder:text-green lg:h-[56px]"
				>
				<CustomButton
					class="h-[45px] text-white bg-green uppercase lg:h-[56px]"
				>
					{{ $t("Footer.button") }}
				</CustomButton>
			</div>
		</div>

		<div
			class="hidden lg:block"
		>
			<img 
				src="../../assets/images/footer.png" 
				alt="footer"
				class="h-[300px]"
			>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>