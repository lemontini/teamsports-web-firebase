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
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import Menubar from 'primevue/menubar';
import Tabmenu from 'primevue/tabmenu';
import TabView from 'primevue/tabview';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import ProgressSpinner from 'primevue/progressspinner';
import BlockUI from 'primevue/blockui';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button/sfc';
import Message from 'primevue/message';
import Password from 'primevue/password';
import DataView from 'primevue/dataview';

// PrimeVue CSS
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/arya-orange/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import './assets/css/main.css';

import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
  .use(router)
  .use(store)
  .use(PrimeVue, { ripple: true })
  .use(ConfirmationService)
  .use(ToastService)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .component('base-filter', BaseFilter)
  .component('Toolbar', Toolbar)
  .component('Menubar', Menubar)
  .component('Tabmenu', Tabmenu)
  .component('TabView', TabView)
  .component('Card', Card)
  .component('Dialog', Dialog)
  .component('ConfirmDialog', ConfirmDialog)
  .component('Toast', Toast)
  .component('ProgressSpinner', ProgressSpinner)
  .component('BlockUI', BlockUI)
  .component('InputText', InputText)
  .component('InputNumber', InputNumber)
  .component('Button', Button)
  .component('Message', Message)
  .component('Password', Password)
  .component('DataView', DataView);

app.config.globalProperties.emitter = emitter;

app.mount('#app');
