import Vue from 'vue';
import App from './App';
import store from './store';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import ContactList from './components/ContactList.vue';
import ContactForm from './components/ContactForm.vue';
import UpdatePhoto from './components/UpdatePhoto.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes : [
		{path : '/', redirect : '/home'},
		{path : '/home', name : 'home', component : Home},
		{path : '/about', name : 'about', component : About},
		{
			path : '/contacts', name : 'contacts', component : ContactList, children : [
				{path : 'add', name : 'addcontact', component : ContactForm},
				{path : 'update/:no', name : 'updatecontact', component : ContactForm, props : true},
				{path : 'photo/:no', name : 'updatephoto', component : UpdatePhoto, props : true}
			]
		}
	]
});

new Vue({
	store,
	router,
	el: '#app',
	template: '<App/>',
	components: { App }
});
