//1、引入组件
import Home from "@/components/Home.vue"
import Cart from "@/components/Cart.vue"
import Kind from "@/components/Kind.vue"
import User from "@/components/User.vue"
import MainFooter from "@/components/MainFooter.vue"
import ListItem from "@/components/ListItem.vue"
import ListOne from "@/components/ListOne.vue"
import ListTwo from "@/components/ListTwo.vue"
import ListThree from "@/components/ListThree.vue"
import HomeItem from "@/components/HomeItem.vue"
import $ from "@/components/jquery-1.11.0.js"
//2、定义路由规则

const routes = [
  {//重定向
    path:"/",
    redirect:"/home"
  },
  {
    path: "/home",
    name: "home",
    children:[
    	{//重定向
        path:"/home",
        redirect:"/home/sell"
      },
      {
        path:"/home/:classid",
        name:"Homelist",
        component: HomeItem
      }
    ],
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
        component: ListOne
      }
    ],
    components: {
      content: Kind,
      footer: MainFooter
    }
  },
   {
    path: "/ListOne",
    name: "ListOne",
    children:[
      {//重定向
        path:"/ListOne",
        redirect:"/ListOne/1"
      },
      {
        path:"/ListOne/:cid",
        name:"Itemlist",
        component: ListTwo
      }
    ],
    components: {
      content: ListOne,
      footer: MainFooter
    }
  },
  {
    path: "/ListOne",
    name: "ListOne",
    children:[
      {//重定向
        path:"/ListTwo",
        redirect:"/ListTwo/1"
      },
      {
        path:"/ListTwo/:gid",
        name:"ListTwo11",
        component: ListTwo
      }
    ],
    components: {
      content: ListTwo,
      footer: MainFooter
    }
  },
   {
    path: "/ListOne",
    name: "ListOne",
    children:[
      {//重定向
        path:"/ListThree",
        redirect:"/ListThree/1"
      },
      {
        path:"/ListThree/:gid",
        name:"ListThree",
        component: ListThree
      }
    ],
    components: {
      content: ListThree,
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
        component: ListOne
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