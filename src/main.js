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



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNgIskXvjxTDM_kLwIDJPbUsMfhYaoiv0",
  authDomain: "anime-list-1d767.firebaseapp.com",
  projectId: "anime-list-1d767",
  storageBucket: "anime-list-1d767.firebasestorage.app",
  messagingSenderId: "1081554859630",
  appId: "1:1081554859630:web:8d89656f73246d02a4987f",
  measurementId: "G-ZN9G7714F8"
};

// Initialize Firebase
initializeApp(firebaseConfig);



// Thêm icon vào library
library.add(faMagnifyingGlass);
library.add(faFacebook, faTwitter, faLinkedin, faTiktok);

// Tạo ứng dụng Vue, tích hợp router và component FontAwesomeIcon
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .mount('#app')