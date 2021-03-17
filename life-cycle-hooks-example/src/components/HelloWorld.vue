<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="setLocalStorage">Ok!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    console.log('[HelloWorld] created');
  },
  mounted() {
    console.log('[HelloWorld] mounted');
  },
  destroyed() {
    console.log('[HelloWorld] destroyed');
  },
  methods: {
    setLocalStorage: function() {
      window.localStorage.setItem('accepted', 'true');
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

.hello {
  border: 1px solid #000000;
  padding: 0.5rem;
}
</style>
