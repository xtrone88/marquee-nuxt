<template>
  <button :class="`btn btn-${type} ${size}`">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    clicked: {
      type: Function,
      default: null
    }
  },
  methods: {}
})
</script>

<style scoped lang="less">
.btn {
  outline: none;
  font-size: 14px;
  &.normal {
    padding: @spacing-normal @spacing-normal;
  }
  &.large {
    padding: @spacing-normal @spacing-xlarge;
  }
  &:hover {
    box-shadow: 1px 2px #666;
  }
  &:active {
    transform: translateY(3px);
  }
}
.btn-default {
  background-color: transparent;
  border: 1px solid white;
  color: white;
}
</style>
