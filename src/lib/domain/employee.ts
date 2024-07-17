import { ArrayOfObjectsWithIDs } from '../core'
import { uuid } from '../utils'

import { type Company, type Person, type StaffMember, type Position } from '.'

export class Employee implements StaffMember {
  public readonly id: string = uuid()

  // eslint-disable-next-line max-params
  constructor(
    public readonly company: Company,
    public manager: StaffMember,
    public person: Person,
    public position: Position,
    public salary: number,
  ) {}
}

export class EmployeeList extends ArrayOfObjectsWithIDs<Employee> {
  remove(employee: StaffMember) {
    const index = this.findIndex(e => e === employee)
    if (index > -1) {
      this.splice(index, 1)
    }

    return employee.person
  }

  summary() {
    // eslint-disable-next-line no-mixed-operators
    return this.reduce((acc, employee) => acc + employee.salary * 2, 0)
  }
}
