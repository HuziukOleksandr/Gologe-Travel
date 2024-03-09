import {createRouter, createWebHistory} from 'vue-router'
import Header from '../components/Header/Header.vue'
import Landing from '../view/Landing.vue'
import Flight from '../view/Flight.vue'
import Hotel from '../view/Hotel.vue'
import Account from '../view/Account.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
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
	}
]

const router = createRouter({
	history: createWebHistory(), 
	routes
})

export default router