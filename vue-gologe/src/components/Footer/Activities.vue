<template>
    <!-- Activites wrapper Start -->
    <div class="flex flex-col gap-[15px]">
        <!-- Blogs Title Start -->
        <h1 class="custom-text-base font-bold text-green">
            {{ $t("Footer.ourActivities") }}
        </h1>
        <!-- Blogs Title End -->

        <!-- Content wrapper Start -->
        <div class="w-[170px] flex flex-col gap-[10px]">
            <!-- Router link "Northern Lights" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Activities.NorthernLights") }}
            </router-link>
            <!-- Router link "Northern Lights" End -->

            <!-- Router link "Cruising Sailing" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Activities.CruisingSailing") }}
            </router-link>
            <!-- Router link "Cruising Sailing" End -->

            <!-- Router link "Multi Activities" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Activities.MultiActivities") }}
            </router-link>
            <!-- Router link "Multi Activities" End -->

            <!-- Router link "Kayaing" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Activities.Kayaing") }}
            </router-link>
            <!-- Router link "Kayaing" End -->
        </div>
        <!-- Content wrapper End -->
    </div>
    <!-- Activites wrapper End -->
</template>
