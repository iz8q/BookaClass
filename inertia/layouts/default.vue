<script setup lang="ts">
import { watch } from 'vue'
import { usePage } from '@inertiajs/vue3'
import type { Data } from '@generated/data'

const page = usePage<Data.SharedProps>()

const toast = useToast()

watch(
  () => page.url,
  () => toast.clear()
)

watch(
  () => page.flash,
  (flashMessages) => {
    if (flashMessages?.error) {
      toast.add({
        title: flashMessages.error,
        color: 'error',
      })
    }
    if (flashMessages?.success) {
      toast.add({
        title: flashMessages.success,
        color: 'success',
      })
    }
  },
  { immediate: true }
)
</script>

<template>
  <UApp :toaster="{ position: 'top-center' }">
    <slot />
  </UApp>
</template>
