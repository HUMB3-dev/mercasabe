import { Meta } from '@storybook/vue'
import { Vue } from 'vue-property-decorator'
import TheHeader from './Header.vue'

export default {
  title: 'Layout/Header',
  component: TheHeader,
  args: {
    value: '',
    title: 'Title',
    src: 'https://prium.github.io/falcon/v3.1.0/assets/img/icons/spot-illustrations/falcon.png'
  }
} as Meta<TheHeader>

export const Default = (args: TheHeader) => Vue.extend({
  props: Object.keys(args),
  components: { TheHeader },
  template: '<TheHeader v-bind="$props"/>'
})
