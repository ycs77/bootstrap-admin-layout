<template>
  <div>
    <navbar></navbar>

    <div class="layout-container layout-expand-md">
      <div class="layout-sidebar">
        <div class="layout-sidebar-content">
          <ul class="nav navbar-nav nav-root">
            <li v-for="(item, index) in nav" :class="['nav-item', navAvtive(item.slug)]">
              <router-link class="nav-link" :to="link(item, index)">
                <div class="nav-link-icon">
                  <fa :icon="item.icon" class="fa-fw"></fa>
                </div>
                <div class="nav-link-name">{{ item.title }}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="layout-sidebar-overlay"></div>

      <!-- Layout Content -->
      <div class="layout-content-wrapper">
        <slot name="top"></slot>

        <div class="layout-breadcrumb">
          <div>
            <button class="layout-sidebar-toggler" type="button" aria-label="Toggle navigation">
              <span class="layout-sidebar-toggler-icon"></span>
            </button>
          </div>

          <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        </div>

        <div class="layout-content">
          <main class="markdown-body px-3">
            <slot></slot>

            <div class="d-flex mt-4">
              <div class="mr-auto">
                <router-link v-if="prevItem" :to="link(prevItem, prevItemIndex)" class="btn btn-primary">
                  &lt;
                  {{ prevItem.title }}
                </router-link>
              </div>
              <div class="ml-auto">
                <router-link v-if="nextItem" :to="link(nextItem, nextItemIndex)" class="btn btn-primary">
                  {{ nextItem.title }}
                  &gt;
                </router-link>
              </div>
            </div>
          </main>

          <footer class="py-3 text-center">
            <a href="https://github.com/ycs77/bootstrap-admin-layout">
              <fa :icon="['fab', 'github']"></fa>
              Github
            </a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nav } from '~/content'
import Navbar from '~/components/navbar.vue'
import BootstrapAdminLayout from '~/../js'

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    Navbar
  },
  data() {
    return {
      nav
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: this.activeItem.title,
          active: true
        }
      ]
    },
    activeItem() {
      return this.nav.find(item => item.slug === this.slug)
    },
    activeItemIndex() {
      return this.nav.findIndex(item => item.slug === this.slug)
    },
    prevItem() {
      return this.activeItemIndex > 0 ? this.nav[this.activeItemIndex - 1] : null
    },
    prevItemIndex() {
      return this.activeItemIndex > 0 ? this.activeItemIndex - 1 : 0
    },
    nextItem() {
      return this.activeItemIndex < (this.nav.length - 1) ? this.nav[this.activeItemIndex + 1] : null
    },
    nextItemIndex() {
      return this.activeItemIndex < (this.nav.length - 1) ? this.activeItemIndex + 1 : (this.nav.length - 1)
    }
  },
  methods: {
    link(item, index) {
      return '/docs' + (index > 0 ? ('/' + item.slug) : '')
    },
    isActive(slug) {
      return this.slug === slug
    },
    navAvtive(slug) {
      return this.isActive(slug) ? 'active' : ''
    }
  },
  mounted() {
    new BootstrapAdminLayout()
  }
}
</script>
