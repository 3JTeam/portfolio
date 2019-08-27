import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skillName: null,
  },
  mutations: {
    setSkillName(state, payload) {
      state.skillName = payload;
    },
  },
  getters: {
    getSelectedName: state => {
      return state.skillName;
    },
  },
  actions: {},
});
