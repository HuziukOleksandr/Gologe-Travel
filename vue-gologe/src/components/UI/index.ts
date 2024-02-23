import { defineAsyncComponent } from 'vue'

const CustomNavigation = defineAsyncComponent(
	() => import("./CustomNavigation.vue")
)

const CustomLocalization = defineAsyncComponent(
	() => import("./CustomLocalization.vue")
)

const CustomButtonWithImage = defineAsyncComponent(
	() => import("./CustomButtonWithImage.vue")
)

const CustomInput = defineAsyncComponent(
	() => import("./CustomInput.vue")
)

export default {
	CustomNavigation,
	CustomLocalization,
	CustomButtonWithImage,
	CustomInput
}