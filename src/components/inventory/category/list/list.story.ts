import { Vue } from 'vue-property-decorator'
import { getCategories } from '../../../../fixture/category.fixture'
import CategoryList from './list.vue'

export default {
  title: 'Inventory/Category/List',
  component: CategoryList,
  argTypes: {
    items: { table: { disable: true } },
    to: { table: { disable: true } }
  },
  args: {
    busy: false,
    perPage: 5,
    items: getCategories(15),
    title: 'List of categories',
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
