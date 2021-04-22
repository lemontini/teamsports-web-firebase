import { createApp } from 'vue';

import router from './router';
import store from './store';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// Custom-made components
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseFilter from './components/utils/BaseFilter.vue';

// PrimeVue components
import Dialog from 'primevue/dialog';
import ProgressSpinner from 'primevue/progressspinner';

import './assets/css/main.css';

// PrimeVue CSS
import 'primevue/resources/themes/arya-orange/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

createApp(App)
  .use(router)
  .use(store)
  .use(PrimeVue, { ripple: true })
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .component('base-filter', BaseFilter)
  .component('Dialog', Dialog)
  .component('ProgressSpinner', ProgressSpinner)
  .mount('#app');
