<template>
	<div
		class="w-[170px] flex flex-col gap-[15px]"
	>
		<h1
			class="custom-text-base font-bold text-green"
		>
			{{ $t("Footer.aboutUs") }}
		</h1>
		<div
			class="flex flex-col gap-[10px]"
		>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-gray"
			>
				{{ $t("Footer.AboutUs.OurStory") }}
			</router-link>
			
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-gray"
			>
				{{ $t("Footer.AboutUs.Workwithus") }}
			</router-link>
		</div>
	</div>
</template>