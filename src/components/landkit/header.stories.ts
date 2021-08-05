import { Meta } from '@storybook/vue';
import MKHeader from './header.component.vue';

export default {
  title: 'landkit/navbar/header',
  component: MKHeader,
  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'Merkaly'
    },
    src: {
      control: 'text',
      defaultValue: 'https://www.merkaly.io/icon.png'
    }
  }
} as Meta<Record<number, number>>;

export const LoggedOff = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MKHeader },
  template: `
    <MKHeader v-bind="$props" @onClick="onClick">
    <template #menu>
      <BNavItem>Landings</BNavItem>
      <BNavItem>Pages</BNavItem>
      <BNavItem>Account</BNavItem>
      <BNavItem>Documentation</BNavItem>
    </template>

    <template #actions>
      <BBtn variant="primary" size="sm" class="navbar-btn">
        Buy nows
      </BBtn>
    </template>

    </MKHeader>`
});
