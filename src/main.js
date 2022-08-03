
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import router from "./router"; // 👍
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"  
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 
import moment from 'moment'


import axios from 'axios'
import VueAxios from 'vue-axios'


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import Multiselect from 'vue-multiselect'
import VueNextSelect from 'vue-next-select'
import 'vue-universal-modal/dist/index.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import VueUniversalModal from 'vue-universal-modal'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Countdown from 'vue3-flip-countdown'
import ReadMore from 'vue-read-more';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import GAuth from 'vue3-google-oauth2'
// const gAuthOptions = { clientId: '1092223455901-lnftm7oet3br25nvggc4d29dacj7tiis.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: true }


const app = createApp(App)
// app.use(IconsPlugin)
app.use(BootstrapVue3)
app.use(VueLoading)
app.use(store)
app.use(router)
app.use(VueChartkick)
app.use(store)
app.use(VueAxios,axios)
app.use(moshaToast)
app.use(Multiselect)
app.use(VueNextSelect)
app.use(moment)
app.use(Countdown)
app.use(ReadMore)
// app.use(GAuth, gAuthOptions)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Datepicker', Datepicker);
// app.use(BootstrapVue)

app.use(VueUniversalModal, {
    teleportTarget: '#modals'
  })
app.config.globalProperties.$filters = {
  timeAgo(date) {
  return moment(date).fromNow()
  },
  }

app.component("font-awesome-icon",FontAwesomeIcon)


app.mount('#app')


// createApp(App).mount('#app')



