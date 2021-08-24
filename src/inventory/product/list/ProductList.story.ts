import Vue from 'vue'
import ProductSeed from './Product.seed'
import ProductList from './ProductList.vue'

export default {
  title: 'Inventory/Product/List',
  component: ProductList,
  args: {
    loading: false,
    items: ProductSeed(),
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
  template: '<ProductList  v-bind="$props" />'
})

