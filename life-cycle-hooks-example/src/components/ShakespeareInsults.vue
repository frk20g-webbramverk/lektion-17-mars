<template>
  <section>
    <h2>Shakespeare insult</h2>
    <p>{{ insult.insult }} - {{ insult.play }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      insult: {}
    }
  },
  async mounted() {
    const response = await fetch('https://shakespeare-insults-generator.herokuapp.com/getInsult');
    const data = await response.json();
    
    this.insult = data;
  }
}
</script>

<style>

</style>