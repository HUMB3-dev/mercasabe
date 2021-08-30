import { getOrganization } from '../../../../../fixture/organization.fixture'
import OrganizationForm from './OrganizationForm.vue'

export default {
  title: 'App/Account/Organization/Form',
  component: OrganizationForm,
  args: {
    loading: false,
    value: getOrganization()
  }
}

const Template = (args: OrganizationForm) => ({
  props: Object.keys(args),
  components: { OrganizationForm },
  template: '<OrganizationForm v-bind="$props" />'
})

export const Default = Template.bind({})
