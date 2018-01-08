import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import ES6Promise from 'es6-promise';

import Constant from '../Constant';

ES6Promise.polyfill();
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        signCurrent : false,
        profil : {
            name : sessionStorage.getItem('nickname'),
            email : sessionStorage.getItem('email'),
            password : sessionStorage.getItem('password'),
            date : sessionStorage.getItem('date')
        }
    },
    mutations: {
        [Constant.SIGN_CHECK] : (state, payload) => {
            state.signCurrent = payload;
        }
    }
});

export default store;