<script setup lang="ts">
import { useWeb3 } from '@/composables/useWeb3'

const { web3Account } = useWeb3()
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col border-x">
    <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
      <div class="flex flex-shrink-0 items-center space-x-2 px-4 text-xl">
        <i-s-logo class="text-4xl text-indigo-400" />
        <span class="text-2xl font-bold"> Brand </span>
      </div>
      <div v-if="web3Account" class="mt-4 px-2">
        <DropdownAccount>
          <SidebarAccount />
        </DropdownAccount>
      </div>
      <SidebarNavigation />
    </div>
  </div>
</template>
