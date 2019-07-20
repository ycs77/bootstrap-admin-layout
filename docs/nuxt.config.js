import hljs from 'highlight.js'

export default {
  mode: 'universal',
  srcDir: __dirname,
  router: {
    base: process.env.NODE_ENV === 'gh-pages' ? '/bootstrap-admin-layout/' : ''
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bootstrap Admin Layout',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/scss/app.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'highlight.js/styles/github.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** Generate pages configuration
  */
  generate: {
    dir: 'docs-dist'
  },

  // bootstrapVue options
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    highlight: function (str, lang) {
      const validLang = Boolean(lang && hljs.getLanguage(lang))
      const highlighted = validLang ? hljs.highlight(lang, str).value : str
      return `<pre class="hljs ${lang} p-2">${highlighted}</pre>`;
    }
  }
}
