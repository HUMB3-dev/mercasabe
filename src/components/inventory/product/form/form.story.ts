import { Vue } from 'vue-property-decorator'
import { getProduct } from '../../../../fixture/product.fixture'
import InventoryProductForm from './form.vue'

export default {
  title: 'Inventory/Product/Form',
  component: InventoryProductForm,
  args: {
    busy: false,
    product: getProduct(),
    value: {}
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

export const Empty = (args: InventoryProductForm) => Vue.extend({
  props: Object.keys(args),
  components: { InventoryProductForm },
  template: '<InventoryProductForm v-model="product" v-bind="$props" />'
})

