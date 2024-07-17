<template>
  <select v-model="editableValue">
    <option v-for="vacancy in positions" :key="vacancy.id" :value="vacancy.id">
      {{ vacancy.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { Position, PositionList } from '../lib/domain'
import { refByIdFromList } from '../composables/object-with-id'

const props = defineProps({
  positions: { type: PositionList, required: true },
})

const value = defineModel<Position>()

const editableValue = refByIdFromList(value, () => props.positions)
</script>
