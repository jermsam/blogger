<template>
  <div id="app" class="bg-transparent flex flex-col min-h-screen mt-auto">

<!-- <NavBar :items='menuItems' :title='title' :icons='socialIcons'></NavBar> -->
<main class="flex-auto min-h-full">
 <Hero></Hero>
 <!-- ........ Blog Carousel Section............ -->
                 <section class='w-full h-screen '>
                     <div :style="{'background-image': 'url(' + require('../src/assets/Abract01.png') + ')'}"
                     class=" bg-cover bg-right bg-no-repeat h-full w-full">
                         <div class="w-full h-full">
                             <div  class="w-full h-full px-5 flex flex-row space-x-10 flex-wrap justify-center items-center" >
                                 <!---cards-->
                                
                                <Card :user='user' 
                                class='w-80 text-center flex flex-col mx-3
                                 my-2 shadow-2xl bg-gray-100' 
                                 v-for='user in users'
                                 v-bind:key='user.name'
                                >
                                <template v-slot='{user}'>
                                   <a class='block'> {{user.name}}</a>
                                </template>
                                </Card>
                             </div>
                         </div>
                     </div>
                 </section>
                 <!-- ........ End Blog Carousel Section......... -->
</main>
<footer class="bg-green-600 min-h-20 flex-shrink-0  flex  justify-center items-center" >
<div class="flex flex-row">
<object-date-picker v-model="objectDate"></object-date-picker>
<string-date-picker v-model="stringDate"></string-date-picker>
</div>

</footer>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

import 'es6-promise/auto'
// import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
// import socialIcons from '../mixins/browse.mixins'
import ObjectDatePicker from './components/ObjectDatePicker'
import StringDatePicker from './components/StringDatePicker'
// store data in one place so any component can get it





export default {
  name: 'App',
// mixins:[socialIcons],
  components: {
    // NavBar,
    Hero,
    Card,
    ObjectDatePicker,
    StringDatePicker
  },
  data:()=> ({
   
   objectDate:{
     day:null,
     month:null,
     year:null
   },
   stringDate:'',
   
    users:[
{
    name:'Brian',
    image:require("../src/assets/Blog-post/post-1.jpg"),
    description: "London Fashion Week's continued the evolution",
    duration:"2 minutes"
},
{
    name:'Ron',
    image:require("../src/assets/Blog-post/post-2.jpg"),
    description: "London Fashion Week's continued the evolution",
    duration:"2 minutes"
},
{
    image:require("../src/assets/Blog-post/post-3.jpg"),
    description: "London Fashion Week's continued the evolution",
    duration:"2 minutes"
},
{name:'Jane',
    image:require("../src/assets/Blog-post/post-4.png"),
    description: "London Fashion Week's continued the evolution",
    duration:"2 minutes"
}
     ],
  }),
  created(){ // life cycle hook ... runs when humbargar is created
//on created, listen to the toggled event and set the open data to
// whichever the new value is

},
  
}
</script>

<style>
#app {
  
}
</style>
