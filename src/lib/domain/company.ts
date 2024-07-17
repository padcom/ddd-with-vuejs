import { ArrayOfObjectsWithIDs, type Id } from '../core'
import { uuid } from '../utils'

import {
  type Person,
  type Candidate,
  type StaffMember,
  Employee,
  EmployeeList,
  type Position,
  Assets,
  CEO,
} from '.'

export interface CreateCompanyOptions {
  assets?: Assets
  employees?: EmployeeList
}

export class Company implements Id {
  public readonly id = uuid()
  public name: string
  public ceo: CEO
  public readonly employees = new EmployeeList()
  public readonly assets = new Assets()

  constructor(name: string, owner: Person, {
    assets,
    employees,
  }: CreateCompanyOptions = {}) {
    this.name = name
    this.ceo = new CEO(this, owner)

    if (assets) this.assets = assets
    if (employees) this.employees = employees
  }

  hire(manager: StaffMember, candidate: Candidate, position: Position, salary: number): Employee {
    const result = new Employee(this, manager, candidate, position, salary)
    this.employees.push(result)

    return result
  }

  fire(employee: Employee) {
    return this.employees.remove(employee)
  }

  get worth() {
    return this.assets.summary() + this.employees.summary()
  }
}

export class CompanyList extends ArrayOfObjectsWithIDs<Company> {
}
