import Vue from 'vue';
import App from './App.vue';
import mixins from './plugins/mixins';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import SnackbarMessage from './components/snackbar/SnackbarMessage';
import VueI18n from 'vue-i18n';
import i18n from './i18n';
import vuetify from './plugins/vuetify';

Vue.use(mixins);
Vue.use(SnackbarMessage);
Vue.use(VueResource);

Vue.use(VueI18n);

Vue.use(vuetify, {
	options: {
		customProperties: true,
	},
	iconfont: 'mdi',
});
Vue.config.productionTip = false;

var username = 'AVtO_L0aN_8f234_Ssmeiq';
var password = '&*sk92jf8.1521aydd3810bx742n54kiygh2';
var credentials = btoa(username + ':' + password);
var basicAuth = 'Basic ' + credentials;

Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['Authorization'] = basicAuth;
// Vue.http.headers.common['token'] = store.getters.token;
// Vue.http.headers.common['app-version'] = 'w0.0.1';
// Vue.http.headers.common['device-id'] = store.getters.deviceId;
// Vue.http.headers.common['lang'] = store.getters.apiLocale;
Vue.http.options.root = store.getters.apiUrl;
new Vue({
	router,
	store,
	i18n,
	vuetify,
	render: h => h(App),
}).$mount('#app');
