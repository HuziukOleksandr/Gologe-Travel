<template>
    <!-- Custom Upload File componemt wrapper Start -->
    <form class="flex items-center gap-[5px] px-[16px]">
        <!-- Input with type="file" and style="hidden" -->
        <input
            id="checkboxId"
            type="file"
            class="w-[20px] h-[20px] rounded-[4px] border-2 border-green border-solid cursor-pointer"
        />

        <!-- Label for displaying input Start  -->
        <label
            for="checkboxId"
            class="custom-text-base font-bold cursor-pointer flex items-center gap-[5px]"
        >
            <!-- Image for input -->
            <img
                src="@/assets/images/svg/UIupload-file.svg"
                alt="checked"
                class="w-[20px] h-[20px]"
            />
            <!-- Slot for Image or something else -->
            <slot></slot>
        </label>
        <!-- Label for displaying input End  -->
    </form>
    <!-- Custom Upload File componemt wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
#checkboxId {
    display: none;
}
#checkboxId:checked {
    display: block;
}
#checkboxId:checked ~ label img {
    display: none;
}
</style>
