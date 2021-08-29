import { Vue } from 'vue-property-decorator'
import FontAwesome from './FontAwesome.vue'

export default {
  title: 'Shared/Icon/FontAwesome',
  component: FontAwesome,
  argTypes: {
    variant: {
      options: ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'],
      control: { type: 'select' }
    },
    animation: {
      options: ['none', 'beat', 'fade', 'flash', 'flip', 'spin'],
      control: { type: 'select' }
    },
    size: {
      options: new Array(9).fill(null).map((none, id) => (id + 1) + 'x'),
      control: { type: 'select' }
    }
  }
}

export const Filled = (args: typeof FontAwesome) => Vue.extend({
  props: Object.keys(args),
  components: { FontAwesome },
  template: '<FontAwesome v-bind="$props" />'
})
Filled.args = {
  variant: 'duotone',
  size: '2x',
  name: 'life-ring'
}
