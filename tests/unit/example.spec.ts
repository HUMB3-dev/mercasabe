import { shallowMount } from '@vue/test-utils'
import ProductForm from '@/stories/admin/inventory/product/ProductForm.component.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ProductForm, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
