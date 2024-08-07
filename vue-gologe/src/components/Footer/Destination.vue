<template>
    <!-- Destination wrapper Start -->
    <div class="flex flex-col gap-[15px] min-h-[150px]">
        <!-- Dectination Title Start -->
        <h1 class="custom-text-base font-bold text-green">
            {{ $t("Footer.ourDestination") }}
        </h1>
        <!-- Dectination Title End -->

        <!-- Router Link wrapper Start -->
        <div class="w-[170px] flex flex-col gap-[10px]">
            <!-- Router link Cauntry Canada Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Destination.Canada") }}
            </router-link>
            <!-- Router link Cauntry Canada End -->

            <!-- Router link Cauntry Alaska Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Destination.Alaska") }}
            </router-link>
            <!-- Router link Cauntry Alaska End -->

            <!-- Router link Cauntry France Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Destination.France") }}
            </router-link>
            <!-- Router link Cauntry France End -->

            <!-- Router link Cauntry Iceland Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Destination.Iceland") }}
            </router-link>
            <!-- Router link Cauntry Iceland End -->
        </div>
        <!-- Router Link wrapper End -->
    </div>
    <!-- Destination wrapper End -->
</template>

<script setup lang="ts"></script>
