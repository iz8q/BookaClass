<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef, watch, inject } from 'vue'
import type { Data } from '@generated/data'
import { router } from '@inertiajs/vue3'
import type { TableColumn } from '@nuxt/ui'
import { useInfiniteScroll } from '@vueuse/core'
import AppLayout from '~/layouts/app.vue'
import { randomInRange } from '~/utils/randomNumber'
import type { PaginationMeta } from '@adonisjs/inertia/types'
import { NetworkErrorKey } from '~/utils/injectionKeys'

defineOptions({
  layout: AppLayout,
})

const props = defineProps<{
  classes: {
    data: Data.Class[]
    metadata: PaginationMeta
  }
}>()

const networkError = inject(NetworkErrorKey)

if (!networkError) {
  throw new Error('NetworkErrorKey was not provided')
}

const { hasNetworkError } = networkError

const isLoading = ref(false)

const hasMorePages = computed(() => {
  return props.classes.metadata.currentPage < props.classes.metadata.lastPage
})

const columns: TableColumn<Data.Class>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    meta: {
      class: {
        td: 'capitalize',
      },
    },
  },
  {
    accessorKey: 'instructorName',
    header: 'Instructor Name',
  },
  {
    accessorKey: 'capacity',
    header: 'Capacity',
  },
  {
    accessorKey: 'durationMinutes',
    header: 'Duration',
  },
  {
    accessorKey: 'recurrenceRule',
    header: 'Recurrence Rule',
  },
]

const loadNextPage = () => {
  if (isLoading.value || !hasMorePages.value || hasNetworkError.value) return

  const nextPage = props.classes.metadata.currentPage + 1

  router.reload({
    data: { page: nextPage },
    only: ['classes'],
    preserveUrl: true,
    onStart: () => {
      isLoading.value = true
    },
    onFinish: () => {
      isLoading.value = false
    },
  })
}

const table = useTemplateRef('table')

onMounted(() => {
  useInfiniteScroll(
    table.value?.$el,
    () => {
      loadNextPage()
    },
    {
      distance: 200,
      canLoadMore: () => !isLoading.value && hasMorePages.value,
    }
  )
})
</script>

<template>
  <UTable
    ref="table"
    :data="classes.data"
    :columns="columns"
    :loading="isLoading"
    sticky
    class="w-full h-full rounded-md border overflow-auto"
  >
    <template #body-bottom v-if="hasMorePages">
      <tr v-for="i in 4" :key="i" v-memo="classes.data">
        <td v-for="col in columns.length" :key="col" class="p-4">
          <USkeleton class="h-4" :style="{ width: `${randomInRange(40, 80)}%` }" />
        </td>
      </tr>
    </template>
  </UTable>
</template>
