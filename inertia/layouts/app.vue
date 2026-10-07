<script setup lang="ts">
import Header from '~/components/Header.vue'
import Layout from './default.vue'
</script>

<template>
  <Layout>
    <main class="relative flex flex-col items-center w-full h-dvh px-2 pb-2">
      <Header />
      <div class="flex flex-col w-full flex-1 justify-center items-center">
        <div class="relative w-full flex-1">
          <UCard variant="outline" class="absolute top-0 left-0 w-full h-full scroll-container">
            <div class="flex flex-col">
              <slot />
            </div>
          </UCard>
        </div>
      </div>
    </main>
  </Layout>
</template>
