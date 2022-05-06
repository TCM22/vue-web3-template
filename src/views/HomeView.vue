<script setup lang="ts">
import { useWeb3 } from "@/composables/useWeb3";

const { web3Account, web3 } = useWeb3();
</script>

<template>
  <ContainerMain>
    <HomeConnect v-if="!web3Account && !web3.authLoading" />
  </ContainerMain>
</template>
