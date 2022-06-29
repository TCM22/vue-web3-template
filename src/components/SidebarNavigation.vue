<script setup lang="ts">
const navigation = [{ name: 'home', path: '/' }]
</script>

<template>
  <nav class="mt-5 flex-1" aria-label="Sidebar">
    <div class="space-y-1 px-2">
      <BaseLink v-for="item in navigation" :key="item.name" :to="item">
        <template #default="{ isExactActive }">
          <SidebarNavigationLink :isActive="isExactActive">
            <i-ho-home v-if="item.name === 'home'" class="mr-3 h-6 w-6" />
            {{ item.name }}
          </SidebarNavigationLink>
        </template>
      </BaseLink>
    </div>
  </nav>
</template>
