<template>
	<!-- Review wrapper Start -->
	<div
		class="max-w-[1395px] w-[100%] min-h-[280px] flex flex-col gap-[40px]"
	>
		<!-- Review Heared wrapper Start -->
		<div
			class="flex items-center justify-between"
		>	
			<!-- Text wrapper Start -->
			<div 
				class="max-w-[1060px] w-[100%] flex flex-col gap-[15px]"
			>
				<!-- Review Title Start -->
				<h1
					class="h-[35px] font-serrat font-semibold text-[32px]"
				> 
					{{ $t("Landing.Review.title") }}
				</h1>
				<!-- Review Title End -->

				<!-- Review Sub-Title Start -->
				<h2
					class="font-serrat font-regilar text-[16px] text-gray"
				>
					{{ $t("Landing.Review.sub-title") }}
				</h2>
				<!-- Review Sub-Title End -->
			</div>
			<!-- Text wrapper End -->

			<!-- Review Button Start -->
			<button 
				class="h-[40px] px-[16px] 
					border-[2px] rounded-[4px] border-buttonGreen"
			>	
				{{ $t("Landing.Review.button") }}
			</button>
			<!-- Review Button End -->
		</div>
		<!-- Review Heared wrapper Start -->

		<!-- Review Content wrapper Start -->
		<div
			class="flex flex-wrap justify-between"
		>
			<!-- Use Review Card Component -->
			<Card :reviews="reviews"/>
		</div>
		<!-- Review Content wrapper End -->
	</div>
	<!-- Review wrapper End -->
</template>

<script setup lang="ts">
import Card from './Card.vue'
import axios from 'axios'
import { ref } from 'vue'

const reviews = ref()

// Get Cards fron json file
axios.get('/Review.json')
  .then(function (response) {
    reviews.value = response.data.Reviews ?? response.data.Reviews.lice(0,3);
	
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
   
});

</script>

<style scoped>

</style>