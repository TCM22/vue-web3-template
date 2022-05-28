import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, afterEach, it, expect } from 'vitest'
import BaseLink from '@/components/BaseLink.vue'
import router from '../../router'

describe('BaseLink', () => {
  let wrapper

  const findAchor = () => wrapper.find('[data-testid="base-external-link"]')
  const findComponentRouterLink = () => wrapper.findComponent(RouterLinkStub)

  function createComponent(params = {}) {
    wrapper = shallowMount(BaseLink, {
      ...params,
      global: {
        plugins: [router],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
  }

  afterEach(() => {
    wrapper.unmount()
  })

  describe('when isExternal', () => {
    it('renders external link correctly', () => {
      createComponent({
        props: {
          to: 'https://google.com/',
        },
        slots: {
          default: 'Google',
        },
      })

      expect(findAchor().exists()).toBe(true)
      expect(findAchor().text()).toBe('Google')
      expect(findAchor().attributes('href')).toBe('https://google.com/')
    })

    it('renders external link href starting with https://', async () => {
      createComponent({
        props: {
          to: 'https://google.com/',
        },
      })
      expect(findAchor().attributes('href')).toBe('https://google.com/')
      await wrapper.setProps({ to: 'http://google.com/' })
      expect(findAchor().attributes('href')).toBe('https://google.com/')
    })

    it('doesnt render router-link', () => {
      createComponent({
        props: {
          to: 'https://google.com/',
        },
      })

      expect(findComponentRouterLink().exists()).toBe(false)
    })
  })

  describe('when not isExternal', () => {
    it('renders router-link correctly', () => {
      createComponent({
        props: {
          to: { name: 'home' },
        },
        slots: {
          default: 'Google',
        },
      })

      expect(findComponentRouterLink().exists()).toBe(true)
      expect(findComponentRouterLink().text()).toBe('Google')
      expect(findComponentRouterLink().props('to')).toMatchObject({
        name: 'home',
      })
    })

    it('doesnt render external link', () => {
      createComponent({
        props: {
          to: { name: 'home' },
        },
      })
      expect(findAchor().exists()).toBe(false)
    })
  })
})
