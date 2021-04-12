<template>
   <nav class="bg-white text-gray-500  flex flex-row justify-between
       text-1 px-8 py-2 min-h-10 overflow-hidden "   >
           <div class="flex flex-col  md:flex-row flex-wrap justify-between md:items-center w-full">
            <div class="">
                <div class="text-xl py-3 text-green-500">
                    <a href="#" class="">{{title}}</a>
                </div>
            </div>
            <div 
           :class="['md:h-auto md:opacity-100 transition duration-1000 ease-in-out space-x-4',{'h-0 opacity-0':!isOpen}]" 
         
            >
           
                <ul class="flex flex-col  md:flex-row text-sm  " >
                
                    <li  v-for="item in routerObject" :key="item.name" 
                    class="hover:bg-gray-100 p-3 rounded-lg hover:text-green-500">
                       <router-link  :to="item.to"> 
                        <a>
                        
                            {{item.name}}
                        </a>
                        </router-link> |
                    </li>
                </ul>
            </div>
            <div 
            :class="['md:h-auto md:opacity-100   space-x-4',{'h-0 opacity-0':!isOpen}]" 
          
            >
                <a href="#" v-for="icon in icons" :key="icon" 
                class="p-0.1 hover:text-green-500 " >
                    <i :class='icon' > </i>
                    
                </a>
               
            </div>
            
           </div>
           <Humbargar   @toggle="toggleMenu" />
          
       </nav>
</template>

<script>

import { store } from '../../vuex/store'
import Humbargar from './Humbargar'

export default {
  name: 'NavBar',
  components:{
    Humbargar,
  },
  props: {
    items: Array,
    icons: Array,
    title:String,

  },
  methods: {
toggleMenu (){
 //alert()
 store.commit( 'setOpen',!store.getters.getOpen)
 // when you toggle, emit thr toggled event
 this.$root.$emit('toggled',!store.getters.getOpen)
},

},

computed:{
isOpen(){
  
return store.getters.getOpen
},
routerObject(){
    const routerPaths =this.$props.items.map(name=>{
       
    switch(name){
        case 'Home':
            return {to:`/`,name}
         case 'Post':
            return {to:`/${name.toLowerCase()}/1`,name} 
        case 'Profile':
            return {to:`/${name.toLowerCase()}/1`,name}                  
        default: return {to:`/${name.toLowerCase()}`,name}
    }
        
    })

    return routerPaths
}
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
