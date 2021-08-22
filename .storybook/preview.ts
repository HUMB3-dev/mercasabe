import '!style-loader!css-loader!sass-loader!./styles.scss'

import SDK from '@merkaly/sdk-js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue, { Component } from 'vue'
import store from '../store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

SDK.setBaseUrl(String(process.env.STORYBOOK_BASE_URL))

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
