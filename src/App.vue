<script
  setup
  lang="ts"
>
  import LayoutSample from '@/layouts/LayoutSample.vue';
  import CardSample from '@/components/CardSample.vue';
  import useGlobalStore from '@/stores/GlobalStore';

  const store = useGlobalStore();
  const baseUrl = import.meta.env.BASE_URL;
  const mode = import.meta.env.MODE;
  const dev = import.meta.env.DEV;
  const prod = import.meta.env.PROD;
</script>

<template>
  <layout-sample :title="store.appName">
    <card-sample
      title="BASE_URL"
      :content="baseUrl"
    />
    <card-sample
      title="MODE"
      :content="mode"
    />
    <card-sample
      title="DEV"
      :content="`${dev}`"
    />
    <card-sample
      title="PROD"
      :content="`${prod}`"
    />
  </layout-sample>
</template>
