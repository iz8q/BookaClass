<script setup lang="ts">
import { computed } from 'vue'
import { useForm } from '@inertiajs/vue3'
import { urlFor } from '~/client'
import AuthLayout from '~/layouts/auth.vue'

defineOptions({
  layout: AuthLayout,
})

const form = useForm({
  email: '',
  password: '',
})

const fields = computed(() => [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    error: form.errors.email,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
    error: form.errors.password,
  },
])

function onSubmit(payload: { data: { email: string; password: string } }) {
  form.email = payload.data.email
  form.password = payload.data.password
  form.post(urlFor('session.store'))
}
</script>

<template>
  <UCard variant="outline" class="w-full max-w-sm">
    <UAuthForm
      title="Login"
      description="Login to access your account."
      icon="i-lucide-user"
      :fields="fields"
      :loading="form.processing"
      :submit="{ label: 'Login' }"
      @submit="onSubmit"
    />
  </UCard>
</template>
