import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { faFacebook, faTwitter, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

import 'animate.css';
// Thêm icon vào library
library.add(faMagnifyingGlass);
library.add(faFacebook, faTwitter, faLinkedin, faTiktok);

// Tạo ứng dụng Vue, tích hợp router và component FontAwesomeIcon
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .mount('#app')