<script setup lang="ts">
import { useWeb3 } from '@/composables/useWeb3'
import { shortenAddress } from '@/helpers/utils'

const { web3Account, web3 } = useWeb3()
</script>

<template>
  <div
    class="flex w-full flex-shrink-0 items-center rounded-lg p-2 text-left hover:bg-zinc-700"
  >
    <img
      class="inline-block h-12 w-12 rounded-full"
      :src="`https://stamp.fyi/avatar/eth:${web3Account}?s=${
        parseInt('100') * 2
      }`"
      alt="web3-avatar"
    />

    <div class="ml-3 truncate">
      <p class="text-sm font-medium text-zinc-200">
        {{ shortenAddress(web3Account) }}
      </p>
      <p class="min-h-[16px] truncate text-xs font-medium text-zinc-400">
        {{ web3.ens }}
      </p>
    </div>
  </div>
</template>
