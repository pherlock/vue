//1、引入组件
import Home from "@/components/Home.vue"
import Cart from "@/components/Cart.vue"
import Kind from "@/components/Kind.vue"
import User from "@/components/User.vue"
import MainFooter from "@/components/MainFooter.vue"
import ListItem from "@/components/ListItem.vue"
//2、定义路由规则
const routes = [
  {//重定向
    path:"/",
    redirect:"/home"
  },
  {
    path: "/home",
    name: "home",
    components: {
      content: Home,
      footer: MainFooter
    }
  },
  {
    path: "/kind",
    name: "kind",
    children:[
      {//重定向
        path:"/kind",
        redirect:"/kind/1"
      },
      {
        path:"/kind/:classid",
        name:"kindlist",
        component: ListItem
      }
    ],
    components: {
      content: Kind,
      footer: MainFooter
    }
  },
  {
    path: "/cart",
    name: "cart",
    components: {
      content: Cart,
      footer: MainFooter
    }
  },
  {
    path: "/user",
    name: "user",
    components: {
      content: User,
      footer: MainFooter
    }
  }
]


export default routes;