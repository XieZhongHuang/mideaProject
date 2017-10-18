import Vue from 'vue'
import Vuex from 'vuex'
import menu from '../components/menu/menu1.js'
import createServiceRequest from '../components/create_service_request/create_service_request.js'
// import backstageHome from '../components/backstage/backstage-home.js'
// import cook from '../components/cook/cook.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menu,
        createServiceRequest
        // backstageHome,
        // cook
    }
})