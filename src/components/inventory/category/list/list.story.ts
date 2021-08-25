import { Vue } from 'vue-property-decorator'
import { getProducts } from '../../../../fixture/category.fixture'
import CategoryList from './list.vue'

export default {
  title: 'Inventory/Category/List',
  component: CategoryList,
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

export const Filled = (args: CategoryList) => Vue.extend({
  props: Object.keys(args),
  components: { InventoryProductList: CategoryList },
  template: '<InventoryProductList v-bind="$props" />'
})
Filled.args = {
  totalRows: 15
}
