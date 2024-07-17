<template>
  <select v-model="editableValue">
    <option v-for="employee in employees" :key="employee." :value="employee.id">
      {{ employee }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { Employee, EmployeeList } from '../lib/domain'
import { refByIdFromList } from '../composables/object-with-id'

const props = defineProps({
  employees: { type: EmployeeList, required: true },
})

const value = defineModel<Employee>()
const editableValue = refByIdFromList(value, () => props.employees)
</script>
