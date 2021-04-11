<template>
 <div>
    <input class="p-2 h-10 border border-green-900 focus:outline-none w-20" 
    ref="odayPicker" placeholder="Day" 
    :value="value.day"
    @input="changeDate()"
    />
     <input class="p-2 h-10 border border-green-900 focus:outline-none  w-20" 
     ref="omonthPicker" placeholder="Month"
     :value="value.month"
     @input="changeDate()"
     />
    <input class="p-2 h-10 border border-green-900 focus:outline-none  w-20" 
    ref="oyearPicker" placeholder="Year"
    :value="value.year"
    @input="changeDate()"
    />
 </div>
</template>
<script>


export default {
   props:['value'],
  
   methods:{
       changeDate(){
           this.$emit('input',{
day:this.$refs.odayPicker.value,
month:this.$refs.omonthPicker.value,
year:this.$refs.oyearPicker.value,
           }) 
       }
   }
 
}
</script>
