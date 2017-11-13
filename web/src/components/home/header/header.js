import Vue from 'vue'
import router from '../../../router/index'

const state = {
	lang:'English'
}

const mutations = {
	changLang(state,data){
		state.lang = data;
	}
}

const actions = {
	changLang: (events, data) => {
		events.commit('changLang', data)
	}
}

export default {
	state,
	mutations,
	actions
}
