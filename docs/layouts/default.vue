<template>
  <div>
    <navbar></navbar>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
main {
  padding-top: 3.5rem;
}
</style>
