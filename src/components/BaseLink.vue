<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string | { name: string; path?: string; params?: unknown }
}>()

const isExternal = computed(
  () =>
    typeof props.to === 'string' &&
    (props.to.startsWith('https') || props.to.startsWith('http'))
)

const secureLink = computed(() => {
  const link = props.to as string
  if (isExternal.value && link.startsWith('http://')) {
    return link.replace('http://', 'https://')
  }
  return link
})

defineExpose({ isExternal })
</script>

<template>
  <a
    v-if="isExternal"
    :href="secureLink"
    target="_blank"
    rel="noopener"
    data-testid="base-external-link"
  >
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
    v-slot="{ isExactActive }"
    class="block rounded-md focus:outline-none focus:ring-indigo-300/50 focus-visible:ring-2"
    data-testid="base-router-link"
  >
    <slot :isExactActive="isExactActive" />
  </router-link>
</template>
