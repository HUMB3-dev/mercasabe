import MyButton from './Button.vue'

export default {
  title: 'Example/ButtonX',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'ButtonX'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'ButtonX'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'ButtonX'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'ButtonX'
}
