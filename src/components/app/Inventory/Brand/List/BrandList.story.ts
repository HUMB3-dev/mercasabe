import { Vue } from 'vue-property-decorator'
import { getBrands } from '../../../../../fixture/brand.fixture'
import BrandList from './BrandList.vue'

export default {
  title: 'App/Inventory/Brand/List',
  component: BrandList,
  argTypes: {
    items: { table: { disable: true } },
    to: { table: { disable: true } }
  },
  args: {
    busy: false,
    perPage: 5,
    items: getBrands(15),
    title: 'List of brands',
    to: (id: string) => `/test/${id}`
  }
}

export const Default = (args: BrandList) => Vue.extend({
  props: Object.keys(args),
  components: { BrandList },
  template: '<BrandList v-bind="$props" />'
})
Default.args = {
  totalRows: 15
}
