import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/login.js'
import header from '../components/home/header/header.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        header
    }
})