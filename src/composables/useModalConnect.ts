import { ref } from 'vue'

const isOpen = ref(false)

export function useModalConnect() {
  return { isOpen }
}
