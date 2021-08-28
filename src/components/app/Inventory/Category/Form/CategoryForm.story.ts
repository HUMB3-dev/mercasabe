import { getCategory } from '../../../../../fixture/category.fixture'
import CategoryForm from './CategoryForm.vue'

export default {
  title: 'App/Inventory/Category/Form',
  component: CategoryForm,
  args: {
    loading: false,
    value: getCategory()
  }
}

const Template = (args: CategoryForm) => ({
  props: Object.keys(args),
  components: { CategoryForm },
  template: '<CategoryForm v-bind="$props" />'
})

export const Default = Template.bind({})
