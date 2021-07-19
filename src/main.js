import Vue from 'vue'
import App from './App.vue'
import '@/styles/global.scss'

Vue.config.productionTip = false

// https://stackoverflow.com/questions/8330559/hover-effects-using-css3-touch-events
document.body.addEventListener('touchstart',function(){},false);
// document.addEventListener("touchstart", function(){}, true)

new Vue({
  render: h => h(App),
}).$mount('#app')
