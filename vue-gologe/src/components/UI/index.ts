// File with imports for all UI components
import { defineAsyncComponent } from "vue";

const CustomNavigation = defineAsyncComponent(
    () => import("./CustomNavigation.vue")
);

const CustomLocalization = defineAsyncComponent(
    () => import("./CustomLocalization.vue")
);

const CustomInput = defineAsyncComponent( 
	() => import("./CustomInput.vue")
);

const CustomLogo = defineAsyncComponent(
	() => import("./CustomLogo.vue")
);

const CustomButton = defineAsyncComponent(
	() => import("./CustomButton.vue")
);

const CustomInputList = defineAsyncComponent(
    () => import("./CustomInputList.vue")
);

const CustomCarousel = defineAsyncComponent(
    () => import("./CustomCarousel.vue")
);

const CustomCheckbox = defineAsyncComponent(
    () => import("./CustomCheckbox.vue")
);

const CustomInputPassword = defineAsyncComponent(
    () => import("./CustomInputPassword.vue")
);

const CustomUploadFile = defineAsyncComponent(
    () => import("./CustomUploadFile.vue")
);

const CustomModalWindow = defineAsyncComponent(
    () => import("./CustomModalWindow.vue")
);

const CustomFlightSearch = defineAsyncComponent(
    () => import("./CustomFlightSearch.vue")
);

const CustomPlaceSearch = defineAsyncComponent(
    () => import("./CustomPlaceSearch.vue")
);

const CustomAddPayment = defineAsyncComponent(
    () => import("./CustomAddPayment.vue")
);

const CustomLoginWith = defineAsyncComponent(
    () => import("./CustomLoginWith.vue")
)

const CustomRegisterWith = defineAsyncComponent(
    () => import("./CustomLoginWith.vue")
)
const CustomErrorWindow = defineAsyncComponent(
    () => import("./CustomErrorWindow.vue")
)
export default {
    CustomNavigation,
    CustomLocalization,
    CustomInput,
    CustomLogo,
    CustomButton,
    CustomInputList,
    CustomCarousel,
    CustomCheckbox,
    CustomInputPassword,
    CustomUploadFile,
    CustomModalWindow,
    CustomFlightSearch,
    CustomPlaceSearch,
    CustomAddPayment,
    CustomLoginWith,
    CustomRegisterWith,
    CustomErrorWindow,
};
