<template>
	<div
		class="flex flex-col gap-[15px]"
	>
		<h1
			class="customtext-base font-bold text-green"
		>
			{{ $t("Footer.ContactUs") }}
		</h1>
		<div
			class="flex flex-col gap-[10px]"
		>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-gray"
			>
				{{ $t("Footer.Contact.OurStory") }}
			</router-link>
			
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-gray"
			>
				{{ $t("Footer.Contact.Workwithus") }}
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>