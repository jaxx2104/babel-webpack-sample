const page = {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (state) {
      state.commit('increment')
    }
  },
  getters: {
    count (state) {
      return state.count
    }
  }
}
export default page
