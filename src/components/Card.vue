<template>
 <div class="rounded-xl">
    <img :src="user.image">
    <div class='py-3'>
        <h3 class='py-5 px-4'>{{user.description}}</h3>
        <button >Fashion</button>
        <slot :user='user' ></slot>
    </div>
    </div>
</template>

<script>


export default {
  name: 'Card',
  props: {
   user:{
        type:Object,
        required:true,
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
