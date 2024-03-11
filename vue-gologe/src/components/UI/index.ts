import { defineAsyncComponent } from 'vue'

const CustomNavigation = defineAsyncComponent(
	() => import("./CustomNavigation.vue")
)

const CustomLocalization = defineAsyncComponent(
	() => import("./CustomLocalization.vue")
)

const CustomInput = defineAsyncComponent(
	() => import("./CustomInput.vue")
)

const CustomLogo = defineAsyncComponent(
	() => import("./CustomLogo.vue")
)

const CustomButton = defineAsyncComponent(
	() => import("./CustomButton.vue")
)

const CustomInputList = defineAsyncComponent(
	() => import("./CustomInputList.vue")
)

export default {
	CustomNavigation,
	CustomLocalization,
	CustomInput,
	CustomLogo,
	CustomButton,
	CustomInputList
}