<template>
  <ul class="employee-list">
    <li v-for="employee in company.employees" :key="employee.toString()">
      {{ employee.person.firstName }} {{ employee.person.lastName }} / {{ employee.position.name }}
      <button @click="company.fire(employee)">X</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Company } from '../lib/domain'

defineProps({
  company: { type: Company, required: true },
})
</script>

<style lang="postcss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
