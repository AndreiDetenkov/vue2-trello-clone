import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  mutations: {},
  getters: {
    getTask: state => id => {
      return state.board.columns
        .map(item => item.tasks.filter(item => item.id === id)[0])
        .find(item => item)
    }
  }
})
