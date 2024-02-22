import { defineAsyncComponent } from 'vue'

const Navigation = defineAsyncComponent(
	() => import("./Navigation.vue")
)

const MyLocalization = defineAsyncComponent(
	() => import("./MyLocalization.vue")
)


export default {
	Navigation,
	MyLocalization,
}