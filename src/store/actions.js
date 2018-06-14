export const actions = {
    initPosts(){
        this.$http
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then( res => res.json())
            .then( posts => {
                let postsRecebidos = posts;
                context.commit('set-posts', postsRecebidos);
            }, err => console.log(err));
    }
};