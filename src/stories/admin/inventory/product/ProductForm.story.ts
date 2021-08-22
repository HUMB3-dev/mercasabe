import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import ProductForm from './ProductForm.component.vue'

export default {
  title: 'admin/inventory/product',
  component: ProductForm,
  args: {
    busy: false,
    value: new ProductReference()
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

export const Empty = (prop: Record<string, string>) => ({
  props: Object.keys(prop),
  components: { ProductForm },
  template: '<ProductForm :value="$props.value" :busy="$props.busy" />'
})
