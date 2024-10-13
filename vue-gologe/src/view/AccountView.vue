<template>
  <!-- Account Component wrapper Start -->
  <div
    class="relative max-w-primary-width w-full pt-12 flex flex-col gap-3 mb-28 mx-auto"
  >
    <!-- Account Preview wrapper Start -->
    <div class="w-full h-[350px] rounded-xl flex relative mb-60">
      <!-- Preview Image -->
      <img
        class="w-full h-full"
        src="@/assets/images/png/Account/Background/John-background.png"
        alt="background"
      />

      <!-- Button Upload File Start -->
      <CustomUploadFile
        class="absolute right-6 bottom-6 h-12 bg-custom-lightgreen rounded-lg cursor-pointer"
      >
        {{ $t("Account.upload") }}
      </CustomUploadFile>
      <!-- Button Upload File End -->

      <!-- User Info wrapper Start -->
      <div class="user_wrapper">
        <!-- User image wrapper Start -->
        <div
          class="w-40 h-40 rounded-full mb-6 border-solid border-custom-red border-2 flex justify-end items-end"
        >
          <!-- Button Upload Ures Image Start -->
          <CustomButton
            class="p-2 bg-custom-red rounded-full flex justify-center items-center"
          >
            <!-- Button Image -->
            <img src="@/assets/images/svg/UI/Pen.svg" alt="Pen" />
          </CustomButton>
          <!-- Button Upload Ures Image End -->
        </div>
        <!-- User image wrapper End -->

        <!-- User Name Start -->
        <h1 class="custom-text-2xl font-semibold mb-2">John Doe.</h1>
        <!-- User Name End -->

        <!-- User Email Start -->
        <h2 class="custom-text-base font-medium text-custom-gray">
          john.doe@gmail.com
        </h2>
        <!-- User Email End -->
      </div>
      <!-- User Info wrapper End -->
    </div>
    <!-- Account Preview wrapper End -->

    <!-- Account Header Navigation Start -->
    <div class="w-full flex flex-col gap-10 rounded-2xl shadow-xl">
      <!-- Buttons Navigation wrapper Start -->
      <div class="w-full h-20 flex justify-between items-center">
        <!-- Use Custom Button "Account" Start -->
        <CustomButton
          class="button"
          :class="{ active: selectedTab === 'Account' }"
          @click="changeTab('Account')"
        >
          <p class="button-text">
            {{ $t("Account.account") }}
          </p>
        </CustomButton>
        <!-- Use Custom Button "Account" End -->

        <!-- Line Start -->
        <div class="history-vertical-line"></div>
        <!-- Line End -->

        <!-- Use Custom Button "History" Start -->
        <CustomButton
          class="button"
          :class="{ active: selectedTab === 'History' }"
          @click="changeTab('History')"
        >
          <p class="button-text">
            {{ $t("Account.history") }}
          </p>
        </CustomButton>
        <!-- Use Custom Button "History" End -->

        <!-- Line Start -->
        <div class="history-vertical-line"></div>
        <!-- Line End -->

        <!-- Use Custom Button "Payment" Start -->
        <CustomButton
          class="button"
          :class="{ active: selectedTab === 'Payment' }"
          @click="changeTab('Payment')"
        >
          <p class="button-text">{{ $t("Account.payment") }}</p>
        </CustomButton>
        <!-- Use Custom Button "Payment" End -->
      </div>
      <!-- Buttons Navigation wrapper End -->
    </div>
    <!-- Account Header Navigation End -->

    <!-- Use History Component -->
    <History v-if="selectedTab === 'History'" />

    <!-- Use Payment Component -->
    <Payment v-else-if="selectedTab === 'Payment'" @open-window="open" />

    <!-- Use Info Component -->
    <Info v-else="selectedTab === 'Account'" />
  </div>
  <!-- Account Component wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import Info from "@/components/Account/Info.vue";
import History from "@/components/Account/History.vue";
import Payment from "@/components/Account/Payment.vue";

const selectedTab = ref<string>("Account");

let isOpen = ref<boolean>();

// Method Change Tab
const changeTab = (type: string) => {
  selectedTab.value = type;
};

// Method Close
// const close = () => {
//   isOpen.value = false;
// };

// Method Open
const open = () => {
  isOpen.value = true;
};
</script>

<style lang="scss" scoped>
.user_wrapper {
  @apply absolute left-[50%] translate-x-[-50%] top-[275px] 
      max-w-[185px] w-full h-[240px] 
      flex flex-col items-center;
}

.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 215px;
  border-bottom: solid 3px #8dd3bb;
}

.button {
  @apply relative max-w-[360px] w-full h-full px-6;

  .button-text {
    @apply font-serrat text-base text-custom-darkgreen font-semibold;
  }
}
</style>
