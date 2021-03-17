<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-on:click="show">Visa</button>
    <HelloWorld v-if="showHelloWorld" msg="Welcome to Your Vue.js App"/>
    <ShakespeareInsults></ShakespeareInsults>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ShakespeareInsults from './components/ShakespeareInsults';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ShakespeareInsults
  },
  data() {
    return {
      showHelloWorld: true
    }
  },
  created() {
    //Life Cycle Hook - körs innan HTML:en är renderad
    console.log('[App] created');
  },
  mounted() {
    //Life Cycle Hook - körs när hela komponenten är renderad
    console.log('[App] mounted');
    const hasAccepted = window.localStorage.getItem('accepted');
    if (hasAccepted === "true") {
      this.showHelloWorld = false;
    }
  },
  methods: {
    show: function() {
      this.showHelloWorld = !this.showHelloWorld;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
