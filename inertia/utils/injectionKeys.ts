import type { InjectionKey, Ref } from 'vue'

export const NetworkErrorKey: InjectionKey<{
  hasNetworkError: Ref<boolean>
}> = Symbol('NetworkError')
