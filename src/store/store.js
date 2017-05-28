import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable no-param-reassign */
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '',
    password: '',
    wtype: '',
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setPassword(state, pass) {
      state.password = pass;
    },
    setWtype(state, type) {
      state.wtype = type;
    },
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getPassword(state) {
      return state.password;
    },
    getWtype(state) {
      return state.wtype;
    },
  },
});

export default store;
