import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const isConnectOpen = ref(false)

export function useModalConnect() {
  function openConnect() {
    isConnectOpen.value = true
  }

  function closeConnect() {
    isConnectOpen.value = false
  }
  return {
    isConnectOpen: computed(() => isConnectOpen.value),
    openConnect,
    closeConnect,
  }
}
