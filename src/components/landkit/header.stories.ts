import { Meta } from '@storybook/vue';
import MKHeader from './header.component.vue';

export default {
  title: 'landkit/navbar/header',
  component: MKHeader,
  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'Title'
    },
    src: {
      control: 'text',
      defaultValue: 'https://www.merkaly.io/icon.png'
    }
  }
} as Meta<Record<number, number>>;

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MKHeader },
  template: `<MKHeader v-bind="$props" @onClick="onClick" />`
});
