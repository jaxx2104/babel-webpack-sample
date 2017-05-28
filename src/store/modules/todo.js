const todo = {
  state: {
    todos: [
      { text: 'Foo', done: true },
      { text: 'Bar', done: false }
    ],
  },
  getters: {
    todos (state) {
      return state.todos
    }
  },
  actions: {
    addTodo (state, text) {
      if (text) {
        state.commit('addTodo', text)
      }
    },
    delTodo (state, todo) {
      state.commit('delTodo', todo)
    },
    tglTodo (state, todo) {
      state.commit('tglTodo', todo)
    },
  },
  mutations: {
    addTodo (state, text) {
      state.todos.push({ text: text, done: false })
    },
    delTodo (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    tglTodo (state, todo) {
      todo.done = !todo.done
    }
  }
}

export default todo
