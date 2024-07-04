<template>
    <!-- Blogs wrapper Start -->
    <div class="w-[170px] flex flex-col gap-[15px]">
        <!-- Blogs Title Start -->
        <h1 class="custom-text-base font-bold text-green">
            {{ $t("Footer.travelBlogs") }}
        </h1>
        <!-- Blogs Title End -->

        <!-- Content wrapper Start -->
        <div class="flex flex-col gap-[10px]">
            <!-- Router link "Bali" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Blogs.Bali") }}
            </router-link>
            <!-- Router link "Bali" End -->

            <!-- Router link "Sri Lanks" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Blogs.SriLanks") }}
            </router-link>
            <!-- Router link "Sri Lanks" End -->

            <!-- Router link "Peru" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Blogs.Peru") }}
            </router-link>
            <!-- Router link "Peru" End -->

            <!-- Router link "Dubai" Start -->
            <router-link to="#" class="custom-text-sm h-[17px] text-gray">
                {{ $t("Footer.Blogs.Dubai") }}
            </router-link>
            <!-- Router link "Dubai" End -->
        </div>
        <!-- Content wrapper Утв -->
    </div>
    <!-- Blogs wrapper End -->
</template>
