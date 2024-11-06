<template>
  <!-- Info Title Start -->
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.account") }}
  </h1>
  <!-- Info Title Start -->

  <!-- Info wrapper Start -->
  <div
    class="w-full flex flex-col gap-8 px-6 py-8 rounded-2xl shadow-xl border-[1px] border-custom-lightgreen"
  >
    <!-- Name wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.name") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">John Doe</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Transition name="grow-right">
          <input
            v-if="ChangeValue == 'name'"
            class="change_input"
            type="text"
            placeHolder="Name"
            v-model="Value"
          />
        </Transition>

        <!-- Change input End -->
        <!-- Confirm Button Start -->
        <CustomButton
          v-if="ChangeValue == 'name'"
          class="change_button"
          @click="Confirm"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Change Button Start -->
        <CustomButton v-else class="change_button" @click="Change('name')">
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
    <!-- Name wrapper End -->

    <!-- Email wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.email") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">john.doe@gmail.com</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->
       
      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Transition name="grow-right">
          <input
            v-if="ChangeValue == 'email'"
            class="change_input"
            type="text"
            placeHolder="Email"
            v-model="Value"
          />
        </Transition>

        <!-- Change input End -->
        <!-- Confirm Button Start -->
        <CustomButton
          v-if="ChangeValue == 'email'"
          class="change_button"
          @click="Confirm"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Change Button Start -->
        <CustomButton v-else class="change_button" @click="Change('email')">
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
    <!-- Email wrapper End -->

    <!-- Password wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.password") }}
        </h1>
        <!-- Title Start -->

        <!-- Text Start -->
        <h2 class="text">************</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Transition name="grow-right">
          <input
            v-if="ChangeValue == 'password'"
            class="change_input"
            type="text"
            placeHolder="Password"
            v-model="Value"
          />
        </Transition>

        <!-- Change input End -->
        <!-- Confirm Button Start -->
        <CustomButton
          v-if="ChangeValue == 'password'"
          class="change_button"
          @click="Confirm"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Change Button Start -->
        <CustomButton v-else class="change_button" @click="Change('password')">
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
    <!-- Password wrapper End -->

    <!-- Phone Number wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.number") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">+1 000-000-0000</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper Start -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Transition name="grow-right">
          <input
            v-if="ChangeValue == 'phone'"
            class="change_input"
            type="text"
            placeHolder="Phone"
            v-model="Value"
          />
        </Transition>

        <!-- Change input End -->
        <!-- Confirm Button Start -->
        <CustomButton
          v-if="ChangeValue == 'phone'"
          class="change_button"
          @click="Confirm"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Change Button Start -->
        <CustomButton v-else class="change_button" @click="Change('phone')">
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
    <!-- Phone Number wrapper End -->

    <!-- Address wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.address") }}
        </h1>
        <!-- Title Start -->

        <!-- Text Start -->
        <h2 class="text">St 32 main downtown, Los Angeles, California, USA</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Transition name="grow-right">
          <input
            v-if="ChangeValue == 'address'"
            class="change_input"
            type="text"
            placeHolder="Address"
            v-model="Value"
          />
        </Transition>

        <!-- Change input End -->
        <!-- Confirm Button Start -->
        <CustomButton
          v-if="ChangeValue == 'address'"
          class="change_button"
          @click="Confirm"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Change Button Start -->
        <CustomButton v-else class="change_button" @click="Change('address')">
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
    <!-- Address wrapper End -->

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
        <h2 class="text">01-01-1992</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Transition name="grow-right">
          <input
            v-if="ChangeValue == 'birth'"
            class="change_input"
            type="text"
            placeHolder="Date of birth"
            v-model="Value"
          />
        </Transition>

        <!-- Change input End -->
        <!-- Confirm Button Start -->
        <CustomButton
          v-if="ChangeValue == 'birth'"
          class="change_button"
          @click="Confirm"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Change Button Start -->
        <CustomButton v-else class="change_button" @click="Change('birth')">
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
  </div>
  <!-- Info wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import type UserType from "@/types/user-types";

const userStore = useUserStore();
const ChangeValue = ref<string>("");
const Value = ref<string>("");

const Change = (value: string) => {
  ChangeValue.value = value;
};

const Confirm = () => {
  userStore.setUserProperty(ChangeValue.value as keyof UserType, Value.value);
  ChangeValue.value = "";
  Value.value = "";
};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply w-full min-h-[52px] flex justify-between gap-2;

  .text-wrapper {
    @apply flex flex-col justify-between;

    .title {
      @apply font-serrat text-base font-semibold text-custom-darkgray;
    }

    .text {
      @apply font-serrat text-xl font-semibold text-black overflow-hidden text-ellipsis text-nowrap;

      @screen sm {
        @apply max-w-[200px];
      }
    }
  }
  .change_wrapper {
    @apply h-full flex items-center gap-2;

    .change_input {
      @apply px-2 h-12 border-b-custom-lightgreen border-b-2;
    }

    .change_button {
      @apply w-fit h-12 flex justify-center gap-1 border-custom-lightgreen border-2 px-8 
      sm:h-10 sm:px-2 sm:w-10;

      .button-text {
        @apply font-serrat text-sm text-custom-darkgreen font-medium sm:hidden;
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
