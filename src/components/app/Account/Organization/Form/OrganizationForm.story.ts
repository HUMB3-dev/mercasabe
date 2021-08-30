import OrganizationReference from '@merkaly/sdk-js/src/account/organization/organization.reference'
import { getOrganization } from '../../../../../fixture/organization.fixture'
import OrganizationForm from './OrganizationForm.vue'

export default {
  title: 'App/Account/Organization/Form',
  component: OrganizationForm,
  args: {
    loading: false,
    value: new OrganizationReference()
  }
}

const Template = (args: OrganizationForm) => ({
  props: Object.keys(args),
  components: { OrganizationForm },
  template: '<OrganizationForm v-bind="$props" />'
})

export const New = Template.bind({})

export const Edit = Template.bind({})
Edit.args = {
  value: getOrganization()
}
