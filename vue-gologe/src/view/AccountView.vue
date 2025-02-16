<template>
  <!-- Account Page Start -->
  <div class="w-full flex justify-center">
    <!-- Account Component wrapper Start -->
    <div
      class="relative max-w-primary-width w-full pt-6 flex flex-col gap-3 mb-28 lg:mx-auto mx-10"
    >
      <!-- Account Preview wrapper Start -->
      <div class="w-full h-[350px] rounded-xl flex relative mb-60">
        <!-- Preview Image -->
        <img
          class="w-full h-full rounded-xl object-cover"
          :src="url"
          alt="background"
        />
        <!-- Button Upload File Start -->
        <CustomUploadImage
          class="absolute right-6 bottom-6 h-12 bg-custom-lightgreen rounded-lg cursor-pointer px-4"
          path="background"
        >
          <img
            src="@/assets/images/svg/UI/upload-file.svg"
            alt="upload-file"
            class="hover:cursor-pointer"
            
          />
          <p class="sm:hidden hover:cursor-pointer">
            {{ $t("Account.upload") }}
          </p>
        </CustomUploadImage>
        <!-- Button Upload File End -->

        <!-- User Info wrapper Start -->
        <div class="user_wrapper relative">
          <!-- User image wrapper Start -->
          <div
            class="w-40 h-40 rounded-full mb-6 relative "
          >
            <img
              src="../assets/images/png/Account/textFoto.jpg"
              alt="rounded-full"
              class="w-40 h-40 rounded-full absolute inset-0 border-custom-red border-[4px]"
            />
            <!-- Button Upload Ures Image Start -->
            <CustomUploadImage
              class="p-[10px] bg-custom-red rounded-full absolute right-0 bottom-0"
              path="user-image"
            >
              <!-- Button Image -->
              <img src="@/assets/images/svg/UI/Pen.svg" alt="Pen" />
            </CustomUploadImage>
            <!-- Button Upload Ures Image End -->
          </div>
          <!-- User image wrapper End -->

          <!-- User Name Start -->
          <h1 class="custom-text-xl font-semibold mb-2">
            {{ userStore.user.firstName }} {{ userStore.user.lastName }}
          </h1>
          <!-- User Name End -->

          <!-- User Email Start -->
          <h2 class="custom-text-base font-medium text-custom-gray">
            {{ userStore.user.email }}
          </h2>
          <!-- User Email End -->
        </div>
        <!-- User Info wrapper End -->
      </div>
      <!-- Account Preview wrapper End -->

      <!-- Account Header Navigation Start -->
      <div class="w-full flex flex-col gap-10 rounded-2xl shadow-xl">
        <!-- Buttons Navigation wrapper Start -->
        <div class="w-full h-20 flex justify-around items-center">
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
  </div>
  <!-- Account Page End -->
</template>

<script setup lang="ts">
//TODO: Добавити зміну Frame Background
//TODO: Добавити загрузку і зміну фото профіля
//TODO: Добавити кнопку видалення аккаунта
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import Info from "@/components/Account/Info.vue";
import History from "@/components/Account/History.vue";
import Payment from "@/components/Account/Payment.vue";

const userStore = useUserStore();
const selectedTab = ref<string>("Account");
const url =  userStore.updateRefImage("background").toString();
console.log(url);

// async function background() {
//   if (userStore.userId) {
//     const url =  userStore.updateRefImage("background");
//     return url;
//   } else {
//     return new URL(
//       "../assets/images/png/Account/Background/default-background.png",
//       import.meta.url
//     ).href;
//   }
// };

let isOpen = ref<boolean>();

// Method Change Tab
const changeTab = (type: string) => {
  selectedTab.value = type;
};

// Method Open
const open = () => {
  isOpen.value = true;
};
</script>

<style lang="scss" scoped>
.user_wrapper {
  @apply absolute left-[50%] translate-x-[-50%] top-[275px] 
       w-fit h-[240px] 
      flex flex-col items-center;
}

.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: solid 3px #8dd3bb;
  @apply inset-0 m-auto;
  @screen md {
    @apply w-[90%];
  }
  @screen sm {
    @apply w-[80%];
  }
}

.button {
  @apply relative max-w-[360px] w-full h-full px-6;

  .button-text {
    @apply font-serrat text-base text-custom-darkgreen font-semibold;
  }
}
</style>
