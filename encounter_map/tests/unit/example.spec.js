import { shallowMount } from '@vue/test-utils'
import RedDot from '@/components/RedDot.vue'

describe('RedDot.vue', () => {
  it('has img tag', () => {
    const wrapper = shallowMount(RedDot, {
    })
    expect(wrapper.html()).toContain('<img')
  })
})
