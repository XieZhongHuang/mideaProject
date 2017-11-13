import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/home.vue'
import CreateSRComponent from '../components/create_service_request/create_service_request.vue'
import CreateSrComponent from '../components/create_SR/create_SR.vue'
import CreateCustomerComponent from '../components/create_cust/create_cust.vue'
import CustomerListComponent from '../components/customer_list/customer_list.vue'
import CustomerDetialComponent from '../components/customer_list/customer_detial/customer_detial.vue'
import LoginComponent from '../components/login/login.vue'
import CreateClaimComponent from '../components/create_claim/create_claim.vue'
import EditCustomerIbSrComponent from '../components/edit_customerIbSr/edit_customerIbSr.vue'
import PartsOnhandInquiryTransactionHistoryComponent from '../components/parts_onhand_inquiryTransaction_history/parts_onhand_inquiryTransaction_history.vue'

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
				},
				{
					path: '/iService Portal',
					name: 'iServicePortal',
					component: CreateSRComponent
				},
				{
					path: '/Home',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Search cust & IB',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Create IB',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Settings',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Create SR',
					name: 'CreateSR',
					component: CreateSrComponent
				},
				{
					path: '/Edit Customer/IB/SR',
					name: 'EditCustomerIbSr',
					component: EditCustomerIbSrComponent
				},
				{
					path: '/Processing current SR',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Service Request List',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/1.Service Request',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Inventory',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Parts onhand inquiry&transaction history',
					name: 'parts_onhand_inquiryTransaction_history',
					component: PartsOnhandInquiryTransactionHistoryComponent
				},
				{
					path: '/purchase order&receiving',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Subinventory transfer&transact history',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Parts transaction history',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Parts reciving/allocating',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Claim',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Create claim',
					name: 'CreateCustomer',
					component: CreateClaimComponent
				},
				{
					path: '/Claim list',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Reports',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/Customer List',
					name: 'CustomerList',
					component:CustomerListComponent
				},
				{
					path:'/customer detial',
					name:'customerDetial',
					component:CustomerDetialComponent
				},
				{
					path: '/Install base list',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/BOM list',
					name: 'CreateCustomer',
					component: CreateSRComponent
				},
				{
					path: '/',
					name: 'CreateCustomer',
					component: CreateSRComponent
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
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router