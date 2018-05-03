import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import BusinessOrder from '../pages/BusinessOrder.vue'
import ProxyOrder from '../pages/ProxyOrder.vue'

Vue.use(Router)

export default new Router({
	// mode: 'history',
	routes: [{
		path: '/',
		name: 'BusinessOrder',
		component: BusinessOrder,
		alias: 'business'
	},{
		path: '/po',
		name: 'ProxyOrder',
		component: ProxyOrder
	}]
})