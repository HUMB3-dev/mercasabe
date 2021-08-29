import { getUsers } from '../../../../../fixture/user.fixture'
import UserList from './UserList.vue'

export default {
  title: 'App/Account/User/List',
  component: UserList,
  argTypes: {
    items: { table: { disable: true } },
    to: { table: { disable: true } }
  },
  args: {
    busy: false,
    perPage: 5,
    items: getUsers(15),
    title: 'List of users',
    to: (id: string) => `/user/${id}`
  }
}

const Template = (args: UserList) => ({
  props: Object.keys(args),
  components: { UserList },
  template: '<UserList v-bind="$props" />'
})

export const Default = Template.bind({})
