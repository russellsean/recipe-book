import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
var config = {
  apiKey: "AIzaSyCZyJoCHbwwxPIhhfeoz0CiN2dnSn3mVMo",
  authDomain: "recipe-book-f16ac.firebaseapp.com",
  databaseURL: "https://recipe-book-f16ac.firebaseio.com",
  projectId: "recipe-book-f16ac",
  storageBucket: "recipe-book-f16ac.appspot.com",
  messagingSenderId: "602385745653"
};
firebase.initializeApp(config);

const db = firebase.firestore();

Vue.mixin({
  data: () => {
    return {
      get db() {
        return db;
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  db,
  render: function (h) { return h(App) }
}).$mount('#app')
