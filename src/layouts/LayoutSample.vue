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
    <div class="layout-sample__content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss">
  @import '@/styles/tools/mixins.scss';

  .layout-sample {
    height: 100vh;
    text-align: center;
    &__title {
      padding: 10px;
      @include font(300, 32px);
    }
    &__content {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
</style>
