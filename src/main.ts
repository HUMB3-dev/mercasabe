import { BootstrapVue } from 'bootstrap-vue'
import { VueConstructor } from 'vue'

namespace MerkalyComponents {
  export const install = (vue: VueConstructor) => {
    vue.use(BootstrapVue)
  }
}

export default MerkalyComponents
