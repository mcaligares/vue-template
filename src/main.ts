import { createApp } from 'vue';
import App from './App.vue';
import Store from './stores';

import './styles/index.scss';

const app = createApp(App);

app.use(Store);
app.mount('#app');
