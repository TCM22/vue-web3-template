<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

defineProps<{
  dropdownItems: { name: string; action: string }[]
}>()

defineEmits(['action'])
</script>

<template>
  <Menu as="div" class="relative inline-block w-full text-left">
    <div>
      <MenuButton
        class="w-full rounded-md text-zinc-50 focus:outline-none focus:ring-indigo-300/50 focus-visible:ring-2"
      >
        <slot />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="ring-primary absolute left-0 mt-2 origin-top-right rounded-md bg-zinc-900 shadow-lg ring-1 ring-indigo-400 ring-opacity-30 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem
            v-for="item in dropdownItems"
            v-slot="{ active }"
            :key="item.name"
          >
            <a
              href="#"
              :class="[
                active ? 'bg-zinc-700 text-zinc-50' : 'text-zinc-400',
                'block px-4 py-2 text-sm',
              ]"
              @click="$emit('action', item.action)"
            >
              {{ item.name }}
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
