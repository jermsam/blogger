import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store =  new Vuex.Store({
    state: {
     open: false
    },
    mutations: { //always synchronous
         setOpen:(state,payload)=>{
             state.open = payload
         }
    },
    actions: { // like mutations but asynchronous / synchronous

    },
    getters:{
         getOpen:(state)=>state.open
    }
}); 