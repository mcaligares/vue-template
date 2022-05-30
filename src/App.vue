<script
  setup
  lang="ts"
>
  import LayoutSample from '@/layouts/LayoutSample.vue';
  import CardSample from '@/components/CardSample.vue';
  import useGlobalStore from '@/stores/GlobalStore';

  const store = useGlobalStore();
</script>

<template>
  <layout-sample :title="store.appName">
    <card-sample
      title="Card"
      content="Some content"
    />
  </layout-sample>
</template>
