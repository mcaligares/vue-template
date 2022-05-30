<script
  setup
  lang="ts"
>
  defineProps<{
    title: string;
    content: string;
  }>();
</script>

<template>
  <div class="card-sample">
    <p class="card-sample__header">{{ title }}</p>
    <p class="card-sample__content">{{ content }}</p>
  </div>
</template>

<style lang="scss">
  @import '@/styles/tools/mixins.scss';
  @import '@/styles/settings/variables.scss';

  $card-width: 200px !default;

  .card-sample {
    padding: 20px;
    width: $card-width;
    background-color: $color-light-blue;
    &__header {
      @include font(300, 22px);
    }
    &__content {
      @include font(200, 18px);
    }
  }
</style>
