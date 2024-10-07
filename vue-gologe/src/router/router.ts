import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import Header from "@/components/Header/Header.vue";
import Landing from "@/view/LandingView.vue";
import Flight from "@/view/FlightViews/FlightView.vue";
import FlightListing from "@/view/FlightViews/ListingView.vue";
import FlightDetails from "@/view/FlightViews/FlightDetailsView.vue";
import BookingDetails from "@/view/FlightViews/BookingDetailsView.vue";
import Hotel from "@/view/HotelViews/HotelView.vue";
import Account from "@/view/AccountView.vue";
import Login from "@/view/AuthViews/LoginView.vue";
import Register from "@/view/AuthViews/RegisterView.vue";
import ForgotPassword from "@/view/AuthViews/ForgotPasswordView.vue";
import Verify from "@/view/AuthViews/VerifyView.vue";
import ChangePassword from "@/view/AuthViews/ChangePasswordView.vue";
import AddPayment from "@/view/AuthViews/AddPaymentView.vue";
import Footer from "@/components/Footer/Footer.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    components: {
      Header,
      default: Landing,
      Footer,
    },
  },
  {
    path: "/flight",
    name: "Flight",
    components: {
      Header,
      default: Flight,
      Footer,
    },
  },
  {
    path: "/flight/listing",
    name: "Listing",
    components: {
      Header,
      default: FlightListing,
      Footer,
    },
  },
  {
    path: "/flight/listing/details",
    name: "FlightDetails",
    components: {
      Header,
      default: FlightDetails,
      Footer,
    },
  },
  {
    path: "/flight/listing/details/booking",
    name: "BookingDetails",
    components: {
      Header,
      default: BookingDetails,
      Footer,
    },
  },
  {
    path: "/hotel",
    name: "Hotel",
    components: {
      Header,
      default: Hotel,
      Footer,
    },
  },
  {
    path: "/account",
    name: "Account",
    components: {
      Header,
      default: Account,
      Footer,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      Header,
      default: Login,
      Footer,
    },
  },
  {
    path: "/register",
    name: "Register",
    components: {
      Header,
      default: Register,
      Footer,
    },
  },
  {
    path: "/login/forgotpassword",
    name: "ForgotPassword",
    components: {
      Header,
      default: ForgotPassword,
      Footer,
    },
  },
  {
    path: "/login/forgotpassword/verify",
    name: "Verify",
    components: {
      Header,
      default: Verify,
      Footer,
    },
  },
  {
    path: "/login/forgotpassword/verify/changepassword",
    name: "ChangePassword",
    components: {
      Header,
      default: ChangePassword,
      Footer,
    },
  },
  {
    path: "/register/addpayment",
    name: "AddPayment",
    components: {
      Header,
      default: AddPayment,
      Footer,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next();
    } else {
      alert("vvvovoovo")
      next("/register")
    }
  } else {
    next();
  }
}) 

export default router;
