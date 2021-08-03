/*
 *@Description: main.js
 *@ClassAuthor: GuoYuanJin
 *@Date: 2021-08-02 22:48:02
*/
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  // eslint-disable-next-line no-undef
  render: h => h(App),
  router
})
