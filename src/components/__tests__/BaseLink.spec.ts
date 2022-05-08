import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseLinkVue from '../BaseLink.vue'
import router from '@/router'

describe('base link wrapper', () => {
  const wrapper = mount(BaseLinkVue, {
    props: {
      to: '/',
    },
    slots: {
      default: 'Default',
    },
    global: {
      plugins: [router],
    },
  })

  describe('component renders', () => {
    it('exists', () => {
      expect(wrapper.exists()).toBe(true)
    })
    it('has a prop to', () => {
      expect(wrapper.props().to).toBe('/')
    })
    it('has a default slot', () => {
      expect(wrapper.html()).toContain('Default')
    })
  })

  describe('external link', () => {
    it('is external', async () => {
      await wrapper.setProps({ to: 'https://google.com' })
      expect(wrapper.vm.isExternal).toBe(true)
    })
    it('render anchor tag', async () => {
      await wrapper.setProps({ to: 'https://google.com' })
      expect(wrapper.find('a').exists()).toBe(true)
    })
  })

  describe('internal route', () => {
    it('is not external', async () => {
      await wrapper.setProps({ to: { path: '/' } })
      expect(wrapper.vm.isExternal).toBe(false)
    })
    it('render router-link', async () => {
      await wrapper.setProps({ to: { path: '/' } })
      expect(wrapper.getComponent({ name: 'router-link' })).toBeTruthy()
    })
  })
})
