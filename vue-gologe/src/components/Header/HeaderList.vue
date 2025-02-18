<template>
  <TransitionGroup>
    <div
      class="wrapper_list"
      v-if="props.dialogVisible"
      v-click-away="onClickAway"
    >
      <div class="list">
        <div
          class="list-element"
          v-for="(element, index) in props.list"
          :key="index"
          :class="{ 'border-none': index === props.list.length - 1 }"
          @click="selectValue(index)"
        >
          <p class="element-text">
            {{ element }}
          </p>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore.ts";
import { useRouter } from "vue-router";

const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
    list: string[];
  }>(),
  {}
);

const router = useRouter();
const authUser = useAuthStore();
const emit = defineEmits(["closeWindow"]);

const onClickAway = () => {
  emit("closeWindow");
};

const selectValue = (value: number) => {
  switch (value) {
    case 0:
      router.push({ name: "Account" });
      break;
    case 1:
      signOut();
      break;
  }
};

async function signOut() {
  try {
    await authUser.handlerSignOut();
    router.push({ name: "Landing" });
  } catch (error) {
    alert(error);
  }
}
</script>

<style lang="scss" scoped>
.wrapper_list {
  @apply absolute max-w-[300px] w-full mt-3 bg-default 
	border-[1px] border-custom-darkgreen border-solid
	rounded opacity-100 z-50;

  .list {
    @apply w-full flex flex-col gap-1  text-custom-darkgreen;

    &:hover {
      @apply cursor-pointer;
    }

    .list-element {
      @apply w-full h-10 flex items-center px-4
        border-b-[1px] border-b-custom-darkgray;

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
