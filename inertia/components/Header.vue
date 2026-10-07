<script setup lang="ts">
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import type { Data } from '@generated/data'
import type { InferRoutes, UserRegistry } from '@tuyau/core/types'
import { Link } from '@adonisjs/inertia/vue'

export type RouteName = keyof InferRoutes<UserRegistry>
export type UserRole = 'guest' | 'member' | 'admin'

export interface HeaderLink {
  route: RouteName
  label: string
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
  params?: Record<string, string | number>
}

const page = usePage<Data.SharedProps>()

const user = computed(() => page.props.user)

const headerLinks: Record<UserRole, HeaderLink[]> = {
  guest: [
    { route: 'home', label: 'Home' },
    { route: 'home', label: 'Schedule' },
    { route: 'home', label: 'Pricing' },
  ],
  member: [
    { route: 'home', label: 'Home' },
    { route: 'home', label: 'Schedule' },
    { route: 'home', label: 'Dashboard' },
    { route: 'home', label: 'Bookings' },
    { route: 'home', label: 'Billing' },
  ],
  admin: [
    { route: 'home', label: 'Studio overview' },
    { route: 'home', label: 'Schedule' },
    { route: 'home', label: 'Classes' },
    { route: 'home', label: 'Members' },
  ],
}
</script>

<template>
  <div class="sticky top-0 w-full max-w-4xl h-12 flex items-center justify-between rounded-lg">
    <Link route="home" class="text-2xl font-medium text-primary">BookaClass</Link>
    <div class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-row">
      <Link
        v-for="link in headerLinks[user?.role ?? 'guest']"
        :key="link.label"
        :route="link.route"
        :method="link.method"
        :params="link.params"
      >
        <UButton as="span" variant="link">
          {{ link.label }}
        </UButton>
      </Link>
    </div>
    <div class="flex flex-row gap-2 items-center">
      <template v-if="!user">
        <Link route="session.create">
          <UButton as="span" variant="ghost">Login</UButton>
        </Link>
        <Link route="new_account.create">
          <UButton as="span">Signup</UButton>
        </Link>
      </template>
      <template v-else>
        <p class="text-sm">
          {{ user?.initials }}
        </p>
        <Link route="session.destroy" method="post">
          <UButton as="span" variant="ghost" color="error">Logout</UButton>
        </Link>
      </template>
    </div>
  </div>
</template>
