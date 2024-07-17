<template>
  <div class="container">
      <div class="field">
      <label for="company-name">Company name</label>
      <CompanyName id="company-name" :company />
    </div>
    <div class="field">
      <label for="ceo">CEO</label>
      <Person id="ceo" :person="company.ceo.person" />
    </div>
    <div class="field">
      <label for="employees">Employees</label>
      <Employees id="employees" :company />
    </div>
    <div class="field">
      <label for="assets">Assets</label>
      <Assets id="assets" :assets="company.assets" />
    </div>
    <CompanyWorth :company />
  </div>
</template>

<script lang="ts" setup>
import { Company } from '../lib/domain'

import CompanyName from './CompanyName.vue'
import Person from './Person.vue'
import Employees from './Employees.vue'
import Assets from './Assets.vue'
import CompanyWorth from './CompanyWorth.vue'

defineProps({
  company: { type: Company, required: true },
})
</script>

<style lang="postcss" scoped>
.field {
  display: grid;
  grid-template-columns: 200px 400px;
}
</style>
