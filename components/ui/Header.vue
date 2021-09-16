<template>
  <div class="header">
    <div class="content nav-bar">
      <div>
        <img class="logo" src="~/assets/img/abc_logo.svg" />
        <div class="nav-links">
          <NuxtLink
            v-for="(link, i) in links"
            :key="i"
            :to="`/${link.slug}`"
            :class="{ active: link.active }"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <BaseButton size="large">Contact Us</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    /**
     * menu links, set active as true when its slug is equal to route's slug
     */
    links() {
      let links = [
        { title: 'Industries', slug: ':industries', active: false },
        { title: 'Services', slug: ':services', active: false },
        { title: 'About Us', slug: ':about-us', active: false }
      ]
      links = links.map(link => {
        if (link.slug === this.$route.params.slug) {
          link.active = true
        }
        return link
      })
      return links
    }
  }
})
</script>

<style scoped lang="less">
.header {
  position: fixed;
  top: @spacing-large;
  left: 0px;
  right: 0px;
  background-color: transparent;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    .nav-links {
      display: flex;
      flex-direction: column;
      margin-top: @spacing-large;
      a {
        text-decoration: none;
        color: white;
        margin-bottom: @spacing-small;
        &:focus {
          color: @yellow;
        }
        &.active {
          color: @yellow;
        }
      }
    }
  }
}
</style>
