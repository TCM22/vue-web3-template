import { mount } from '@vue/test-utils'
import { describe, afterEach, it, expect } from 'vitest'
import SidebarNavigationLink from '@/components/SidebarNavigationLink.vue'

describe('SidebarNavigationLink', () => {
  let wrapper

  function createComponent(params = {}) {
    wrapper = mount(SidebarNavigationLink, {
      ...params,
    })
  }

  describe('when isActive', () => {
    it('renders active link classes', () => {
      createComponent({
        props: {
          isActive: true,
        },
      })

      expect(wrapper.html()).toContain('bg-zinc-700')
      expect(wrapper.html()).toContain('text-zinc-50')
    })
  })

  describe('renders slot', () => {
    it('has text', () => {
      createComponent({
        slots: {
          default: 'Default',
        },
      })
      expect(wrapper.text()).toBe('Default')
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })
})
