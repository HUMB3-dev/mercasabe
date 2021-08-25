import { Meta } from '@storybook/vue'
import { Vue } from 'vue-property-decorator'
import { getProducts } from '../../../../fixture/product.fixture'
import InventoryProductList from './list.vue'

export default {
  title: 'Inventory/Product/List',
  component: InventoryProductList,
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
} as Meta<InventoryProductList>

export const Filled = (args: InventoryProductList) => Vue.extend({
  props: Object.keys(args),
  components: { InventoryProductList },
  template: '<InventoryProductList v-bind="$props" />'
})
Filled.args = {
  totalRows: 15
}
