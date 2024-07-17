import { type Person, type StaffMember, type Company, Position } from '.'

export class CEO implements StaffMember {
  public readonly id = '1'
  public position: Position = new Position('CEO')
  public salary = 100000

  constructor(
    public readonly company: Company,
    public person: Person,
  ) {
  }
}
