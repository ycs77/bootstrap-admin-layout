<template>
  <div>
    <docs slug="get-started">
      <div v-html="readme"></div>
    </docs>
  </div>
</template>

<script>
import readme from '~/markdown/get-started.md'
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
