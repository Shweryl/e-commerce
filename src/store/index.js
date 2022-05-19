import { createStore } from 'vuex'

export default createStore({
  state: {
    productQuantity : 0,
    badgeModal : null,
    transmitted : 0,
    cardToggle : null,
  },
  mutations: {
    INCREASE_QTY(state){
      state.productQuantity++;
    },
    DECREASE_QTY(state){
      state.productQuantity--;
    },
    TOGGLE_BADGE(state,payload){
      if(payload > 0){
        state.transmitted += payload;
        state.badgeModal = true;
        state.cardToggle = true;
      }
    },
    DELETE_QTY(state){
      state.transmitted--;
      state.productQuantity--;
      if(state.transmitted <= 0){
        state.cardToggle = false;
        state.badgeModal = false;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
