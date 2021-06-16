import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : "http://127.0.0.1:8000/",
    login : localStorage.getItem('login')||"",
    session_status : localStorage.getItem('session')||"",
    token : localStorage.getItem('token')||"",
    choose : localStorage.getItem('choose') || 1,
    department : localStorage.getItem('department') || ""
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
    },
    setChoose(state, value) {
      state.choose = value
      localStorage.setItem('choose', state.choose)

    },
    setDepartment(state, value) {
      state.department = value
      localStorage.setItem('department', state.department)
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
    },
    setChoose(context, value) {
      context.commit("setChoose", value);
    },
    setDepartment(context, value) {
      context.commit("setDepartment", value);
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
    },
    getChoose(state) {
      return state.choose
    },
    getDepartment(state) {
      return state.department
    }
  },

})
