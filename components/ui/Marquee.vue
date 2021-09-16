<template>
  <div
    v-lazy-load
    class="marquee"
    :style="
      `background-image:url('${
        block ? require('~/assets/img/' + block.background) : ''
      }')`
    "
  >
    <div v-if="block" class="content marquee-body">
      <div class="marquee-top">
        <div class="marquee-top-left">
          {{ block.headline }}
        </div>
        <div class="marquee-top-right">
          {{ block.subhead }}
        </div>
      </div>
      <div class="marquee-bottom">
        <div class="marquee-bottom-left">
          {{ block.cta }}
        </div>
        <div class="marquee-bottom-right">
          LET'S TALK.
          <span class="yellow">-></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Block } from '~/types/types.d'

export default Vue.extend({
  props: {
    /**
     * content for display
     */
    block: {
      type: Object as PropType<Block>,
      default: null
    }
  },
  methods: {}
})
</script>

<style scoped lang="less">
.marquee {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: center;
  background-size: cover;
  min-height: 100vh;

  &-body {
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }

  &-top {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;

    &-left {
      display: flex;
      flex-grow: 1;
      max-width: 50%;
      align-items: center;
      font-size: @font-size-heading1;
      color: white;
    }

    &-right {
      display: flex;
      flex-grow: 1;
      max-width: 50%;
      align-items: center;
      color: white;
      line-height: @spacing-xlarge;
    }
  }

  &-bottom {
    padding: 0px @spacing-normal;
    display: flex;
    align-items: center;
    min-height: 180px;
    background-color: white;

    &-left {
      flex-grow: 1;
      flex-shrink: 1;
      text-align: center;
      font-size: @font-size-heading4;
      font-weight: bold;
    }

    &-right {
      flex-grow: 1;
      flex-shrink: 0;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 576px) {
    &-top {
      flex-direction: column;
      justify-content: center;

      &-left {
        max-width: 100%;
        flex-grow: 0;
      }

      &-right {
        max-width: 100%;
        flex-grow: 0;
      }
    }
  }
}
</style>
