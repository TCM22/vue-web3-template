import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SidebarNavigationLinkVue from '../SidebarNavigationLink.vue'

describe('sidebar navigation button', () => {
  const wrapper = mount(SidebarNavigationLinkVue, {
    slots: {
      default: 'Default',
    },
    props: {
      isActive: false,
    },
  })

  describe('component renders', () => {
    it('exists', () => {
      expect(wrapper.exists()).toBe(true)
    })
    it('has a default slot', () => {
      expect(wrapper.html()).toContain('Default')
    })
  })

  describe('active classes', () => {
    it('is active', async () => {
      await wrapper.setProps({ isActive: true })
      expect(wrapper.classes()).toContain('bg-zinc-700')
      expect(wrapper.classes()).toContain('text-zinc-50')
    })
    it('is not active', async () => {
      await wrapper.setProps({ isActive: false })
      expect(wrapper.classes()).toContain('hover:bg-zinc-700')
    })
  })
})
