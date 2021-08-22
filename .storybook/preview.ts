import '!style-loader!css-loader!sass-loader!./styles.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue, { Component } from 'vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [(story): Component => ({
  components: { story },
  template: '<story />'
})]
