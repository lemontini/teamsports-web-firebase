import { createApp } from 'vue';

// import db from './firebaseDB';

import App from './App.vue';
import router from './router';
import store from './store';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

import './assets/css/main.css';

createApp(App)
  // .use(db)
  .use(store)
  .use(router)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .mount('#app');
