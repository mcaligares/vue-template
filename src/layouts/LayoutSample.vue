<script
  setup
  lang="ts"
>
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <section class="layout-sample">
    <h1 class="layout-sample__title">{{ title }}</h1>
    <slot></slot>
  </section>
</template>

<style lang="scss">
  @import '@/styles/tools/mixins.scss';

  .layout-sample {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    &__title {
      @include font(300, 32px);
    }
  }
</style>
