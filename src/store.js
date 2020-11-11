import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin, uuid } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  mutations: {
    CREATE_TASK (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    UPDATE_TASK (state, { task, key, value }) {
      Vue.set(task, key, value)
    }
  },
  getters: {
    getTask: state => id => {
      return state.board.columns
        .map(item => item.tasks.filter(item => item.id === id)[0])
        .find(item => item)
    }
  }
})
