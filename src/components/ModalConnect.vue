<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWeb3 } from '@/composables/useWeb3'
import { connectors } from '@/helpers/connectors'
import { getIpfsUrl } from '@/helpers/utils'
import { useModalConnect } from '@/composables/useModalConnect'
import { refDebounced } from '@vueuse/core'
import { getInjectedWallet } from 'vite-plugin-vue-lock'

const { isOpen } = useModalConnect()
const { login, web3Account } = useWeb3()

const loading = ref(false)
const loadingDebounced = refDebounced(loading)

async function handleSelect(connectorId: string) {
  loading.value = true
  await login(connectorId)
  loading.value = false
  if (web3Account.value) return (isOpen.value = false)
}

const injectedWallet = computed(() => getInjectedWallet())
</script>

<template>
  <BaseModal
    :is-open="isOpen"
    title="Available wallets"
    @close="isOpen = false"
  >
    <template #body>
      <div v-if="loadingDebounced" class="h-[140px] gap-2 text-center">
        <div class="flex h-full items-center justify-center">
          <i-s-spinner class="h-10 w-10 animate-spin" />
        </div>
      </div>
      <div v-else class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          v-for="(connector, id, i) in connectors"
          :key="i"
          @click="handleSelect(connector.id)"
        >
          <ButtonWallet v-if="id === 'injected' && injectedWallet">
            <img
              :src="getIpfsUrl(injectedWallet.icon)"
              height="36"
              width="36"
              :alt="injectedWallet.name"
            />
            {{ injectedWallet.name }}
          </ButtonWallet>
          <ButtonWallet v-else-if="id !== 'injected'">
            <img
              :src="getIpfsUrl((connector as any).icon)"
              height="36"
              width="36"
              :alt="connector.name"
            />
            <span>{{ connector.name }}</span>
          </ButtonWallet>
        </div>
      </div>
    </template>
  </BaseModal>
</template>
