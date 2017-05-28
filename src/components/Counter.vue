<template>
  <div class="counter">
    <button @click="increment">{{count}}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Counter',
  methods: mapActions(['increment']),
  computed: mapGetters(['count'])
}
</script>

<style scope>
</style>
