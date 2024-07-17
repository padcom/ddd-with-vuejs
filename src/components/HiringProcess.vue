<template>
  <div class="container">
    <div class="field">
      <label for="position">Position</label>
      <PositionSelector id="position" v-model="position" :positions="positions" />
    </div>
    <div class="field">
      <label for="candidate">Candidate</label>
      <CandidateSelector id="candidate" v-model="candidate" :candidates="candidates" />
    </div>
    <div class="field">
      <label for="salary">Salary</label>
      <input type="number" v-model.number="salary">
    </div>
    <div v-if="candidate && position">
      <button @click="company.hire(company.ceo, candidate!, position!, salary)">
        Hire
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Company, type Candidate, CandidateList, type Position, PositionList } from '../lib/domain'

import PositionSelector from './PositionSelector.vue'
import CandidateSelector from './CandidateSelector.vue'

defineProps({
  company: { type: Company, required: true },
  positions: { type: PositionList, default: () => [] },
  candidates: { type: CandidateList, default: () => [] }
})

const candidate = ref<Candidate>()
const position = ref<Position>()
const salary = ref<number>(1000)
</script>

<style lang="postcss" scoped>
.field {
  display: grid;
  grid-template-columns: 200px 400px;
}
</style>
