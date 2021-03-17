<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ShowCounter />
    <ChangeCounter />
  </div>
</template>

<script>
import ChangeCounter from './components/ChangeCounter';
import ShowCounter from './components/ShowCounter';

export default {
  name: 'App',
  components: {
    ChangeCounter,
    ShowCounter
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
