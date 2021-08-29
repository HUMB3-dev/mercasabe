import { Meta } from '@storybook/vue'
import Layout from './Layout.vue'
import { ISidebarMenu } from './Sidebar/SidebarMenu/SidebarMenu.vue'

export default {
  title: 'Layout/Base',
  component: Layout,
  parameters: {
    backgrounds: { disable: true }
  },
  argTypes: {
    variant: {
      options: [null, 'plain', 'vibrant'],
      control: { type: 'select' }
    }
  },
  args: {
    title: 'test',
    variant: null,
    version: 'v1.6.1',
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
          icon: 'analytics',
          children: [{
            title: 'Dashboard',
            icon: 'dashboard'
          }]
        }]
      }]
    }] as ISidebarMenu[]
  }
} as Meta<Layout>

const Template = (args: Layout) => ({
  props: Object.keys(args),
  components: { Layout },
  template: `
    <Layout v-bind="$props">
    <BCard>
      <BRow align-v="center" align-h="center">
        <BCol lg="auto" class="ps-lg-4 my-5">
          <h3 class="text-primary">Edit me!</h3>
          <p class="lead">Create Something Beautiful.</p>
          <BBtn variant="falcon-primary">Getting started</BBtn>
        </BCol>
      </BRow>
    </BCard>
    </Layout>`
})

export const ThemeLight = Template.bind({})
ThemeLight.args = {
  title: 'Light',
  dark: false
}

export const ThemeDark = Template.bind({})
ThemeDark.args = {
  title: 'Dark',
  dark: true
}
