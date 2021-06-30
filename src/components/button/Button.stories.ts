import { Meta } from '@storybook/vue'
import TheButton from './Button.vue'

export default {
  title: 'Exampxle/ButtonX',
  component: TheButton,
  argTypes: {
    variant: {
      control: 'text',
      defaultValue: 'Juan Ramon',
      description: 'Sei la whatever tumorrow'
    }
  }
} as Meta<Record<number, number>>

export const Testing = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheButton },
  template: '<TheButton @onClick="onClick" variant="My name is JA">My Full Name</TheButton>'
})
