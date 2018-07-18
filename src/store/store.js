import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
    userInfo:{},
    isLogin:false
}
const getters = {
    
}
const mutations = {
    setUserInfo(state,payload) {
        // alert(n);
        console.log(payload);
        state.userInfo = payload
    }
}
const actions = {
    
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})