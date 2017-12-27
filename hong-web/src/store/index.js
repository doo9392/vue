import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import ES6Promise from 'es6-promise';

ES6Promise.polyfill();
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        Portfolios : {}
    },
    fetchPortfolis() {
        this.axios.get('/JSON/PORTFOLIO.json')
    }
})

export default store;