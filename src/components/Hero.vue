<template>
  
  <section  :style="{'background-image': 'url(' + require('../assets/Background-image.png') + ')'}"
   class=" bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-gray-100">
                     <h3>Tours & Travel</h3>
                     <h1 class='text-2xl font-bold m-5'>Amazing Place On Earth</h1>
                     <button class='rounded-xl'>Explore</button>
</section>              
   
</template>

<script>
export default {
  name: 'Hero',
  beforeCreate(){
      console.log('b4 created')
  },
  create(){  console.log('created') },
  beforeMount(){  console.log('b4 mount') },
  mounted(){  console.log('mounted') },
  beforeUpdate(){  console.log('b4 update') },
  updated(){  console.log('updated') },
  beforeDestroy() {
   console.log('b4 destroy')
  },
  destroyed(){  console.log('destroyed') },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
