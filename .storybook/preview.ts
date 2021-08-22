import '!style-loader!css-loader!sass-loader!./styles.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue, { Component } from 'vue'
import store from '../src/store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export const decorators = [(story: Component): Component => ({
  store,
  components: { story },
  template: ('<story />')
})]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
