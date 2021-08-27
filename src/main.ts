import { BootstrapVue } from 'bootstrap-vue'
import { VueConstructor } from 'vue'
import FontAwesome from './components/shared/icon/fontawesome/fontawesome.vue'

namespace MerkalyComponents {
  export const install = (vue: VueConstructor) => {
    vue.use(BootstrapVue)
    vue.component('FontAwesome', FontAwesome)
  }
}

export default MerkalyComponents
