<template>
  <!-- Date of Birth wrapper Start -->
  <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.birth") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">{{ userStore.user.birth }}</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Transition name="grow-right">
          <input
            v-if="inputVisible"
            class="change_input"
            type="text"
            placeHolder="Date of birth"
            v-model="Date"
          />
        </Transition>
        <!-- Change input End -->
         
        <!-- Confirm Button Start -->
        <CustomButton
          v-if="inputVisible"
          class="change_button"
          
          @click="Change()"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Change Button Start -->
        <CustomButton v-else class="change_button" @click="inputVisible = true">
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />
          <p class="button-text">
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Change Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Date of Birth wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

const Date = ref<string>(""),
  inputVisible = ref<boolean>(false),
  userStore = useUserStore();

const Change = () => {
  userStore.setUserProperty("birth", Date.value);
  inputVisible.value = false;
};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply w-full min-h-[52px] flex justify-between gap-2;
  @screen sm {
    @apply flex-col;
  }

  .text-wrapper {
    @apply flex flex-col justify-between;

    .title {
      @apply font-serrat text-base font-semibold text-custom-darkgray;
    }

    .text {
      @apply font-serrat text-xl font-semibold text-black overflow-hidden text-ellipsis text-nowrap;
    }
  }

  .change_wrapper {
    @apply h-full flex items-center gap-2;
    @screen sm {
      @apply flex-col;
    }

    .change_input {
      @apply px-2 h-12 border-b-custom-lightgreen border-b-2;
      @screen sm {
        @apply w-full;
      }
    }
    .change_button {
      @apply w-fit h-12 flex border-custom-lightgreen justify-center gap-1 border-2 px-8;
      @screen sm {
        @apply h-10 px-2 w-full;
      }

      .button-text {
        @apply font-serrat text-sm text-custom-darkgreen font-medium;
      }
    }
  }
}

.grow-right-enter-active,
.grow-right-leave-active {
  transition: transform 0.5s ease;
}
.grow-right-enter-from {
  transform: scaleX(0);
  transform-origin: right;
}
.grow-right-enter-to {
  transform: scaleX(1);
  transform-origin: right;
}
.grow-right-leave-from {
  transform: scaleX(1);
  transform-origin: right;
}
.grow-right-leave-to {
  transform: scaleX(0);
  transform-origin: right;
}
</style>