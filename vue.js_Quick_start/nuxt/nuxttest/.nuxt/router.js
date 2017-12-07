import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3927777a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _299ef472 = () => import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages\\contacts\\index" */).then(m => m.default || m)
const _1ff2e8d6 = () => import('..\\pages\\contacts\\_no.vue' /* webpackChunkName: "pages\\contacts\\_no" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _3927777a,
			name: "index"
		},
		{
			path: "/contacts",
			component: _299ef472,
			name: "contacts"
		},
		{
			path: "/contacts/:no",
			component: _1ff2e8d6,
			name: "contacts-no"
		}
    ],
    fallback: false
  })
}
