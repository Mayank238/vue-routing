import User from './components/user/User.vue'
import Useredit from './components/user/Useredit.vue'
import Userdetail from './components/user/Userdetail.vue'
import Userstart from './components/user/Userstart.vue'
import Home from './components/Home.vue'

export const routes = [
  { path: '/' ,
    component: Home,
    name: 'home'
  },
  { path: '/user' ,
    component: User,
    children: [
    {
    	path:'' ,
    	component: Userstart
    },
    {
    	path:':id' ,
    	component: Userdetail
    },
    {
    	path:':id/edit',
    	component: Useredit,
    	name: 'useredit'
    }
    ]
  }
]
