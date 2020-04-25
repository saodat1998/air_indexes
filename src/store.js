import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		authorized: false,
		apiUrl: '#',
		message: '',
		color: '',
	},
	getters: {
		authorized: state => state.authorized,
		apiUrl: state => {
			return state.apiUrl;
		},
		message: state => state.message,
		color: state => state.color,
	},
	mutations: {
		authorized(state, authorized) {
			state.authorized = authorized;
		},
		errorMessage(state, errorMessage) {
			state.message = errorMessage;
			state.color = 'error';
		},
		successMessage(state, successMessage) {
			state.message = successMessage;
			state.color = 'success';
		},
		infoMessage(state, infoMessage) {
			state.message = infoMessage;
			state.color = 'info';
		},
		message(state, message) {
			state.message = message;
		},
		color(state, color) {
			state.color = color;
		},
	},
});
