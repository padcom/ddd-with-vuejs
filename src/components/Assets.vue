<template>
  <div>
    <div>{{ assets.ids }}</div>
    <ul class="assets">
      <li v-for="[id, asset] in assets.entries()" :key="id">
        {{ id }} - {{ asset.name }} / {{ asset.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, toValue, type MaybeRefOrGetter } from 'vue'
import { Assets } from '../lib/domain'

const props = defineProps({
  assets: { type: Assets, required: true }
})

// function useTest(assets: MaybeRefOrGetter<Assets>) {
//   const ids = computed(() => [...toValue(assets).keys()])

//   return { ids }
// }

// const { ids } = useTest(() => props.assets)
</script>

<style lang="postcss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
