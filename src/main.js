import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faChevronCircleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faChevronCircleDown, faLinkedin, faEnvelope, faBars)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
// app.mount('#app')
