const Home = () => import(/* webpackChunkName: "group-foo" */ 'views/home')
const User = () => import(/* webpackChunkName: "group-foo" */ 'views/user')
const Shop = () => import(/* webpackChunkName: "group-foo" */ 'views/shop')
const ShopAdd = () => import(/* webpackChunkName: "group-foo" */ 'views/shop_add')
const Food = () => import(/* webpackChunkName: "group-foo" */ 'views/food')
const FoodAdd = () => import(/* webpackChunkName: "group-foo" */ 'views/food_add')
const Chart = () => import(/* webpackChunkName: "group-foo" */ 'views/chart')
const Edit = () => import(/* webpackChunkName: "group-foo" */ 'views/edit')
const Explain = () => import(/* webpackChunkName: "group-foo" */ 'views/explain')
const Login = () => import(/* webpackChunkName: "group-foo" */ 'views/login')
const Register = () => import(/* webpackChunkName: "group-foo" */ 'views/register')
const Set = () => import(/* webpackChunkName: "group-foo" */ 'views/set')
const Administrator = () => import(/* webpackChunkName: "group-foo" */ 'views/administrator')
const Order = () => import(/* webpackChunkName: "group-foo" */ 'views/order')
const ShopModify = () => import(/* webpackChunkName: "group-foo" */ 'views/shop_modify')
const Error = () => import(/* webpackChunkName: "group-foo" */ 'views/error')
export default [
  {
    path:'/',
    redirect: '/home'
  },
  {
     path: '/home',
     component: Home,
     name: 'home'
  },
  {
      path:'/user',
      component: User,
      name: 'user'
  },
  {
       path: '/shop',
       component: Shop,
       name: 'shop'
  },
  {
       path: '/shop_add',
       component: ShopAdd,
       name: 'shop_add'
   },
   {
       path: '/food',
       component: Food,
       name: 'food'
   },
   {   
        path: '/food_add',
        component: FoodAdd,
        name: 'food_add'
   },
   {
       path: '/chart',
       component: Chart,
       name: 'chart',
   },
   {
       path: '/edit',
       component: Edit,
       name: 'edit',
   },
   {
       path: '/explain',
       component: Explain,
       name: 'explain',
   },
   {
       path: '/login',
       component: Login,
       name: 'login',
   },
   {
       path: '/register',
       component: Register,
       name: 'register'
   },
   {
       path: '/set',
       component: Set,
       name: 'set',
   },
   {
       path: '/administrator',
       component: Administrator,
       name: 'administrator'
   },
   {
      path: '/order',
      component: Order,
      name: 'order',
   },
   {
       path: '/shop_modify',
       component: ShopModify,
       name: "shop_modify"
   },
   {
       path: '*',
       component: Error,
   }

]