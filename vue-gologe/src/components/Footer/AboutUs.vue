<template>
	<div
		class="flex flex-col gap-[15px]"
	>
		<h1
			class="font-serrat font-bold text-base text-green"
		>
		{{ $t("Footer.aboutUs") }}
		</h1>
		<div
			class="flex flex-col gap-[10px]"
		>
			<router-link 
				to="#"
				class="font-serrat font-bold text-sm h-[17px] text-grey"
			>
			{{ $t("Footer.AboutUs.OurStory") }}
			</router-link>
			<router-link 
				to="#"
				class="font-serrat font-bold text-sm h-[17px] text-grey"
			>
			{{ $t("Footer.AboutUs.Workwithus") }}
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>