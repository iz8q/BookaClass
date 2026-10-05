<script setup lang="ts">
import { watch } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { toast, Toaster } from 'vue-sonner'
import type { Data } from '@generated/data'
import { Link } from '@adonisjs/inertia/vue'

const page = usePage<Data.SharedProps>()

watch(
  () => page.url,
  () => toast.dismiss()
)

watch(
  () => page.flash,
  (flashMessages) => {
    if (flashMessages?.error) {
      toast.error(flashMessages.error)
    }
    if (flashMessages?.success) {
      toast.success(flashMessages.success)
    }
  },
  { immediate: true }
)
</script>

<template>
  <main class="w-full min-h-dvh flex flex-col justify-center items-center p-4">
    <div class="w-full max-w-sm flex flex-col gap-4">
      <Link route="home" class="text-2xl">BookaClass</Link>
      <slot />
    </div>

    <Toaster position="top-center" rich-colors />
  </main>
</template>
