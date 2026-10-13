<script setup lang="ts">
import Header from '~/components/Header.vue'
import Layout from './default.vue'
import { router } from '@inertiajs/vue3'
import { provide, ref, watch, onBeforeUnmount } from 'vue'
import { NetworkErrorKey } from '~/utils/injectionKeys.js'

const hasNetworkError = ref(false)

provide(NetworkErrorKey, { hasNetworkError })

const catchNetworkError = router.on('networkError', (event) => {
  event.preventDefault()
  hasNetworkError.value = true
})

watch(hasNetworkError, (hasError, _, onCleanup) => {
  if (!hasError) return

  const timeout = setTimeout(() => {
    hasNetworkError.value = false
  }, 10_000)

  onCleanup(() => clearTimeout(timeout))
})

onBeforeUnmount(catchNetworkError)
</script>

<template>
  <Layout>
    <main class="relative flex flex-col items-center w-full h-dvh px-2 pb-2">
      <Header />
      <div class="flex flex-col w-full flex-1 justify-center items-center">
        <div class="relative w-full flex-1">
          <UCard
            variant="outline"
            class="absolute top-0 left-0 w-full h-full"
            :ui="{ body: 'flex flex-col w-full h-full' }"
          >
            <slot />
          </UCard>
        </div>
      </div>
    </main>
  </Layout>
</template>
