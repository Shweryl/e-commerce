<template>
  <div class="custom-modal d-flex justify-content-center align-items-center">
    <div class="productBox d-flex flex-column justify-content-center align-items-center">
        <div class="closeIcon ms-auto" @click="itemsToggle">
          <i class="fa-solid fa-xmark text-white"></i>
        </div>
        <div class="imageBox position-relative">
          <div 
          class="previous position-absolute top-50 start-0 translate-middle d-flex justify-content-center align-items-center"
          @click="subtracting">
            <i class="fa-solid fa-angle-left text-dark"></i>
          </div>
          <img class="w-100 rounded-low" :src="require('../assets/images/'+ imagesCollection[currentChildImage])" alt="">
          <div 
          class="nexter position-absolute top-50 start-100 translate-middle d-flex justify-content-center align-items-center"
          @click="adding">
            <i class="fa-solid fa-angle-right text-dark"></i>
          </div>
        </div>
      <div class="imagesBox d-flex">
        <div 
        v-for="(image,index) in imagesCollection" 
        :class="index===currentChildImage?'activate':''" 
        :key="index" class="vForImage"
        @click="emitAndToggle(index)">
            <div class="overlay"></div>
            <img class="w-100 rounded-low" :src="require('../assets/images/'+ imagesCollection[index])" alt="">
          
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props : ['currentImage','imagesCollection'],
  name : 'ProductModal',
  emits : ['changeEvent','toggleModalTwo'],
  data(){
    return{
      currentChildImage : null,
    }
  },
  created(){
    this.currentChildImage = this.currentImage
  },
  methods : {
    itemsToggle(){
      this.$emit('toggleModalTwo')
    },
    emitAndToggle(i){
      this.currentChildImage = i;
      this.emitEvent(this.currentChildImage)
    },
    adding(){
      if(this.currentChildImage<this.imagesCollection.length-1){
        this.currentChildImage += 1;
        
      }else{
        this.currentChildImage = 0;
      }
      this.emitEvent(this.currentChildImage)
    },
    subtracting(){
      
      if(this.currentChildImage>0){
        this.currentChildImage--;
      }else{
        this.currentChildImage = this.imagesCollection.length-1;
      }
      this.emitEvent(this.currentChildImage)
    },
    emitEvent(curImg){
      this.$emit('changeEvent',curImg)
    }
  }
}
</script>

<style scoped>
    .custom-modal{
        position : fixed;
        top : 0;
        left : 0;
        width : 100%;
        height : 100%;
        background-color: rgba(0, 0, 0, 0.607);
        z-index : 1000;
    }
    .productBox{
      z-index : 1001;
    }
    .closeIcon{
      cursor : pointer;
    }
    .imageBox{
      width : 400px;
      height : 400px;
    }
    .imagesBox{
      margin-top : 20px;
      gap : 10px;
    }
    .vForImage{
      width : 100px;
      height : 100px;
      
    }
    .rounded-low{
      border-radius : 8px;
    }
    .activate{
      position : relative;
    }
    .overlay{
      display : none;
      position : absolute;
      width : 100px;
      height : 100px;
      background-color: rgba(255, 255, 255, 0.552);
      border : 3px solid orange;
      border-radius : 10px;
    }
    .activate .overlay{
      display : block;
    }
    .previous,
    .nexter{
      width : 30px;
      height : 30px;
      background-color : white;
      border-radius : 50%;
      cursor : pointer;
    }
</style>