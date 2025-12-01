import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
// Import the pages
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/cart',
            name: 'ShoppingCartPage',
            component: ShoppingCartPage
        },
        {
            path: '/products',
            name: 'ProductsPage',
            component: ProductsPage
        },
        {
            path: '/product/:id',
            name: 'ProductDetailPage',
            component: ProductDetailPage
        }
    ]
}))
.mount('#app')
