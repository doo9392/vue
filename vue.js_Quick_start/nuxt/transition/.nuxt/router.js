import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _32a39efa = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _2b2f2adb = () => import('..\\pages\\contacts.vue' /* webpackChunkName: "pages\\contacts" */).then(m => m.default || m)
const _39b86fcd = () => import('..\\pages\\contacts\\_no\\index.vue' /* webpackChunkName: "pages\\contacts\\_no\\index" */).then(m => m.default || m)



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
			component: _32a39efa,
			name: "index"
		},
		{
			path: "/contacts",
			component: _2b2f2adb,
			name: "contacts",
			children: [
				{
					path: ":no",
					component: _39b86fcd,
					name: "contacts-no"
				}
			]
		}
    ],
    fallback: false
  })
}
