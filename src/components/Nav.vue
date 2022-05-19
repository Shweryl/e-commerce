<template>
  <nav class="navbar navbar-expand-sm navbar-light py-0">
    <div class="container-sm custom-border px-0 position-relative">
        <div class="d-flex">
            <button 
            class="navbar-toggler p-2 me-2 border-0" type="button" 
            data-bs-toggle="nav-modal" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" 
            aria-label="Toggle navigation"
            @click="modalToggle=true">
                <span class="navbar-toggler-icon "></span>
            </button>
            <p class="navbar-brand me-5 fw-bold fs-3 mt-1">sneakers</p>
        </div>
        
        <div class="nav-modal me-auto" 
        id="navbarSupportedContent"
        :class="{show:modalToggle}">
            
            <ul class="navbar-nav nav-modal mt-md-3">
                <li class="nav-item mb-3 " v-if="modalToggle">
                    <p class="closeIcon d-flex align-items-center justify-content-center" @click="modalToggle=false"><img src="@/assets/images/icon-close.svg"  alt=""></p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" aria-current="page">Collection</p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" >Men</p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" >Women</p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" >About</p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" >Contact</p>
                </li>
            </ul>
        </div>
        <div class="d-flex  align-items-center mb-1">
                <div class="cart me-4 position-relative" >
                    <img @click="toggleCart" src="../assets/images/icon-cart.svg" alt="">
                    <span class="bg-danger position-absolute top-0 start-75 badge translate-middle" v-if="badgeModal">{{transmitted}}</span>
                    <div class="card position-absolute shadow custom-card" v-if="cartToggle">
                        <div class="card-header bg-white fw-bold py-2">
                            Cart
                        </div>
                        <div class="card-body" v-if="cardToggle">
                            <div class="d-flex align-items-center mb-3">
                                <img class="cart-img" src="@/assets/images/image-product-3.jpg" alt="">
                                <div class="d-flex flex-column mx-3">
                                    <div>Automn Limited Edition...</div>
                                    <div class="text-muted">${{price}}×{{transmitted}}<span class="ms-3 fw-bold">${{price*transmitted}}</span></div>
                                </div>
                                <img @click="DELETE_QTY" src="@/assets/images/icon-delete.svg" alt="">
                            </div>
                            <button class="w-100 custom-btn">Checkout</button>
                        </div>
                        <div class="card-body d-flex justify-content-center align-items-center" v-if="!cardToggle">
                            <div class="fw-bold custom-font text-muted">Your Cart is empty</div>
                        </div>
                    </div>
                </div>
                <div class="profile ">
                    <img src="../assets/images/image-avatar.png" alt="">
                </div>
        </div>
        
    </div>
  </nav>


  
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            modalToggle : null,
            cartToggle : false,
            price : 125.00,
        }
    },
    computed : {
        ...mapState(['transmitted','badgeModal','cardToggle']),
    },
    methods : {
        ...mapMutations(['DELETE_QTY']),
        toggleCart(){
            this.cartToggle = !this.cartToggle
        },
        
    }
}
</script>

<style scoped>
    .profile img{
       width : auto;
       height : 40px;
    }
    .nav-link{
        font-weight : 500;
    }
    .nav-link:hover{
        color : #ff7d1a!important;
    }
    .profile img:hover{
        border-radius: 50%;
        border : 2px solid #ff7d1a;
    }
    .navbar-toggler:focus{
        box-shadow : none;
    }
    .show{
        
        position : fixed;
        top : 0;
        left : 0;
        background-color : rgba(67, 65, 65, 0.568);
        width : 100%;
        height : 100%;
        z-index : 990
    }
    

    .show ul{
        display : block;
        position : fixed;
        padding : 30px;
        background-color: white;
        top : 0;
        left : 0;
        width : 180px;
        height : 100%;
        margin-top : 0!important;
        z-index : 991;
    }
    .closeIcon{
        cursor : pointer;
        width : 25px;
        height : 25px;
        border-radius : 50%;
    }
    .closeIcon:hover{
       background-color: rgba(67, 65, 65, 0.416);
    }
    .badge{
       font-size : 10px;
       padding : 3px 6px;
       border-radius : 50%;
    }
    .custom-font{
        font-size : 18px;
    }
    .custom-card{
        width : 320px;
        height : 200px;
        top : 40px;
        left : -250px;
        z-index : 9;
    }
    .cart-img{
        width : 60px;
        height : 60px;
        border-radius : 5px;
    }
    .custom-btn{
        border : none;
        padding : 8px 0;
        border-radius : 10px;
        font-weight: 500;
        color : white;
        background-color: #ff7d1a;
    }
    @media (min-width : 576px){
        .nav-item:hover{
            border-bottom: 4px solid #ff7d1a;
        }
        .custom-border{
            border-bottom : 1px ridge rgb(181, 179, 179);
        }
    }
    @media (max-width : 576px){
        .navbar-nav{
            display : none;
        }
        
    }
</style>