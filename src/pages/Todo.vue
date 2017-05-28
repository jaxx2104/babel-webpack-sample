<template>
  <div>
    <input
      class="app__input"
      autofocus autocomplete="off"
      placeholder="What needs to be done?"
      v-model="value"
      @keyup.enter="addTodo(value)"
    />
    <task
      v-for="(todo, i) in todos"
      :key="i"
      :text="todo.text"
      :done="todo.done"
      @toggle="tglTodo(todo)"
      @delete="delTodo(todo)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Task from '../components/Task.vue'

export default {
  data () {
    return {
      value: ''
    }
  },
  computed: mapGetters(['todos']),
  methods: mapActions(['addTodo', 'delTodo', 'tglTodo']),
  components: {Task}
}
</script>
<style scoped>
  .app {
    margin: 20px;
  };
  .app__input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
    background-color: #fff;
  }
  .app__todo {
    display: block;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
</style>
