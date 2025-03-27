<template>
  <div class="max-w-[1440px] w-full flex justify-center mx-auto">
    <div class="max-w-primary-width w-full flex flex-col gap-7 py-12 md:px-7">
      <div class="flex justify-between">
        <div class="flex flex-col gap-10">
          <TicketCard />
          <!-- Pays -->
          <section class="booking-section-wrapper min-h-[240px]">
            <div
              class="content-wrapper h-20"
              :class="{ 'bg-custom-green': paysActive }"
              @click="paysSelectBar(true)"
            >
              <div class="content-text-wrapper">
                <p class="content-title">
                  {{ $t("FlightBooking.Pays.fullTitle") }}
                </p>
                <p class="content-text">
                  {{ $t("FlightBooking.Pays.fullText") }}
                </p>
              </div>
              <div class="image-wrapper">
                <img
                  src="@/assets/images/svg/UI/iconActive.svg"
                  alt="iconActive"
                  v-show="paysActive"
                />
                <img
                  src="@/assets/images/svg/UI/iconNonActive.svg"
                  alt="iconActive"
                  v-show="!paysActive"
                />
              </div>
            </div>
            <div
              class="content-wrapper"
              :class="{ 'bg-custom-green': !paysActive }"
              @click="paysSelectBar(false)"
            >
              <div class="content-text-wrapper max-w-[630px]">
                <p class="content-title">
                  {{ $t("FlightBooking.Pays.partTitle") }}
                </p>
                <p class="content-text">
                  {{ $t("FlightBooking.Pays.partText") }}
                </p>
                <CustomButton>
                  <p
                    class="custom-text-xs text-custom-darkgreen font-medium underline"
                  >
                    {{ $t("FlightBooking.Pays.button") }}
                  </p>
                </CustomButton>
              </div>
              <div class="image-wrapper">
                <img
                  src="@/assets/images/svg/UI/iconActive.svg"
                  alt="iconActive"
                  v-show="!paysActive"
                />
                <img
                  src="@/assets/images/svg/UI/iconNonActive.svg"
                  alt="iconActive"
                  v-show="paysActive"
                />
              </div>
            </div>
          </section>
          <!-- Login -->
          <section class="booking-section-wrapper min-h-[455px]">
            <div class="flex flex-col gap-4">
              <h1 class="custom-text-xl text-custom-darkgreen font-semibold">
                {{ $t("FlightBooking.Login.title") }}
              </h1>
              <CustomInput
                class="custom-text-sm text-custom-darkgreen font-medium"
                :placeHolder="$t('FlightBooking.Login.placeholder')"
                type="text"
              >
              </CustomInput>
              <p class="custom-text-sm text-custom-darkgreen font-medium">
                {{ $t("FlightBooking.Login.text") }}
              </p>
            </div>
            <CustomButton
              class="w-full h-12 bg-custom-lightgreen flex justify-center"
            >
              <p class="custom-text-base text-custom-darkgreen font-semibold">
                {{ $t("FlightBooking.Login.button") }}
              </p>
            </CustomButton>
            <div class="w-full flex items-center mb-4 lg:mb-6">
              <hr class="grow text-custom-darkgray" />
              <div
                class="custom-text-sm px-3 grow-0 text-custom-darkgray bg-default"
              >
                {{ $t("FlightBooking.Login.or") }}
              </div>
              <hr class="grow text-custom-darkgray" />
            </div>
            <CustomLoginWith />
            <CustomButton
              class="w-full h-12 flex justify-center border-custom-lightgreen border-2"
            >
              <img src="@/assets/images/svg/UI/mail.svg" alt="mail" />
              <p class="custom-text-base text-custom-darkgreen font-semibold">
                {{ $t("FlightBooking.Login.withEmail") }}
              </p>
            </CustomButton>
          </section>
          <!-- Payment -->
          <section class="booking-section-wrapper min-h-[315px]">
            <div
              class="h-20 rounded-xl px-4 flex items-center justify-between hover:cursor-pointer"
              :class="{ 'bg-custom-green': paymentActive }"
              @click="paymentSelectBar"
            >
              <div class="flex gap-8">
                <img
                  src="@/assets/images/svg/card-icon.svg"
                  alt="card-icon"
                  class="h-5"
                />
                <div class="flex gap-2 items-center">
                  <p
                    class="custom-text-base text-custom-darkgreen font-semibold"
                  >
                    **** 4321
                  </p>
                  <p class="custom-text-sm text-custom-darkgreen font-medium">
                    01/23
                  </p>
                </div>
              </div>
              <div class="w-12 h-12 flex justify-center items-center">
                <img
                  src="@/assets/images/svg/UI/iconActive.svg"
                  alt="iconActive"
                  v-show="paymentActive"
                />
                <img
                  src="@/assets/images/svg/UI/iconNonActive.svg"
                  alt="iconActive"
                  v-show="!paymentActive"
                />
              </div>
            </div>
            <div
              class="h-[188px] border-dashed border-4 border-custom-lightgreen rounded-xl flex flex-col items-center justify-center hover:cursor-pointer"
              @click="openModalWindow()"
            >
              <div
                class="flex items-center justify-center rounded-full p-3 border-2 border-custom-lightgreen"
              >
                <img
                  src="@/assets/images/svg/UI/plus.svg"
                  alt="plus"
                  class="h-5"
                />
              </div>
              <p class="custom-text-xs text-custom-darkgray font-medium">
                {{ $t("FlightBooking.Payment.button") }}
              </p>
            </div>
          </section>
          <CustomModalWindow
            :isOpen="openWindow"
            @close-window="closeModalWindow()"
          >
            <CustomAddPayment @close-window="closeModalWindow()" />
          </CustomModalWindow>
        </div>
        <!-- Card -->
        <section
          class="max-w-[450px] w-full h-fit p-6 shadow-xl rounded-xl flex flex-col gap-4"
        >
          <div class="flex gap-6">
            <img
              src="@/assets/images/png/Flight/EmiratesPicture.png"
              alt="EmiratesPicture"
            />
            <div class="flex flex-grow flex-col justify-between">
              <div class="flex flex-col">
                <p class="custom-text-base text-custom-darkgray font-medium">
                  {{ $t("FlightBooking.Card.economyClass") }}
                </p>
                <h1 class="text font-semibold">Emirates A380 Airbus</h1>
              </div>
              <div class="flex gap-2 items-center">
                <CustomButtom
                  class="h-8 p-3 border-custom-lightgreen border-2 rounded-md flex justify-center items-center"
                >
                  <p class="text font-semibold">4.5</p>
                </CustomButtom>
                <div class="flex gap-1">
                  <p class="text font-semibold">
                    {{ $t("FlightBooking.Card.rate") }}
                  </p>
                  <p class="text font-medium">54</p>
                  <p class="text font-medium">
                    {{ $t("FlightBooking.Card.reviews") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div>
            <p class="h-5 custom-text-base text-custom-darkgreen font-medium">
              {{ $t("FlightBooking.Card.title") }}
              <span class="font-semibold">gologe</span>
            </p>
          </div>
          <div class="line"></div>
          <p class="h-5 custom-text-base text-custom-darkgreen font-semibold">
            {{ $t("FlightBooking.Card.priceDetails") }}
          </p>
          <div class="price-wrapper">
            <p class="price-text">
              {{ $t("FlightBooking.Card.baseFare") }}
            </p>
            <p class="price-number">$400</p>
          </div>
          <div class="price-wrapper">
            <p class="price-text">
              {{ $t("FlightBooking.Card.discount") }}
            </p>
            <p class="price-number">$400</p>
          </div>
          <div class="price-wrapper">
            <p class="price-text">
              {{ $t("FlightBooking.Card.taxes") }}
            </p>
            <p class="price-number">$400</p>
          </div>
          <div class="price-wrapper">
            <p class="price-text">
              {{ $t("FlightBooking.Card.serviceFree") }}
            </p>
            <p class="price-number">$400</p>
          </div>
          <div class="line"></div>
          <div class="price-wrapper">
            <p class="price-text">
              {{ $t("FlightBooking.Card.total") }}
            </p>
            <p class="price-number">$400</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TicketCard from "@/components/cards/Ticket.vue";
import { scrollTop } from "@/services/Scroll";
import { ref } from "vue";

const paysActive = ref<boolean>(false);
const paymentActive = ref<boolean>(false);
const openWindow = ref<boolean>(false);

const openModalWindow = () => {
  openWindow.value = true;
};

const closeModalWindow = () => {
  openWindow.value = false;
};

const paymentSelectBar = () => {
  paymentActive.value = !paymentActive.value;
};
const paysSelectBar = (value: boolean) => {
  paysActive.value = value;
};

scrollTop();
</script>

<style lang="scss" scoped>
@mixin font {
  @apply font-serrat;
}
// Pays
.content-wrapper {
  @apply rounded-xl p-4 flex justify-between hover:cursor-pointer;

  .content-text-wrapper {
    @apply flex flex-col flex-grow justify-between;

    .content-title {
      @include font();
      @apply text-base text-custom-darkgreen font-semibold;
    }
    .content-text {
      @include font();
      @apply text-sm text-custom-darkgreen font-medium;
    }
  }

  .image-wrapper {
    @apply w-12  flex justify-center items-center;
  }
}
// Card

.line {
  @apply w-full border-t border-custom-darkgreen opacity-25;
}
.text {
  @include font();
  @apply text-xs text-custom-darkgreen;
}
.price-wrapper {
  @apply h-5 flex justify-between;
  .price-text {
    @include font();
    @apply text-base text-custom-darkgreen font-medium;
  }
  .price-number {
    @include font();
    @apply text-base text-custom-darkgreen font-semibold;
  }
}
</style>
