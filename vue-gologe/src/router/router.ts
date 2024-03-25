import {createRouter, createWebHistory} from 'vue-router'
import Header from '../components/Header/Header.vue'
import Landing from '../view/LandingView.vue'
import Flight from '../view/FlightView.vue'
import Hotel from '../view/HotelView.vue'
import Account from '../view/AccountView.vue'
import Login from '../view/LoginView.vue'
import Register from '../view/RegisterView.vue'
import ForgotPassword from '../view/ForgotPasswordView.vue'
import Verify from '../view/VerifyView.vue'
import ChangePassword from '../view/ChangePasswordView.vue'
import AddPayment from '../view/AddPaymentView.vue'
import Footer from '../components/Footer/Footer.vue'
 

const routes = [
	{
		path: '/', 
		name: 'Landing',
		components: {
			Header,
			default: Landing,	
			Footer
		}
	},
	{
		path: '/flight', 
		name: 'Flight',
		components: {
			Header,
			default: Flight,
			Footer
		}
	},
	{
		path: '/hotel', 
		name: 'Hotel',
		components: {
			Header,
			default: Hotel,
			Footer
		}
	},
	{
		path: '/account', 
		name: 'Account',
		components: {
			Header,
			default: Account,
			Footer
		}
	},
	{
		path: '/login', 
		name: 'Login',
		components: {
			Header,
			default: Login,
			Footer
		}
	},
	{
		path: '/register', 
		name: 'Register',
		components: {
			Header,
			default: Register,
			Footer
		}
	},
	{
		path: '/forgotpassword', 
		name: 'ForgotPassword',
		components: {
			Header,
			default: ForgotPassword,
			Footer
		}
	},
	{
		path: '/verify',
		name: 'Verify',
		components: {
			Header,
			default: Verify,
			Footer
		}
	},
	{
		path: '/changepassword',
		name: 'ChangePassword',
		components: {
			Header,
			default: ChangePassword,
			Footer
		}
	},
	{
		path: '/addpayment',
		name: 'AddPayment',
		components: {
			Header,
			default: AddPayment,
			Footer
		}
	}
]

const router = createRouter({
	history: createWebHistory(), 
	routes
})

export default router