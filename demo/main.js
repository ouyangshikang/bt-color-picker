import Vue from 'vue/dist/vue.js';
import App from './app';
import btColorPicker from '../src/index.js';

Vue.use(btColorPicker);

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	components: { App },
  	template: '<App/>'
});