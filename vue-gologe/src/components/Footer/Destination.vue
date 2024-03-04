<template>
	<div
		class="flex flex-col gap-[15px]"
	>
		<h1
			class="custom-text-base text-green"
		>
		{{ $t("Footer.ourDestination") }}
		</h1>
		<div
			class="flex flex-col gap-[10px]"
		>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Destination.Canada") }}
			</router-link>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Destination.Alaska") }}
			</router-link>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Destination.France") }}
			</router-link>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Destination.Iceland") }}
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>