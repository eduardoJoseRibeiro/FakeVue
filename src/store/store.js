import Vue from 'vue'
import Vuex from 'vuex'

export const state = {
  textoQualquer : 'Panda doidão'  
};

export const mutations = {
    mudatexto(state, novoTexto){
        state.textoQualquer = novoTexto;
    },
    pandao(state){
        state.textoQualquer = 'Pandao';
    }
};

export const actions = {

}

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
});