<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string | { name: string; path?: string; params?: unknown }
}>()

const isExternal = computed(
  () => typeof props.to === 'string' && props.to.startsWith('https')
)

defineExpose({ isExternal })
</script>

<template>
  <a v-if="isExternal" :href="(to as string)" target="_blank" rel="noopener">
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
    v-slot="{ isExactActive }"
    class="focus:outline-none focus:ring-indigo-300/50 focus-visible:ring-2 block rounded-md"
  >
    <slot :isExactActive="isExactActive" />
  </router-link>
</template>
