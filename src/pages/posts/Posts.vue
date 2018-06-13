<template>
    <div>
        Eu sou a página de Posts!!
        <br>
        <router-link :to="{ name : 'home'}">Home</router-link>
        <div v-for="post in posts">
            <h4>{{post.title}}</h4>
            <p>{{post.body}}</p>
        </div>
    </div>    
</template>
<script>
import VueResource from 'vue-resource'
import Post from '../../domain/post/Post';

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

</style>
