import { Meta } from '@storybook/vue'
import KHeader from './header.vue'

export default {
  title: 'landkit/header',
  component: KHeader
} as Meta

export const LoggedOff = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KHeader },
  template: `
    <KHeader name="Merkaly" src="https://www.merkaly.io/icon.png">
    <template #menu>
      <BNavItem>Landings</BNavItem>
      <BNavItem>Pages</BNavItem>
      <BNavItem>Account</BNavItem>
      <BNavItem>Documentation</BNavItem>
    </template>

    <template #actions>
      <BBtn variant="primary" size="sm" class="navbar-btn">
        Try now
      </BBtn>
    </template>

    </KHeader>`
})
