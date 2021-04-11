<template>
 <div>
    <input class="p-2 h-10 border border-green-900 focus:outline-none w-20" 
    ref="sdayPicker" placeholder="Day" 
    :value="dateValue.day"
    @input="changeDate()"
    />
     <input class="p-2 h-10 border border-green-900 focus:outline-none  w-20" 
     ref="smonthPicker" placeholder="Month"
     :value="dateValue.month"
     @input="changeDate()"
     />
    <input class="p-2 h-10 border border-green-900 focus:outline-none  w-20" 
    ref="syearPicker" placeholder="Year"
    :value="dateValue.year"
    @input="changeDate()"
    />
 </div>
</template>
<script>


export default {
   props:['value'],
   computed:{
       dateValue(){
         return { day:this.value.split('/')[0],
           month:this.value.split('/')[1],
           year:this.value.split('/')[2]}
       }
   },
   methods:{
       changeDate(){
           this.$emit('input',
          `${this.$refs.sdayPicker.value}/${this.$refs.smonthPicker.value}/${this.$refs.syearPicker.value}`
          ) 
       }
   }
 
}
</script>
