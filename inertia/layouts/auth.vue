<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import Layout from './default.vue'
</script>

<template>
  <Layout>
    <main class="w-full min-h-dvh flex flex-col justify-center items-center p-4">
      <div class="w-full max-w-sm flex flex-col gap-4">
        <Link route="home" class="text-2xl">BookaClass</Link>
        <slot />
      </div>
    </main>
  </Layout>
</template>
