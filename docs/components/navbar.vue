<template>
  <b-navbar toggleable="md" variant="light" class="fixed-top shadow-sm">
    <b-navbar-brand href="/">{{ title }}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="https://github.com/ycs77/bootstrap-admin-layout" target="_blank">
          <fa :icon="['fab', 'github']"></fa>
          Github
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { title } from '~/../package.json'

export default {
  data() {
    return {
      title
    }
  }
}
</script>
