<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import Layout from './default.vue'
</script>

<template>
  <Layout>
    <main class="w-full min-h-dvh flex flex-col gap-6 justify-center items-center p-4">
      <Link route="home" class="text-3xl text-primary">BookaClass</Link>
      <slot />
    </main>
  </Layout>
</template>
