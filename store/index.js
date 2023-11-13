// import axios from 'axios'
// import cookies from 'vue-cookies'
// import { gql } from 'nuxt-graphql-request';

export const strict = false
export const state = () => ({
  addressMapModal: false,
  addressModal:false,

})

export const mutations = {

  set_addressMapModal(state, bool) {
    state.addressMapModal = bool
  },
  set_addressModal(state, bool) {
    state.addressModal = bool
  },

}



export const actions = {

}


export const getters = {

  get_addressMapModal(state) {
    return state.addressMapModal
  },
  get_addressModal(state) {
    return state.addressModal
  },

}
