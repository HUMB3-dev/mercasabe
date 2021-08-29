import { getOrganizations } from '../../../../../fixture/organization.fixture'
import OrganizationList from './OrganizationList.vue'

export default {
  title: 'App/Account/Organization/List',
  component: OrganizationList,
  argTypes: {
    items: { table: { disable: true } },
    to: { table: { disable: true } }
  },
  args: {
    busy: false,
    perPage: 5,
    items: getOrganizations(15),
    title: 'List of organizations',
    to: (id: string) => `/org/${id}`
  }
}

const Template = (args: OrganizationList) => ({
  props: Object.keys(args),
  components: { OrganizationList },
  template: '<OrganizationList v-bind="$props" />'
})

export const Default = Template.bind({})
