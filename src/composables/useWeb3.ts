import { computed, reactive } from 'vue'
import { Web3Provider } from '@ethersproject/providers'
import { getInstance } from 'vite-plugin-vue-lock'

const defaultNetwork = 1

const state = reactive<{
  account: string
  chainId: number
  authLoading: boolean
}>({
  account: '',
  chainId: defaultNetwork,
  authLoading: false,
})

export function useWeb3() {
  const auth = getInstance()

  async function login(connector = 'injected') {
    state.authLoading = true

    await auth.login(connector)
    if (auth.provider.value) {
      auth.web3 = new Web3Provider(auth.provider.value, 'any')
      await loadProvider()
    }
    state.authLoading = false
  }

  function logout() {
    auth.logout()
    state.account = ''
  }

  async function loadProvider() {
    try {
      if (
        auth.provider.value.removeAllListeners &&
        !auth.provider.value.isTorus
      )
        auth.provider.value.removeAllListeners()
      if (auth.provider.value.on) {
        auth.provider.value.on('chainChanged', async (chainId: any) => {
          state.chainId = chainId
        })
        auth.provider.value.on(
          'accountsChanged',
          async (accounts: string[]) => {
            if (accounts.length !== 0) {
              state.account = accounts[0]
              await login()
            }
          }
        )
      }
      console.log('Provider', auth.provider.value)
      let network, accounts
      try {
        const connector = auth.provider.value?.connectorName
        if (connector === 'gnosis') {
          const { chainId: safeChainId, safeAddress } = auth.web3.provider.safe
          network = { chainId: safeChainId }
          accounts = [safeAddress]
        } else {
          ;[network, accounts] = await Promise.all([
            auth.web3.getNetwork(),
            auth.web3.listAccounts(),
          ])
        }
      } catch (e) {
        console.log(e)
      }
      console.log('Network', network)
      console.log('Accounts', accounts)

      state.account = accounts.length > 0 ? accounts[0] : null
    } catch (e) {
      state.account = ''
      return Promise.reject(e)
    }
  }

  return {
    web3: computed(() => state),
    web3Account: computed(() => state.account),
    login,
    logout,
    auth,
  }
}
