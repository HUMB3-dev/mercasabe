import { Vue } from 'vue-property-decorator'
import TheSidebar from './Sidebar.vue'
import { ISidebarMenu } from './SidebarMenu/SidebarMenu.vue'

export default {
  title: 'Layout/Sidebar',
  component: TheSidebar,
  argTypes: {
    variant: {
      options: ['transparent', 'inverted', 'card', 'vibrant'],
      control: { type: 'select' }
    }
  },
  args: {
    title: 'test',
    to: '/main/page',
    collapsed: false,
    src: 'https://bootstrap-vue.org/_nuxt/icons/icon_512x512.67aef2.png',
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
