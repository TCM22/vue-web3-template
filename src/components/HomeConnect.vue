<script setup lang="ts">
import { useModalConnect } from "@/composables/useModalConnect";

const { isOpen } = useModalConnect();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center rounded-md border py-10"
  >
    <div class="relative rounded-full bg-zinc-700 p-5">
      <i-s-wallet-solid class="flex h-10 w-10 text-white" />
      <div
        class="absolute top-0 -right-1 rounded-full bg-indigo-400 p-1 text-black"
      >
        <i-ho-x />
      </div>
    </div>
    <div class="py-4 text-center">
      <h3 class="text-xl">No wallet connected</h3>
      <p>Get started by connecting your wallet.</p>
    </div>

    <ButtonLarge class="mt-2" primary @click="isOpen = true">
      Connect wallet
    </ButtonLarge>
  </div>
</template>
