import { Meta } from '@storybook/vue'
import { Vue } from 'vue-property-decorator'
import Fontawesome from '../../shared/icon/FontAwesome/FontAwesome.vue'
import TheHeader from './Header.vue'
import UserDropdown from './UserDropdown/UserDropdown.vue'

export default {
  title: 'Layout/Header',
  component: TheHeader,
  args: {
    value: '',
    to: '/random',
    title: 'Title',
    src: 'https://prium.github.io/falcon/v3.1.0/assets/img/icons/spot-illustrations/falcon.png'
  }
} as Meta<TheHeader>

export const Default = (args: TheHeader) => Vue.extend({
  props: Object.keys(args),
  components: { TheHeader, UserDropdown, Fontawesome },
  template: `
    <TheHeader v-bind="$props">
    <UserDropdown :src="$props.src" name="kronhyx@gmail.com">
      <BDropdownItem variant="warning">
        <Fontawesome name="crown" class="me-1" />
        <span class="fw-bold">Go Pro</span>
      </BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem>Set status</BDropdownItem>
      <BDropdownItem>Profile & account</BDropdownItem>
      <BDropdownItem>Feedback</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem>Settings</BDropdownItem>
      <BDropdownItem>Logout</BDropdownItem>
    </UserDropdown>
    </TheHeader>`
})
