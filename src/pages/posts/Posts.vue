<template>
    <div class="container">
        <h3> Eu sou a página de Posts!!</h3>
        <br>
        <router-link :to="{ name : 'home'}">
           <button class="btn blue waves-effect"> Home</button>
        </router-link>
        <div v-for="post in posts" class="collapsible">
            <h5>{{post.title}}</h5>
            <p>{{post.body}}</p>
        </div>
    </div>    
</template>
<script>
import VueResource from 'vue-resource'
import Post from '../../domain/post/Post';
import store from '../../store/store';

export default {
    data(){
        return {
            posts : new Post()
        }
    },
    methods :{

        initPosts(){

            this.$http.get('https://jsonplaceholder.typicode.com/posts/')
                .then( res => res.json())
                .then( posts => {
                    this.posts = posts;
                }, err => console.log(err));
        }
    },
    created(){
        this.initPosts();    
    }
}
</script>
<style>
    .collapsible {
        padding: 1rem 3rem;
    }
</style>
