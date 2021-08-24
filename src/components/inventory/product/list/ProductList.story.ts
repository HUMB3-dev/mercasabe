import { Vue } from 'vue-property-decorator'
import { getProducts } from '../seed'
import InventoryProductList from './ProductList.vue'

export default {
  title: 'Inventory/Product/List',
  component: InventoryProductList,
  argTypes: {
    items: { table: { disable: true } },
    to: { table: { disable: true } }
  },
  args: {
    loading: false,
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
}

export const Filled = (args: InventoryProductList) => Vue.extend({
  props: Object.keys(args),
  components: { InventoryProductList },
  template: '<InventoryProductList v-bind="$props" />'
})
Filled.args = {
  totalRows: 15
}
