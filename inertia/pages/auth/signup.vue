<script setup lang="ts">
import { computed } from 'vue'
import { useForm } from '@inertiajs/vue3'
import { urlFor } from '~/client'
import AuthLayout from '~/layouts/auth.vue'

defineOptions({
  layout: AuthLayout,
})

const form = useForm({
  fullName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
})

const fields = computed(() => [
  {
    name: 'fullName',
    type: 'text',
    label: 'Full name',
    placeholder: 'Enter your full name',
    error: form.errors.fullName,
  },
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
  {
    name: 'passwordConfirmation',
    type: 'password' as const,
    label: 'Confirm password',
    placeholder: 'Confirm your password',
    required: true,
    error: form.errors.passwordConfirmation,
  },
])

function onSubmit(payload: {
  data: {
    fullName?: string
    email: string
    password: string
    passwordConfirmation: string
  }
}) {
  form.fullName = payload.data.fullName || ''
  form.email = payload.data.email
  form.password = payload.data.password
  form.passwordConfirmation = payload.data.passwordConfirmation
  form.post(urlFor('new_account.store'))
}
</script>

<template>
  <UCard variant="outline" class="w-full max-w-sm">
    <UAuthForm
      title="Signup"
      description="Create your account."
      icon="i-lucide-user-plus"
      :fields="fields"
      :loading="form.processing"
      :submit="{ label: 'Sign up' }"
      @submit="onSubmit"
    />
  </UCard>
</template>
