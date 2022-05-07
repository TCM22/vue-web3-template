import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          customCollections: ['s'],
          alias: {
            ho: 'heroicons-outline',
          },
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        // key as the collection name
        s: FileSystemIconLoader('./src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
