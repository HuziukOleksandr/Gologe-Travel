<template>
	<div 
		class="max-w-[1230px] w-[100%] h-[300px] 
			m-auto bg-lightGreen rounded-[20px]
				flex justify-between px-[24px]"
	>
		<div
			class="max-w-[700px] w-[100%] py-[24px] flex flex-col justify-between"
		>
			<h1
				class="custom-text-4xl text-green"
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
				class="h-[56px] flex gap-[15px]"
			>
				<input 
					type="email"
					:placeholder="$t('Footer.placeholder')"
					class="custom-text-base max-w-[460px] w-[100%] h-[56px] px-[16px] rounded-[8px]
						bg-white text-green 
							placeholder:text-base placeholder:text-green"
				>
				<CustomButton
					class="h-[56px] text-white bg-green uppercase"
				>
					{{ $t("Footer.button") }}
				</CustomButton>
			</div>
		</div>

		<div>
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