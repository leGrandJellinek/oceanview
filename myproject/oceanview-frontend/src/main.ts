import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* Стили и скрипты проекта */


/* Bootstrap */
import "@/assets/vendors/bootstrap/css/bootstrap.min.css";
import "@/assets/vendors/bootstrap/js/bootstrap.min.js";

/* Font Awesome */
import "@/assets/vendors/fontawesome/css/all.min.css";

/* Jquery-ui  */
import "@/assets/vendors/jquery-ui/jquery-ui.min.css";
import "@/assets/vendors/jquery-ui/jquery-ui.min.js";

/* Light Box */
import "@/assets/vendors/lightbox/dist/css/lightbox.min.css";
import "@/assets/vendors/lightbox/dist/js/lightbox.min.js";

/* Slick Slider  */
import "@/assets/vendors/slick/slick.css";
import "@/assets/vendors/slick/slick-theme.css";
import "@/assets/vendors/slick/slick.min.js";

/* Custom */

import "@/assets/styles/custom-style.css";
import "@/assets/styles/style.css";


createApp(App).use(store).use(router).mount('#app')
