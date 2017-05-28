<template>
  <div class="todo">
    <input type="checkbox" class="todo__done" :checked="done" @click="$emit('toggle')" />
    <div class="todo__text">{{ text }}</div>
    <div class="todo__delete">
      <button @click="$emit('delete')" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CloseButton from './CloseButton.vue';

export default {
  name: 'Task',
  props: {
    text: '',
    done: false
  },
  methods: mapActions(['increment']),
  computed: mapGetters(['count']),
  components: {
    CloseButton
  }
}
</script>

<style scoped>
  .todo {
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 1px #ccc;
    display: flex;
  }
  .todo__text {
    padding: 0 4px;
    flex: 1 0 auto;
  }
</style>
