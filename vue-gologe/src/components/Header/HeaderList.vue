<template>
  <!-- A drop-down list for input Start -->
  <TransitionGroup>
    <!-- Wraper List Start -->
    <div
      class="wrapper_list"
      v-if="props.dialogVisible"
      v-click-away="onClickAway"
    >
      <div class="list">
        <div
          class="list-element"
          v-for="(element, index) in props.list"
          :class="{ 'border-none': index === props.list.length - 1 }"
          @click="signOut(element)"
        >
          <p class="element-text" >
            {{ element }}
          </p>
        </div>
      </div>
    </div>
    <!-- Wraper List Start -->
  </TransitionGroup>
  <!-- A drop-down list for input Start -->
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore.ts"

// Props expected boolean
const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
    list: [];
  }>(),
  {}
);

const emit = defineEmits(["closeWindow", "selectValue"]);
const onClickAway = () => {
  emit("closeWindow");
};

const selectValue = (value: string) => {
  emit("selectValue", value);
};
const authUser = useAuthStore()

async function signOut(value: string) {
  console.log(authUser.getUser);
  
  await authUser.handlerSignOut()
}

</script>

<style lang="scss" scoped>
.wrapper_list {
  @apply absolute w-28 mt-3 bg-default
	border-2 border-custom-darkgreen border-solid
	rounded opacity-100 z-50;

  .list {
    @apply w-full flex flex-col gap-1  text-custom-darkgreen;

    &:hover {
      @apply cursor-pointer;
    }

    .list-element {
      @apply w-full h-10 flex items-center px-4
        border-b-2 border-b-custom-darkgray;

      &:hover {
        @apply text-custom-darkgreen;
      }
      .element-text {
        @apply font-serrat font-semibold text-sm sm:text-xs;
      }
    }
  }
}
</style>
