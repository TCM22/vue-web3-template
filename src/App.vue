<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useWeb3 } from "@/composables/useWeb3";
const { auth, login } = useWeb3();

const sidebarOpen = ref(false);

// Initialize wallet
onMounted(async () => {
  auth.getConnector().then((connector: any) => {
    if (connector) login(connector);
  });
});
</script>

<template>
  <div class="mx-auto flex h-full max-w-7xl text-zinc-50">
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex w-64 flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <TheSidebar />
      </div>
    </div>
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div class="lg:hidden">
        <TheNavbar @open="sidebarOpen = true" />
      </div>
      <div class="relative z-0 flex flex-1 overflow-hidden">
        <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <!-- Start main area-->
          <div class="absolute inset-0">
            <ContainerMain class="w-full border-b py-3">
              <h1 class="text-lg font-medium">
                {{ $route.meta.title }}
              </h1>
            </ContainerMain>
            <div class="py-6">
              <router-view />
            </div>
          </div>
          <!-- End main area -->
        </main>
        <aside
          class="relative hidden w-96 flex-shrink-0 overflow-y-auto border-l xl:flex xl:flex-col"
        >
          <!-- Start secondary column (hidden on smaller screens) -->
          <TheSecondaryColumn />
        </aside>
      </div>
    </div>
    <TheSidebarResponsive
      :sidebar-open="sidebarOpen"
      @close="sidebarOpen = false"
    />
    <ModalConnect />
  </div>
</template>
