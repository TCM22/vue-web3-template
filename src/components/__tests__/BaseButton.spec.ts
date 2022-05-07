import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButtonVue from '../BaseButton.vue'

describe('base button wrapper', () => {
  it('renders properly with a slot', () => {
    const wrapper = mount(BaseButtonVue, {
      slots: {
        default: 'Default',
      },
    })
    expect(wrapper.html()).toContain('Default')
  })

  it('is type button', () => {
    const wrapper = mount(BaseButtonVue, {
      slots: {
        default: 'Default',
      },
    })
    expect(wrapper.find('button').element).toBeTruthy()
    expect(wrapper.find('button').element.type).toBe('button')
  })

  it('has minimum styling', () => {
    const wrapper = mount(BaseButtonVue)

    expect(wrapper.classes()).toContain('rounded-md')
    expect(wrapper.classes()).toContain('focus:outline-none')
    expect(wrapper.classes()).toContain('focus:ring-indigo-300/50')
    expect(wrapper.classes()).toContain('focus-visible:ring-2')
  })
})
