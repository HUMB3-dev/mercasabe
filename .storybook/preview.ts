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
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#edf2f9' },
      { name: 'dark', value: '#0b1727' },
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
