import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    vue(),
    adonisjs({ entryPoints: ['inertia/app.ts'], reload: ['resources/views/**/*.edge'] }),
    ui({
      router: 'inertia',
      components: {
        dirs: ['inertia/components'],
      },
      ui: {
        colors: {
          primary: 'neutral',
          neutral: 'neutral',
        },
      },
    }),
  ],

  resolve: {
    alias: {
      '~/': `${import.meta.dirname}/inertia/`,
      '@generated': `${import.meta.dirname}/.adonisjs/client/`,
    },
  },

  server: {
    watch: {
      ignored: ['**/storage/**', '**/tmp/**'],
    },
  },
})
