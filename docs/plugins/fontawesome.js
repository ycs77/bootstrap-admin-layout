import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faDownload,
  faHandPointUp,
  faExclamationTriangle,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(
  faDownload,
  faHandPointUp,
  faExclamationTriangle,
  faEllipsisH,
  faGithub
)

// Register the component globally
Vue.component('fa', FontAwesomeIcon)
