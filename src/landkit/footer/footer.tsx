import { Meta } from '@storybook/vue'
import KFooter from './footer.vue'

export default {
  title: 'landkit/footer',
  component: KFooter
} as Meta

export const LoggedOff = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KFooter },
  template: `
    <KFooter name="Merkaly" src="https://www.merkaly.io/icon.png">
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

    </KFooter>`
})
