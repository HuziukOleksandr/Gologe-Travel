<template>
  <form class="flex items-center gap-1">
    <input
      id="checkboxId"
      type="checkbox"
      class="w-5 h-5 rounded border-2 border-solid border-custom-darkgreen cursor-pointer"
    />
    <label
      for="checkboxId"
      class="w-full cursor-pointer flex items-center gap-1"
    >
      <img
        src="@/assets/images/svg/UI/checked.svg"
        alt="checked"
        class="w-5 h-5"
      />
      <slot></slot>
    </label>
  </form>
</template>

<style scoped>
#checkboxId {
  display: none;
}
#checkboxId:checked {
  display: block;
}
#checkboxId:checked ~ label img {
  display: none;
}
</style>
