<template>
  <div class="container text-center">
    <h1>{{ title }}</h1>
    <p class="lead">{{ description }}</p>
    <div class="mt-5">
      <router-link to="/docs" class="btn btn-lg btn-outline-primary">Get started</router-link>
    </div>
  </div>
</template>

<script>
import { title, description } from '~/../package.json'

export default {
  data() {
    return {
      title,
      description
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

h1 {
  color: $primary;
  margin: 3rem 0;
  @media (min-width: 480px) {
    font-size: 3.5rem;
  }
}
</style>
