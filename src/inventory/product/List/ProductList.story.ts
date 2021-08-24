import Product from '@merkaly/sdk-js/src/inventory/product/product.endpoint'
import Vue from 'vue'
import ProductList from './ProductList.vue'

export default {
  title: 'Inventory/Product/List',
  component: ProductList,
  args: {
    loading: false,
    title: 'List of products',
    to: (id: string) => `/test/${id}`
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

export const Filled = (args: ProductList, { loaded: { products } }: any) => Vue.extend({
  props: Object.keys(args),
  data: () => ({ products }),
  components: { ProductList },
  template: '<ProductList :items="products" v-bind="$props" />'
})

Filled.loaders = [
  async () => ({
    products: await Product.find()
  })
]
