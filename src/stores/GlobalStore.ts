import { defineStore } from 'pinia';

const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    appName: import.meta.env.VITE_APP_NAME,
  }),
});

export default useGlobalStore;
