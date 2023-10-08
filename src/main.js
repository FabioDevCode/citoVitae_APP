import 'vuetify/styles';
import '@/index.css';
import 'flowbite';
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

import App from '@/App.vue';
import router from '@/router';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
	components,
	directives,
});
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
