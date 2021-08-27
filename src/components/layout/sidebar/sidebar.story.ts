import { Vue } from 'vue-property-decorator'
import TheSidebar from './sidebar.vue'

export default {
  title: 'Layout/Sidebar',
  component: TheSidebar,
  arg: {
    title: 'test'
  }
}

export const Default = (args: TheSidebar) => Vue.extend({
  props: Object.keys(args),
  components: { TheSidebar },
  template: `
    <TheSidebar />`
})
