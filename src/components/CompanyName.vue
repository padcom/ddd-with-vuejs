<template>
  <div>{{ company.name }}</div>
</template>

<script lang="ts" setup>
import { Company } from '../lib/domain'

defineProps({
  company: { type: Company, required: true },
})
</script>
