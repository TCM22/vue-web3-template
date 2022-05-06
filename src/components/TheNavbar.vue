<script setup lang="ts">
defineEmits(["open"]);
</script>

<template>
  <div
    class="flex items-center justify-between border-b bg-zinc-700 px-4 py-1.5"
  >
    <div>
      <i-s-logo class="text-3xl text-indigo-400" />
    </div>
    <div>
      <button
        type="button"
        class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
        @click="$emit('open')"
      >
        <span class="sr-only">Open sidebar</span>
        <i-ho-menu class="h-6 w-6 text-zinc-50" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
