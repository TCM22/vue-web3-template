<script setup lang="ts">
import {
  Dialog,
  DialogOverlay,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { useWeb3 } from '@/composables/useWeb3'

const { web3Account } = useWeb3()

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]

defineProps<{
  sidebarOpen: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog
      as="div"
      class="fixed inset-0 z-40 flex lg:hidden"
      @close="$emit('close')"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-zinc-900/80" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div
          class="relative flex w-full max-w-xs flex-1 flex-col bg-zinc-900 focus:outline-none"
        >
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <BaseButton
                class="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                @click="$emit('close')"
              >
                <span class="sr-only">Close sidebar</span>
                <i-ho-x class="h-6 w-6" aria-hidden="true" />
              </BaseButton>
            </div>
          </TransitionChild>
          <DialogPanel class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
            <div class="flex flex-shrink-0 items-center px-4">
              <i-s-logo class="text-3xl text-indigo-400" />
            </div>
            <div v-if="web3Account" class="mt-4 px-2">
              <SidebarAccount />
            </div>
            <nav aria-label="Sidebar" class="mt-5">
              <div class="space-y-1 px-2">
                <BaseLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.path"
                >
                  <i-ho-home v-if="item.name === 'Home'" class="mr-3 h-6 w-6" />
                  {{ item.name }}
                </BaseLink>
              </div>
            </nav>
          </DialogPanel>
        </div>
      </TransitionChild>
      <div class="w-14 flex-shrink-0" aria-hidden="true">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
</template>
