<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <router-link v-slot="{ isExactActive }" :to="to" class="outline-none">
    <BaseButton
      :class="[
        isExactActive
          ? 'bg-zinc-700 text-zinc-50'
          : 'text-zinc-200 hover:bg-zinc-700',
        'flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
      ]"
    >
      <slot />
    </BaseButton>
  </router-link>
</template>
