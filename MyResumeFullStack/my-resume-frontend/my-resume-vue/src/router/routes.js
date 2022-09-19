import Home from '../views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () =>
      import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]
