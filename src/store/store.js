import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export const state = {
    textoQualquer : 'Panda',  
    usuarios : []
};

export const mutations = {
    mudaTexto(state, novoTexto){
        state.textoQualquer = novoTexto;
    },
    pandao(state){
        state.textoQualquer = 'Pandao';
    },
    SET_USUARIOS(state, usuarios){
        state.usuarios.push(usuarios);
    }
};

export const actions = {
    populaUsuarios({ commit }){

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                commit('SET_USUARIOS', response.data);
            });    
    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations
});