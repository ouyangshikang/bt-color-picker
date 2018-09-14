import btColorPicker from './components/bt-color-picker';

// defined plugin
const btComponent = {
	// plugin install
	install(Vue) {
		Vue.component('btColorPicker', btColorPicker);
	}

};

export default btComponent;