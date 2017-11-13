import Vue from 'vue'
import axios from '../../axios/http.js'
import router from '../../router/index'

const state = {

}

const mutations = {
	login: (data, formData) => {
			// axios.login(formData)
			// .then(response => {
			// 	console.log(response);

			// 	router.push({name: 'home'})
			// })
			// .catch((error) => {
	  //           console.error(error)
	  //           alert('发生错误')
	  //       })
	}
}

const actions = {
	login: (events, formData) => {
		events.commit('login', formData)
	}
}

export default {
	state,
	mutations,
	actions
}