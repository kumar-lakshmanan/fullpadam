import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from "primevue/button"
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Tree from 'primevue/tree';
import Listbox from 'primevue/listbox';

const app = createApp(App)

app.use(PrimeVue);


app.component('Button', Button);
app.component('Tree', Tree);
app.component('Listbox', Listbox);

app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);

app.mount('#app')




