<template>
  <Nav/>
  <Product :mobileActive = "mobileActive"/>
</template>

<script>

import Nav from './components/Nav.vue'
import Product from './components/Product.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Product,
  },
  data(){
    return{
      mobileActive : null,
    }
  },
  created(){
    let windowWidth = window.innerWidth;
    if(windowWidth<576){
      this.mobileActive = true;
    }
    
    window.addEventListener('resize',()=>{
      let windowWidth = window.innerWidth;
      if(windowWidth<576){
        this.mobileActive = true;
      }else{
        this.mobileActive = false;
      }
      
    })
  },
}
</script>

<style>
  *{
    padding : 0;
    margin : 0;
    box-sizing : border-box;
  }
  html,body{
    overflow-x: hidden;
    width : 100%;
  }
  body{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>
