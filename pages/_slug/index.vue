<template>
  <UiMarquee :block="block" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Page } from '~/types/types.d'

export default Vue.extend({
  data() {
    return {
      /**
       * page content for display from content.json
       */
      page: null as Page | null
    }
  },
  /**
   * fetch content.json from where it is placed in. right now, it is placed in static/
   */
  async fetch() {
    const contents = await fetch('/content.json').then(res => res.json())
    if (contents && contents.pages.length > 0) {
      this.page = contents.pages.find((page: Page) => {
        if (this.$route.params.slug.endsWith(page.slug)) {
          return true
        }
        return false
      })
    }
  },
  computed: {
    /**
     * current block data for Marquee Component
     */
    block() {
      return this.$data.page?.blocks[0]
    }
  },
  mounted() {
    /**
     * display loading indicator at the top of page
     */
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setInterval(() => {
        if (this.$data.page) {
          this.$nuxt.$loading.finish()
          clearInterval()
        }
      }, 1000)
    })
  }
})
</script>
