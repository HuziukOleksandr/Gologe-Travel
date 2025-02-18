<template>
  <Transition>
    <div
      class="w-10 p-2 flex flex-col gap-2.5 rounded absolute"
      v-if="props.dialogVisible"
      v-click-away="onClickAway"
    >
      <img
        src="@/assets/images/svg/EN.svg"
        alt="Flag EN"
        class="image"
        @click="close('EN')"
        v-if="locale != 'EN'"
      />
      <img
        src="@/assets/images/svg/UA.svg"
        alt="Flag UA"
        class="image"
        @click="close('UA')"
        v-else
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { setItem } from "@/services/LocaleStorage";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
  }>(),
  {}
);

let language = ref("EN");
const { locale } = useI18n(),
  emit = defineEmits(["closeWindow"]);

const close = (item: string) => {
  emit("closeWindow");
  language.value = item;
  change(item);
};

const change = (item: string) => {
  setItem("language", item);
  if (locale.value != item) {
    locale.value = item;
  }
};

const onClickAway = () => {
  emit("closeWindow");
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.image {
  @apply w-6 rounded;

  &:hover {
    @apply cursor-pointer;
  }
}
</style>
