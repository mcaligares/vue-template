import { defineStore } from 'pinia';

const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    appName: 'Vue Template',
  }),
});

export default useGlobalStore;
