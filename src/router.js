import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home';
import App from './views/App';
import Technician from './views/Technician';
import Researcher from './views/Researcher';
import Landing from './views/Landing';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		// {
		// 	path: '',
		// 	name: 'home',
		// 	component: Home,
		// },
		{
			path: '/',
			name: 'landing',
			component: Landing,
		},
		{
			path: 'login',
			name: 'login',
			component: Login,
		},
		{
			path: '/app/',
			component: App,
			children: [
				// {
				// 	path: 'technician',
				// 	name: 'technician',
				// 	component: L,
				// },
				{
					path: 'technician',
					name: 'technician',
					component: Technician,
				},
				{
					path: 'researcher',
					name: 'researcher',
					component: Researcher,
				},
			],
		},
	],
});
