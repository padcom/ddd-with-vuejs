import { computed, toValue, type MaybeRefOrGetter, type Ref } from 'vue'
import type { ArrayOfObjectsWithIDs, Id } from '../lib/core'

export function refByIdFromList<T extends Id>(
  target: Ref<T | undefined>,
  objects: MaybeRefOrGetter<ArrayOfObjectsWithIDs<T>>,
) {
  return computed({
    get() {
      return target.value?.id
    },
    set(newValue) {
      if (newValue) {
        target.value = toValue(objects).findById(newValue)
      } else {
        target.value = undefined
      }
    },
  })
}
