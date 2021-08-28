import { getProduct } from '../../../../../fixture/product.fixture'
import CategoryForm from '../../Category/Form/CategoryForm.vue'
import ProductForm from './ProductForm.vue'

export default {
  title: 'App/Inventory/Product/Form',
  component: ProductForm,
  args: {
    loading: false,
    value: getProduct()
  }
}

const Template = (args: CategoryForm) => ({
  props: Object.keys(args),
  components: { ProductForm },
  template: '<ProductForm v-bind="$props" />'
})

export const Default = Template.bind({})
