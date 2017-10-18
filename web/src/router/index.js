import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/home.vue'
import CreateSRComponent from '../components/create_service_request/create_service_request.vue'
import CreateCustomerComponent from '../components/create_customer/create_customer.vue'
import LoginComponent from '../components/login/login.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path:'/',
			name:'home',
			component:HomeComponent,
			children:[
				{
					path: '/Create Service Request',
					name: 'CreateSR',
					component: CreateSRComponent
				},
				{
					path: '/Create Cust',
					name: 'CreateCustomer',
					component: CreateCustomerComponent
				}
			]

		},
		{
			path: '/login',
			name: 'login',
			component: LoginComponent
		}
	]
});
// 对将要进入的路由进行权判断
router.beforeEach((to, from, next) =>{
	// console.log(to);
	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
		router.replace('login');
		next();
	} 
	next();
})

export default router