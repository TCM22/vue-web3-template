<script setup lang="ts">
defineProps<{
  primary?: boolean
}>()
</script>

<template>
  <BaseButton
    class="border px-10 py-2 text-zinc-50 ring-indigo-400/50 hover:border-zinc-200 hover:ring-2"
    :class="{ 'border-0 bg-indigo-400 text-black': primary }"
  >
    <slot />
  </BaseButton>
</template>
