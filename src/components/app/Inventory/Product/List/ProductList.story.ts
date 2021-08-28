import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/vue'
import { Vue } from 'vue-property-decorator'
import { getProducts } from '../../../../../fixture/product.fixture'
import ProductList from './ProductList.vue'

export default {
  title: 'App/Inventory/Product/List',
  component: ProductList,
  argTypes: {
    items: { table: { disable: true } },
    to: { table: { disable: true } }
  },
  args: {
    busy: false,
    perPage: 5,
    items: getProducts(15),
    title: 'List of products',
    to: (id: string) => `/test/${id}`
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta<ProductList>

export const Filled = (args: ProductList) => Vue.extend({
  props: Object.keys(args),
  components: { ProductList },
  methods: { reload: action('onReload') },
  template: '<ProductList v-bind="$props" @reload="reload" />'
})
Filled.args = {
  totalRows: 15
}
