<template>
  <div>
    <h1 class="red">{{msg}}</h1>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  name: 'Message',
  data: function () {
    return {
      msg: 'Counter'
    }
  },
  components: {Counter}
}
</script>

<style scope>
  .red {
    color: #f00;
  }
</style>
