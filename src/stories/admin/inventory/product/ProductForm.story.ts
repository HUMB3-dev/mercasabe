import Product from '@merkaly/sdk-js/src/inventory/product/product.endpoint'
import Vue from 'vue'
import ProductForm from './ProductForm.component.vue'

export default {
  title: 'admin/inventory/product',
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
