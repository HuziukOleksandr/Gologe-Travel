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
				class="font-serrat font-bold text-4xl text-green"
			>
			{{ $t("Footer.title")}}
			</h1>

			<div 
				class="flex flex-col gap-[10px]"
			>
				<h2
					class="font-serrat font-bold text-xl text-green"
				>
				{{ $t("Footer.subTitle")}}
				</h2>
				<p
					class="font-serrat font-bold text-base text-green"
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
					class="max-w-[460px] w-[100%] h-[56px] bg-white text-green 
						px-[16px] font-serrat font-bold rounded-[4px]
							placeholder:text-base placeholder:text-green"
				>
				<button
					class="px-[16px] h-[56px] font-serrat font-bold text-white bg-green rounded-[4px] uppercase"
				>
				{{ $t("Footer.button") }}
				</button>
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

<style scoped>

</style>