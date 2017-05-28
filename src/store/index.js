import Vue from 'vue'
import Vuex from 'vuex'

import page from './modules/page.js'
import todo from './modules/todo.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: [page, todo],
  strict: process.env.NODE_ENV !== 'production',
})

export default store
