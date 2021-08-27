import SDK from '@merkaly/sdk-js'
import Vue, { Component } from 'vue'
import { getModule } from 'vuex-module-decorators'
import MKComponents from '../src/main'
import store from '../store'
import Inventory from '../store/inventory'

Vue.use(MKComponents)

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
