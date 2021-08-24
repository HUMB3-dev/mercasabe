import Vue from 'vue'
import ProductsSeed from './ProductList.seed'
import ProductList from './ProductList.vue'

export default {
  title: 'Inventory/Product/List',
  component: ProductList,
  argTypes: {
    items: { table: { disable: true } },
    to: { table: { disable: true } }
  },
  args: {
    loading: false,
    perPage: 5,
    items: ProductsSeed(),
    title: 'List of products',
    to: (id: string) => `/test/${id}`
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

export const Filled = (args: ProductList) => Vue.extend({
  props: Object.keys(args),
  components: { ProductList },
  template: '<ProductList v-bind="$props" />'
})
Filled.args = {
  totalRows: 15
}
