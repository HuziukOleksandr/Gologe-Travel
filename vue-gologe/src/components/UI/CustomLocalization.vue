<template>
  <!-- Drop-dawn localization Start -->
  <TransitionGroup>
    <!-- Localization wraper Start -->
    <div
      class="w-10 p-2 flex flex-col gap-2.5 rounded absolute"
      v-if="props.dialogVisible"
      v-click-away="onClickAway"
    >
      <!-- Image EN flag -->
      <img
        src="@/assets/images/svg/EN.svg"
        alt="Flag EN"
        class="image"
        @click="close('EN')"
        v-if="locale != 'EN'"
      />

      <!-- Image UA flag -->
      <img
        src="@/assets/images/svg/UA.svg"
        alt="Flag UA"
        class="image"
        @click="close('UA')"
        v-else
      />
    </div>
    <!-- Localization wraper End -->
  </TransitionGroup>
  <!-- Drop-dawn localization End -->
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

// Props for open expected "true" or ""false
const props = withDefaults(
  defineProps<{
    dialogVisible: boolean;
  }>(),
  {}
);

let language = ref("EN");
const { locale } = useI18n();

// Set language value in storage
// localStorage.setItem("language", language.value);

const emit = defineEmits(["closeWindow"]);

// Method Close
const close = (item: string) => {
  emit("closeWindow");
  language.value = item;
  change(item);
};

// Method Change
const change = (item: string) => {
  localStorage.setItem("language", item);
  if (locale.value != item) {
    locale.value = item;
  }
};

// On Click Away for Close
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
