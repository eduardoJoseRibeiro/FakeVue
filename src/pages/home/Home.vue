<template>
    <div>
        Eu sou a HOME!!!
        <br>
        <router-link :to="{ name : 'posts'}">Posts</router-link>
        <p>{{textoQualquer}}</p>
        <form @submit.prevent="novoTexto()">
            <input type="text" v-model="setTexto">
            <button type="submit">Salvar</button>
        </form>
    </div>    
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    data(){
        return {
            setTexto : ''
        }
    },
    methods : {
        novoTexto(){
            this.mudatexto(this.setTexto); //Pode ser feito assim
            // this.$store.commit('mudatexto', this.setTexto); //Ou assim!
            console.log(this.$store.state.textoQualquer);
        },
        ...mapMutations([
            'mudatexto'
        ])
    },
    computed : {
        textoQualquer(){
            return this.$store.state.textoQualquer
        }
    }
}
</script>
<style>

</style>
