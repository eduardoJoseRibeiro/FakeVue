<template>
    <div class="container">
        <h3>Lista de Usuários</h3>
        <br>
        <router-link :to="{ name : 'posts'}">
            <button class="btn waves-effects blue">Posts</button> 
        </router-link>
        
        <div class="row">
            <div class="s-12">
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios[0]">
                            <td> @{{usuario.username}} </td>
                            <td> {{usuario.name}} </td>
                            <td> {{usuario.email}} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>            
    </div>    
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
    data(){
        return {
            setTexto : '',
            user : ''
        }
    },
    methods : {
        novoTexto(){
            this.mudaTexto(this.setTexto); //Pode ser feito assim
            // this.$store.commit('mudatexto', this.setTexto); //Ou assim!
        },
        ...mapMutations([
            'mudaTexto'
        ]),
        ...mapActions([
            'populaUsuarios'
        ])
    },
    computed : {
        textoQualquer(){
            return this.$store.state.textoQualquer
        },
        usuarios(){
            return this.$store.state.usuarios
        }
    },
    created(){
        
        this.$store.dispatch('populaUsuarios');  
        this.users = this.usuarios[0];
    }
}
</script>
<style>

</style>
