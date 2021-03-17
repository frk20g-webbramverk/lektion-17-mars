<template>
  <div class="hello">
    <button v-on:click="decrease">-</button>
    <button v-on:click="increase">+</button>
  </div>
</template>

<script>
export default {
  name: 'ChangeCounter',
  methods: {
    increase: function() {
      this.$store.commit('increaseCounter', 1);
    },
    decrease: function() {
      this.$store.commit('decreaseCounter');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
