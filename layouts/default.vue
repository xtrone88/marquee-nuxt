<template>
  <div id="app">
    <UiHeader />
    <Nuxt />
  </div>
</template>

<style lang="less">
@import url('~/assets/css/base.less');

html,
body,
div {
  font-family: sans-serif;
  font-size: @font-size-normal;
  font-weight: normal;
  margin: 0px;
}

#app {
  .content {
    max-width: 1440px;
    margin: auto;

    @media only screen and (max-width: 1440px) {
      margin: 0px @spacing-xxlarge;
    }

    @media only screen and (max-width: 768px) {
      margin: 0px @spacing-normal;
    }

    @media only screen and (max-width: 560px) {
      margin: 0px @spacing-small;
    }
  }
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0.5;
}
</style>
