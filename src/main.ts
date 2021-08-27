import '@merkaly/ui/src/falcon/index.scss'
import { BootstrapVue } from 'bootstrap-vue'
import { VueConstructor } from 'vue'

export default {
  install: (vue: VueConstructor) => {
    vue.use(BootstrapVue)
  }
}
