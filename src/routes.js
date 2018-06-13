import Posts from './pages/posts/Posts.vue'
import Home from './pages/home/Home.vue'

export  const routes = [
    { path : '', component : Home, name : 'home' },
    { path : '/posts', component : Posts, name : 'posts'},
    { path : '*', component : Home} 
];