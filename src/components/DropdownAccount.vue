<script setup lang="ts">
import { useWeb3 } from '@/composables/useWeb3'
import { useModalConnect } from '@/composables/useModalConnect'
const { logout } = useWeb3()
const { isOpen } = useModalConnect()

function handleAction(e: string) {
  if (e === 'disconnect') return logout()
  if (e === 'change') return (isOpen.value = true)
}

const items = [
  { name: 'View account', action: 'view' },
  { name: 'Change wallet', action: 'change' },
  { name: 'Disconnect', action: 'disconnect' },
]
</script>

<template>
  <BaseDropdown :dropdown-items="items" @action="handleAction">
    <slot />
  </BaseDropdown>
</template>
