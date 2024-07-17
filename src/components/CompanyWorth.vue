<template>
  <h4>Company is worth: {{ company.worth }}</h4>
</template>

<script lang="ts" setup>
import { Company } from '../lib/domain'

defineProps({
  company: { type: Company, required: true },
})
</script>
