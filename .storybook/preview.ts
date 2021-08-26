import '!style-loader!css-loader!sass-loader!./styles.scss'
import SDK from '@merkaly/sdk-js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue, { Component } from 'vue'
import { getModule } from 'vuex-module-decorators'

import store from '../store'
import Inventory from '../store/inventory'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

SDK.setBaseUrl('https://api.merkaly.io/')

export const decorators = [(story: Component): Component => ({
  store,
  created () {
    const { fetchCategories } = getModule(Inventory, store)

    return fetchCategories()
  },
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
