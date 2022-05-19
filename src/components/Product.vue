<template>
  <div class="container-sm my-sm-5 px-0">
      <ProductModal 
      :currentImage="currentImage" 
      :imagesCollection="imagesCollection" 
      v-if="productModal"
      @changeEvent="ChangeEvent"
      @toggleModalTwo="toggleTwo"/>
      <div class="col-12">
        <div class="row">
            <div class="col-md-6" v-if="!mobileActive">
            <div class="row justify-content-center align-items-center">
                <div class="col-8 mb-5" @click="productModalToggle">
                    <img class="w-100 rounded-low" :src="require('../assets/images/'+ imagesCollection[currentImage])" alt="">
                </div> 
                <div class="col-12">
                    <div class="row gx-4 justify-content-center">
                        <div class="col-2"
                        
                        @click="emitFunction(index)" 
                        v-for="(image,index) in imagesCollection" 
                        :key="index">
                            <div class="hoverMe position-relative"  :class="index === currentImage?'clicked':''">
                                <div class="overlay"></div>
                                <img class="w-100 rounded-low " :src="require('../assets/images/'+ imagesCollection[index])" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-12 px-0" v-if="mobileActive">
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/images/image-product-1.jpg" class="d-block w-100 custom-image-height" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/image-product-2.jpg" class="d-block w-100 custom-image-height" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/image-product-3.jpg" class="d-block w-100 custom-image-height" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/image-product-4.jpg" class="d-block w-100 custom-image-height" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev ms-2" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <div aria-hidden="true" class="arrow-box d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-angle-left text-dark"></i>
                        </div>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next me-2" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <div aria-hidden="true" class="arrow-box d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-angle-right text-dark"></i>
                        </div>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-md-6 d-flex align-items-center">
                <div class="col-md-10 p-md-0 py-3 px-4">
                    <p class="smallTitle">SNEAKER COMPANY</p>
                    <div class="bigTitle">Fall Limited Edition Sneakers</div>
                    <p class="mt-4 text-muted">These low-profile sneakers are your perfect causual wear companion.Featuring a durable rubber outer sole,they'll withstand every thing the weather can offer.</p>
                    <div class="price-box d-flex flex-md-column align-items-md-start align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                            <div class="price me-3">$125.00</div>
                            <div class="percent px-2">50%</div>
                        </div>
                        
                        <div class="total text-muted">$250.00</div>
                    </div>
                    <div class="w-100 footer d-flex flex-column flex-lg-row">
                        <div class="col-12 col-lg-4 custom-bg-color-1 d-flex justify-content-between align-items-center mb-md-0 mb-2 py-3 px-4  py-md-2 px-md-3">
                            <img @click="DECREASE_QTY" src="@/assets/images/icon-minus.svg" alt="">
                            <div class="fw-bold">{{changeQty}}</div>
                            <img @click="INCREASE_QTY" src="@/assets/images/icon-plus.svg" alt="">
                        </div>
                        <div
                        @click="TOGGLE_BADGE(changeQty)" 
                        class="col-12 col-lg-6 custom-bg-color-2 d-flex justify-content-center align-items-center py-3 px-4 py-md-2 px-md-3">
                            <img src="@/assets/images/icon-cart.svg" alt="">
                            <div class="fw-bold ms-3 text-white">Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import ProductModal from '@/components/ProductModal.vue'
export default {
    props : ['mobileActive'],
    name : 'Product',
    components : {ProductModal},
    data(){
        return{
            imagesCollection : [
                "image-product-1.jpg",
                "image-product-2.jpg",
                "image-product-3.jpg",
                "image-product-4.jpg"
            ],
            currentImage : 0,
            productModal : null,
        }
    },
    methods : {
        ...mapMutations(['INCREASE_QTY','DECREASE_QTY','TOGGLE_BADGE']),
        emitFunction(i){
            this.currentImage = i;
        },
        productModalToggle(){
            this.productModal = true;
        },
        ChangeEvent(img){
            this.currentImage = img;
        },
        toggleTwo(){
            this.productModal = false;
        }
    },
    computed : {
        ...mapState(['productQuantity']),
        changeQty(){
            return this.productQuantity
        }
    }
}
</script>

<style scoped>
    .rounded-low{
        border-radius : 8px;
    }
    .custom-image-height{
        height : 300px;
    }
    .arrow-box{
        width : 30px;
        height : 30px;
        background-color: white;
        border-radius : 50%;
    }
    .clicked{
        user-select : none;
        border : 3px solid #ff7d1a;
        border-radius : 11px;
        z-index : 3;
    }
    .overlay{
        display : none;
        user-select : none;
        width : 100%;
        height : 100%;
        position : absolute;
        background-color: rgba(255, 255, 255, 0.552);
        border-radius : 8px;
    }
    .hoverMe:hover .overlay{
        display : block;
    }

    /* right side */
    .smallTitle{
        font-weight : 500;
        color : #ff7d1a;
    }
    .bigTitle{
        font-size : 35px;
        font-weight : 700;
        line-height : 1.2;
    }
    .price{
        font-size :23px;
        font-weight : 700;
    }
    .percent{
        background-color : #feecdf;
        border-radius : 5px;
        color : #ff7d1a;
        font-weight : 500;
    }
    .total{
        font-weight : 500;
        text-decoration: line-through;
    }
    .footer{
        gap : 10px;
    }
    .custom-bg-color-1{
        background-color: #f5f3f1;
        border-radius : 5px;
    }
    .custom-bg-color-1 img{
        color : #ff7d1a;
    }
    .custom-bg-color-2{
        background-color: #ff7d1a;
        border-radius : 5px;
    }
    
</style>