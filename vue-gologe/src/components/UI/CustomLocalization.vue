<template>
    <!-- Drop-dawn localization Start -->
    <TransitionGroup>
        <!-- Localization wraper Start -->
        <div
            class="w-[39px] p-[7px] flex flex-col gap-[10px] rounded-[5px] absolute"
            v-if="props.dialogVisible"
            v-click-away="onClickAway"
        >
            <!-- Image EN flag -->
            <img
                src="@/assets/images/EN.svg"
                alt="Flag EN"
                class="image"
                @click="close('EN')"
                v-if="locale != 'EN'"
            />

            <!-- Image UA flag -->
            <img
                src="@/assets/images/UA.svg"
                alt="Flag UA"
                class="image"
                @click="close('UA')"
                v-else
            />
        </div>
        <!-- Localization wraper End -->
    </TransitionGroup>
    <!-- Drop-dawn localization End -->
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

// Props for open expected "true" or ""false
const props = withDefaults(
    defineProps<{
        dialogVisible: boolean;
    }>(),
    {}
);

let language = ref("EN");
const { locale } = useI18n();

// Set language value in storage
localStorage.setItem("language", language.value);
const emit = defineEmits(["closeWindow"]);

// Method Close
const close = (item: string) => {
    emit("closeWindow");
    language.value = item;
    change(item);
};

// Method Change
const change = (item: string) => {
    localStorage.setItem("language", item);
    if (locale.value != item) {
        locale.value = item;
    }
};

// On Click Away for Close
const onClickAway = () => {
    emit("closeWindow");
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.image {
    @apply w-[25px] rounded-[4px] hover:cursor-pointer hover:scale-105 transition duration-200;
}
</style>
