import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faChevronCircleDown)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
// app.mount('#app')
