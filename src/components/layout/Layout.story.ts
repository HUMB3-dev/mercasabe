import { Meta } from '@storybook/vue'
import Layout from './Layout.vue'
import { ISidebarMenu } from './Sidebar/SidebarMenu/SidebarMenu.vue'

export default {
  title: 'Layout',
  component: Layout,
  argTypes: {
    variant: {
      options: ['transparent', 'inverted', 'card', 'vibrant'],
      control: { type: 'select' }
    }
  },
  args: {
    title: 'test',
    to: '/main/page',
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
} as Meta<Layout>

const Template = (args: Layout) => ({
  props: Object.keys(args),
  components: { Layout },
  template: '<Layout v-bind="$props" />'
})

export const ThemeLight = Template.bind({})
ThemeLight.args = {
  title: 'Light',
  dark: false
}

export const ThemeDark = Template.bind({})
ThemeDark.parameters = {
  backgrounds: { default: 'dark' }
}
ThemeDark.args = {
  title: 'Dark',
  dark: true
}
