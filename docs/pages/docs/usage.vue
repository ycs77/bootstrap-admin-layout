<template>
  <div>
    <docs slug="usage">
      <div v-html="readme"></div>
    </docs>
  </div>
</template>

<script>
import { title, description } from '~/../package.json'
import readme from '~/markdown/usage.md'
import Docs from '~/components/docs.vue'

export default {
  layout: 'docs',
  components: {
    Docs
  },
  data() {
    return {
      readme: readme.replace('{{ title }}', title).replace('{{ description }}', description)
    }
  }
}
</script>
