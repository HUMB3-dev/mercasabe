import { Meta } from '@storybook/vue'
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import ProductForm from './ProductForm.vue'

const story: Meta<ProductForm> = {
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

export const NewProduct = (prop, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProductForm },
  template: '<ProductForm :value="$props.value" :busy="$props.busy" />'
})


export default story
