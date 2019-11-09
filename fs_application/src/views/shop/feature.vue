<template>
   <ul>
    <li v-for = "(item,index) in feature" :key = "index">  {{ item }}  </li>
  </ul>
</template>

<script>
export default {
   props:['text'],
   computed: {
    feature () {
      return JSON.parse( this.text )
    }
  },
}
</script>

<style scoped>

   ul{    
     display: flex;
     flex-direction:row;
     justify-content:space-between; 
     align-items:center;
   }
   ul li{
     width:80px;
     height:30px;
     line-height: 30px;
     text-align: center;    
   }   
</style>