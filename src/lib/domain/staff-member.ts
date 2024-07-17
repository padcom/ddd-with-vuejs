import { type Company, type Person, type Position } from '.'

export interface StaffMember {
  readonly id: string
  readonly company: Company
  readonly person: Person
  position: Position
  salary: number
}
