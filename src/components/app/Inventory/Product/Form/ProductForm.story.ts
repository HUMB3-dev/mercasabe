import { Vue } from 'vue-property-decorator'
import { getProduct } from '../../../../../fixture/product.fixture'
import ProductForm from './ProductForm.vue'

export default {
  title: 'App/Inventory/Product/Form',
  component: ProductForm,
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

export const Empty = (args: ProductForm) => Vue.extend({
  props: Object.keys(args),
  components: { ProductForm },
  template: '<ProductForm v-model="product" v-bind="$props" />'
})

