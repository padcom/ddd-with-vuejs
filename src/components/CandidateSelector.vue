<template>
  <select v-model="editableValue">
    <option v-for="candidate in candidates" :key="candidate.id" :value="candidate.id">
      {{ candidate.firstName }} {{ candidate.lastName }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { Candidate, CandidateList } from '../lib/domain'
import { refByIdFromList } from '../composables/object-with-id'

const props = defineProps({
  candidates: { type: CandidateList, required: true },
})

const value = defineModel<Candidate>()
const editableValue = refByIdFromList(value, () => props.candidates)
</script>
