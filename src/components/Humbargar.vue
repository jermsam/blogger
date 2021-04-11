<template>
   <div class=" bg-white hover:text-gray-800 p-4 hover:bg-gray-100 max-h-12
            text-xl md:hidden flex items-center justify-center rounded-lg m-2 
           "
           @click="toggle"
           
           >
          
               <a href="#" class="  " >
                  
                 <i v-bind:class="open? 'fa fa-bars': 'fa fa-times'" ></i>
              
               </a> 
           
       </div>  
</template>

<script>

export default{
  name: 'Humbargar',
data:()=>({
    open: true
}),
  
created(){ // life cycle hook ... runs when humbargar is created
//on created, listen to the toggled event and set the open data to
// whichever the new value is
this.$root.$on('toggled',(newValue)=>{
this.open=newValue
})
},

methods:{
    
      toggle: function(){
          this.$emit('toggle')
      }
  },

}
</script>
