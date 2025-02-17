<template>
  <div class="add_wrapper" @click="open">
    <div class="flex flex-col gap-4 items-center">
      <CustomButtom class="button">
        <img src="@/assets/images/svg/UI/plus.svg" alt="plus" />
      </CustomButtom>
      
      <h1 class="custom-text-sm">
        {{ $t("Account.Payment.addButton") }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["openWindow"]);

const open = () => {
  emit("openWindow");
};
</script>

<style lang="scss" scoped>
.add_wrapper {
  @apply max-w-[375px] w-full h-[210px] 
	border-dashed border-custom-lightgreen border-2 rounded-2xl 
	flex justify-center items-center cursor-pointer;

  .button {
    @apply w-12 h-12 flex justify-center items-center
	  border-solid border-custom-lightgreen border-2 rounded-full;
  }
}
</style>
