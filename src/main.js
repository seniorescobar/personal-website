import { createApp } from 'vue'
import App from './App.vue'

// css
import 'bootstrap'
import '../node_modules/simple-line-icons/scss/simple-line-icons.scss';
import './assets/scss/style.scss'

// js
import 'parallax-js' // import '../node_modules/parallax-js/dist/parallax.min.js'

const app = createApp(App)

app.mount('#app')
