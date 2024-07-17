<template>
  <div class="container">
    <h2>Hiring process</h2>
    <HiringProcess :company :positions :candidates />

    <h2>Company information</h2>
    <CompanyInformation :company />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import {
  Company,
  Person,
  Candidate,
  CandidateList,
  Position,
  PositionList,
  Asset,
  Assets
} from './lib/domain'

import HiringProcess from './components/HiringProcess.vue'
import CompanyInformation from './components/CompanyInformation.vue'

const company = ref(new Company('Damage inc.', new Person('Jane', 'Smith', 42), {
  assets: new Assets([
    ['ceo-laptop', new Asset('mac-book-air', 3000)],
    ['printer01', new Asset('printer', 1000)],
  ]),
}))

const positions = ref(new PositionList([
  new Position('Software developer'),
  new Position('Game designer'),
]))

const candidates = ref(new CandidateList([
  new Candidate('John', 'Doe', 24),
  new Candidate('John', 'Malkovich', 69),
]))
</script>

<style lang="postcss" scoped>
.container {
  display: grid;
  gap: 0.5rem;
}
</style>
