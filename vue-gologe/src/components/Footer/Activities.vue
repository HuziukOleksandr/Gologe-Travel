<template>
	<div
		class="flex flex-col gap-[15px]"
	>
		<h1
			class="custom-text-base text-green"
		>
			{{ $t("Footer.ourActivities") }}
		</h1>
		<div
			class="w-[170px] flex flex-col gap-[10px]"
		>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Activities.NorthernLights") }}
			</router-link>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Activities.CruisingSailing") }}
			</router-link>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Activities.MultiActivities") }}
			</router-link>
			<router-link 
				to="#"
				class="custom-text-sm h-[17px] text-grey"
			>
				{{ $t("Footer.Activities.Kayaing") }}
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>