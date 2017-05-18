import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import main from './style/main.less'

Vue.use(ElementUI)

new Vue({
	render: h => h(App)
}).$mount('#root')
