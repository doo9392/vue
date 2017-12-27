import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Introduce from '../components/Introduce'
import QnA from '../components/QnA'
import NotFound from '../components/NotFound'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {path : '/', name : 'Home', component : Home},
    {path : '/introduce', name : 'Introduce', component : Introduce,
      beforeEnter : (to, from, next) => {
        alert('준비중입니다.');

        next('/');
      }
    },
    {path : '/portfolio', name : 'Portfolio', component : Portfolio},
    {path : '/QnA', name : 'QnA', component : QnA,
      beforeEnter : (to, from, next) => {
        alert('준비중입니다.');

        next('/');
      }
    },
    {path : '*', name : 'NotFound', component : NotFound},
  ]
})
