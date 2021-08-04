import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [(story) => ({
  components: { story },
  template: '<story />'
})];
