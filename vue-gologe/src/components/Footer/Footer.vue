<template>
    <!-- Footer Wrapper Start -->
    <div class="wrapper_footer">
        <!-- Use Subcribe Component -->
        <Subscribe class="subscribe" />

        <!-- Footer Container wrapper Start -->
        <div class="wrapper_container">
            <!-- Wrapper for Logo and Images Start -->
            <div class="wrapper_aside">
                <!-- Use logo Component -->
                <img
                    src="@/assets/images/logo-footer.svg"
                    alt="logo"
                    class="logo"
                    @click="$router.push({ name: 'Landing' })"
                />

                <!-- Images wrapper Start -->
                <div class="wrapper_images">
                    <!-- Image Facebook -->
                    <img
                        src="@/assets/images/facebook.svg"
                        alt="facebook"
                        class="w-[24px]"
                    />

                    <!-- Image Twitter -->
                    <img
                        src="@/assets/images/twitter.svg"
                        alt="twitter"
                        class="w-[24px]"
                    />

                    <!-- Image YouTube -->
                    <img
                        src="@/assets/images/youtube.svg"
                        alt="youtube"
                        class="w-[24px]"
                    />

                    <!-- Image Instagram -->
                    <img
                        src="@/assets/images/instagram.svg"
                        alt="instagram"
                        class="w-[24px]"
                    />
                </div>
                <!-- Images wrapper End -->
            </div>
            <!-- Wrapper for Logo and Images End -->

            <!-- Wrapper for Content Start -->
            <div class="wrapper_content">
                <!-- Use Destination Component  -->
                <Destination />

                <!-- Use Activities Component -->
                <Activities />

                <!-- Use Blogs Component -->
                <Blogs />

                <!-- Use About Us Component -->
                <AboutUs />
            </div>
            <!-- Wrapper for Content End -->
        </div>
        <!-- Footer Container wrapper End -->
    </div>
    <!-- Footer Wrapper End -->
</template>

<script setup lang="ts">
import Subscribe from "./Subscribe.vue";
import Destination from "./Destination.vue";
import Activities from "./Activities.vue";
import Blogs from "./Blogs.vue";
import AboutUs from "./AboutUs.vue";
</script>

<style scoped>
.wrapper_footer {
    @apply w-full min-h-[420px] m-auto mt-[150px] pb-[64px]
	bg-buttonGreen  
	flex flex-col justify-between
	md:px-[50px] 
	sm:px-[25px];
}

.subscribe {
    @apply mt-[-150px];
}

.wrapper_container {
    @apply max-w-[1230px] w-full min-h-[140px] mx-auto py-[50px] 
	flex justify-between gap-[20px]
	lg:gap-[100px] 
	sm:flex-col sm:items-center;
}

.wrapper_aside {
    @apply min-w-[120px] 
	flex flex-col gap-[25px] 
	sm:flex-row sm:gap-[5px];
}

.wrapper_images {
    @apply min-w-[100px] 
	flex justify-between 
	sm:gap-[4px] sm:flex-wrap sm:h-[55px];
}

.wrapper_content {
    @apply w-full 
	flex justify-between flex-wrap gap-[20px] 
	sm:justify-center sm:hidden;
}

.logo:hover {
    transition-duration: 500ms;
    cursor: pointer;
    transform: scale(1.02);
}
</style>
