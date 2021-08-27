import { Vue } from 'vue-property-decorator'
import TheSidebar from './Sidebar.vue'
import { ISidebarMenu } from './SidebarMenu/SidebarMenu.vue'

export default {
  title: 'Layout/Sidebar',
  component: TheSidebar,
  args: {
    title: 'test',
    to: '/main/page',
    tree: [{
      title: 'Application',
      items: [{
        title: 'Calendar',
        icon: 'calendar-alt'
      }, {
        title: 'Store',
        icon: 'store',
        children: [{
          title: 'Analytics',
          icon: 'analytics'
        }]
      }]
    }] as ISidebarMenu[]
  }
}

export const Default = (args: TheSidebar) => Vue.extend({
  props: Object.keys(args),
  components: { TheSidebar },
  template: '<TheSidebar v-bind="$props" />'
})
