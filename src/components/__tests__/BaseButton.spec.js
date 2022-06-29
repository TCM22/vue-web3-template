import { shallowMount } from '@vue/test-utils'
import { describe, afterEach, it, expect } from 'vitest'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton', () => {
  let wrapper

  const findButton = () => wrapper.find('button')

  function createComponent(params = {}) {
    wrapper = shallowMount(BaseButton, params)
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render with a default slot', () => {
    createComponent({
      slots: {
        default: 'Hello',
      },
    })
    expect(findButton().text()).toBe('Hello')
  })

  it('should be type button', () => {
    createComponent()
    expect(findButton().attributes('type')).toBe('button')
  })
})
