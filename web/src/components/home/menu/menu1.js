import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'

const actions = {
	loads: (store, data) => {
		store.commit('loads')
	}
}

const mutations = {
	loads: (_state) => {
		state.loading = true;
	}
}

const state = {
	loading:false
}

export default {
	state,
	mutations,
	actions
}