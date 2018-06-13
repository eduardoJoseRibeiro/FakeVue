<template>
  <div id="app"> 
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Home from './pages/home/Home.vue'
import Posts from './pages/posts/Posts.vue'

export default {
  name: 'app',
  components : {
    'home' : Home,
    'posts' : Posts
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
