import '!style-loader!css-loader!sass-loader!./styles.scss'

import SDK from '@merkaly/sdk-js'
import { Component } from 'vue'
import { getModule } from 'vuex-module-decorators'
import '../src/main'

import store from '../store'
import Inventory from '../store/inventory'

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
