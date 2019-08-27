import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    titleName: null,
  },
  mutations: {
    setTitleName(state, titleName) {
      state.titleName = titleName;
    },
  },
  getters: {
    getSelectedTitleName: state => {
      return state.titleName;
    },
  },
  actions: {},
});
