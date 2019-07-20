<template>
  <div>
    <docs slug="alert">
      <template v-slot:top>
        <div class="layout-alert">
          <b-alert show dismissible variant="success">Success Alert</b-alert>
          <b-alert show dismissible variant="danger">Danger Alert</b-alert>
          <b-alert show dismissible variant="warning">Warning Alert</b-alert>
          <b-alert show dismissible variant="info">Info Alert</b-alert>
        </div>
      </template>

      <div v-html="readme"></div>
    </docs>
  </div>
</template>

<script>
import readme from '~/markdown/alert.md'
import Docs from '~/components/docs.vue'

export default {
  layout: 'docs',
  components: {
    Docs
  },
  data() {
    return {
      readme
    }
  }
}
</script>
