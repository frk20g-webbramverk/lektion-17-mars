<template>
  <section>
    <p>{{ counter }}</p>
  </section>
</template>

<script>
export default {
  name: 'ShowCounter',
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
}
</script>

<style>

</style>