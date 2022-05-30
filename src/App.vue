<script
  setup
  lang="ts"
>
  import CardSample from './components/CardSample.vue';
  import LayoutSample from './layouts/LayoutSample.vue';
</script>

<template>
  <layout-sample title="Vue Template">
    <card-sample
      title="Card"
      content="Some content"
    />
  </layout-sample>
</template>
