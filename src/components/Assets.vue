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
import { Assets } from '../lib/domain'

defineProps({
  assets: { type: Assets, required: true }
})
</script>

<style lang="postcss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
