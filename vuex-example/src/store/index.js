import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter(state, count) {
      state.counter = state.counter + count;
    },
    decreaseCounter(state) {
      state.counter = state.counter - 1;
    }
  }
});