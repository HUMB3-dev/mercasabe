import '@merkaly/ui/src/falcon/index.scss'
import Vue, { Component } from 'vue'
import MerkalyComponents from '../src/main'
import store from '../store'

Vue.use(MerkalyComponents)

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
