//1、引入组件
import Home from "@/components/Home.vue"
import Cart from "@/components/Cart.vue"
import Kind from "@/components/Kind.vue"
import User from "@/components/User.vue"
import MainFooter from "@/components/MainFooter.vue"
import kind2 from "@/components/MainKind.vue"
import list from "@/components/KindSecond.vue"
import detail from "@/components/detail.vue"
//import HomeItem from "@/components/HomeItem.vue"
import $ from "@/components/1.js"
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
        component: kind2
      }
    ],
    components: {
      content: Kind,
      footer: MainFooter
    }
  },
   {
    path: "/kind2",
    name: "kind2",
    children:[
      {//重定向
        path:"/kind2",
        redirect:"/kind2/1"
      },
      {
        path:"/kind2/:cid",
        name:"Itemlist",
        component: list
      }
    ],
    components: {
      content: kind2,
      footer: MainFooter
    }
  },
  {
    path: "/kind2",
    name: "kind2",
    children:[
      {//重定向
        path:"/list",
        redirect:"/list/1"
      },
      {
        path:"/list/:gid",
        name:"list11",
        component: list
      }
    ],
    components: {
      content: list,
      footer: MainFooter
    }
  },
   {
    path: "/kind2",
    name: "kind2",
    children:[
      {//重定向
        path:"/detail",
        redirect:"/detail/1"
      },
      {
        path:"/detail/:gid",
        name:"detail",
        component: detail
      }
    ],
    components: {
      content: detail,
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