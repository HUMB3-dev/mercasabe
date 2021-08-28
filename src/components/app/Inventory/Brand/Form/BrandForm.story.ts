import { getBrand } from '../../../../../fixture/brand.fixture'
import BrandForm from './BrandForm.vue'

export default {
  title: 'App/Inventory/Brand/Form',
  component: BrandForm,
  args: {
    loading: false,
    value: getBrand()
  }
}

const Template = (args: BrandForm) => ({
  props: Object.keys(args),
  components: { BrandForm },
  template: '<BrandForm v-bind="$props" />'
})

export const Default = Template.bind({})
