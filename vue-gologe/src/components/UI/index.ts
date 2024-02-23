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


export default {
	CustomNavigation,
	CustomLocalization,
	CustomButtonWithImage
}