<template>
    <!-- Account Component wrapper Start -->
    <div
        class="relative max-w-[1230px] w-full min-h-[700px] pt-[50px] flex flex-col gap-[40px] mb-[120px]"
    >
        <!-- Account Preview wrapper Start -->
        <div class="w-full h-[350px] rounded-[12px] flex relative mb-[165px]">
            <!-- Preview Image -->
            <img
                class="w-full h-full"
                src="@/assets/images/John-background.png"
                alt=""
            />

            <!-- Button Upload File Start -->
            <CustomUploadFile
                class="absolute right-[25px] bottom-[25px] h-[50px] bg-buttonGreen rounded-[8px]"
            >
                {{ $t("Account.upload") }}
            </CustomUploadFile>
            <!-- Button Upload File End -->

            <!-- User Info wrapper Start -->
            <div class="user_wrapper">
                <!-- User image wrapper Start -->
                <div
                    class="w-[160px] h-[160px] rounded-[50%] mb-[24px] border-solid border-red border-[3px] flex justify-end items-end"
                >
                    <!-- Button Upload Ures Image Start -->
                    <CustomButton
                        class="p-[10px] bg-red rounded-[50%] flex justify-center items-center"
                    >
                        <!-- Button Image -->
                        <img src="@/assets/images/Pen.svg" alt="Pen" />
                    </CustomButton>
                    <!-- Button Upload Ures Image End -->
                </div>
                <!-- User image wrapper End -->

                <!-- User Name Start -->
                <h1 class="custom-text-2xl font-bold mb-[8px]">John Doe.</h1>
                <!-- User Name End -->

                <!-- User Email Start -->
                <h2 class="custom-text-base text-gray">john.doe@gmail.com</h2>
                <!-- User Email End -->
            </div>
            <!-- User Info wrapper End -->
        </div>
        <!-- Account Preview wrapper End -->

        <!-- Account Header Navigation Start -->
        <div class="w-full flex flex-col gap-[40px] rounded-[16px] shadow-xl">
            <!-- Buttons Navigation wrapper Start -->
            <div class="w-full h-[80px] flex justify-between items-center">
                <!-- Use Custom Button "Account" Start -->
                <CustomButton
                    class="button"
                    :class="{ active: selectedTab === 'Account' }"
                    @click="changeTab('Account')"
                >
                    {{ $t("Account.account") }}
                </CustomButton>
                <!-- Use Custom Button "Account" End -->

                <!-- Line Start -->
                <div class="w-[1px] h-[48px] bg-gray"></div>
                <!-- Line End -->

                <!-- Use Custom Button "History" Start -->
                <CustomButton
                    class="button custom-text-base"
                    :class="{ active: selectedTab === 'History' }"
                    @click="changeTab('History')"
                >
                    {{ $t("Account.history") }}
                </CustomButton>
                <!-- Use Custom Button "History" End -->

                <!-- Line Start -->
                <div class="w-[1px] h-[48px] bg-gray"></div>
                <!-- Line End -->

                <!-- Use Custom Button "Payment" Start -->
                <CustomButton
                    class="button custom-text-base"
                    :class="{ active: selectedTab === 'Payment' }"
                    @click="changeTab('Payment')"
                >
                    {{ $t("Account.payment") }}
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

        <!-- Teleport Custom Modal Window Start -->
        <Teleport to="#main">
            <!-- Use Custom Modal Window Start -->
            <CustomModalWindow
                v-if="isOpen == true"
                @close-window="close"
                class="absolute"
            />
        </Teleport>
        <!-- Teleport Custom Modal Window End -->
    </div>
    <!-- Account Component wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import Info from "./Info/Info.vue";
import History from "./History/History.vue";
import Payment from "./Payment/Payment.vue";

const selectedTab = ref<string>("Account");

let isOpen = ref<bolean>();

// Method Change Tab
const changeTab = (type: string) => {
    selectedTab.value = type;
};

// Method Close
const close = () => {
    isOpen.value = false;
};

// Method Open
const open = () => {
    isOpen.value = true;
};
</script>

<style scoped>
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
    @apply relative font-bold
	max-w-[360px] w-full h-full px-[24px];
}
</style>
