import Product from '@merkaly/sdk-js/src/inventory/product/product.endpoint'
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import Inventory from '../../../store/inventory'
import ProductForm from './ProductForm.vue'

export default {
  title: 'inventory/product',
  component: ProductForm,
  args: {
    busy: false,
    value: {}
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

export const Empty = (args: ProductForm, { loaded: { products: [product] } }: any) => Vue.extend({
  props: Object.keys(args),
  created () {
    const { fetchCategories } = getModule(Inventory, this.$store)

    return fetchCategories()
  },
  data () {
    return { product }
  },
  components: { ProductForm },
  template: '<ProductForm v-model="product" :busy="$props.busy" />'
})

Empty.loaders = [
  async () => ({
    products: await Product.find()
  })
]
