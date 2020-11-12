import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// css
import 'bootstrap'
import '../node_modules/simple-line-icons/scss/simple-line-icons.scss';
import './assets/scss/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLinkedin, faGithub, faEnvelope)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
