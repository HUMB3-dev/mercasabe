import { Meta } from '@storybook/vue'
import TheButton from './Button.vue'

export default {
  title: 'Widget/Card',
  component: TheButton,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Title'
    },
    value: {
      control: 'text',
      defaultValue: '58.39k'
    },
    hint: {
      control: 'text',
      defaultValue: '35%'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
      description: 'Sei la whatever tumorrow'
    }
  }
} as Meta<Record<number, number>>

export const Testing = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheButton },
  template: `
    <BRow>
    <BCol cols="4">
      <TheButton @onClick="onClick" v-bind="$props">
        My Full Name
        <template #footer>
          <a class="fw-semi-bold fs--1 text-nowrap">See all</a>
        </template>
      </TheButton>
    </BCol>
    </BRow>
  `
})
