import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : "http://127.0.0.1:8000/",
    login : localStorage.getItem('login')||"",
    session_status : localStorage.getItem('session')||"",
    token : localStorage.getItem('token')||""
  },
  mutations: {
    setLogin(state, value) {
      state.login = value
      localStorage.setItem('login', state.login)
    },
    setSession(state, value) {
      state.session_status = value
      localStorage.setItem('session', state.session_status)
    },
    setToken(state, value) {
      state.token = value
      localStorage.setItem('token', state.token)
    }
  },
  actions: {
    setLogin(context, value) {
      context.commit("setLogin", value);
    },
    setSession(context, value) {
      context.commit("setSession", value);
    },
    setToken(context, value) {
      context.commit("setToken", value);
    }
  },
  modules: {
  },
  getters: {
    getLogin(state) {
      return state.login
    },
    getSession(state) {
      return state.session_status
    },
    getToken(state){
      return state.token
    },
    getApi(state) {
      return state.api
    }
  },

})
