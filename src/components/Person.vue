<template>
  <div>{{ person.firstName }} {{ person.lastName }}</div>
</template>

<script lang="ts" setup>
import { Person } from '../lib/domain'

defineProps({
  person: { type: Person, required: true },
})
</script>
