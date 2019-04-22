// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import element from 'element-ui'
Vue.use( element )

// import './styles/app.scss'
// import './styles/global.scss'
// import './styles/settings.scss'
// import './styles/theme/index.scss'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
