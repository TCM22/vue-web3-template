<script setup lang="ts">
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <BaseButton
    :class="[
      isActive ? 'bg-zinc-700 text-zinc-50' : 'hover:bg-zinc-700',
      'flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
    ]"
  >
    <slot />
  </BaseButton>
</template>
