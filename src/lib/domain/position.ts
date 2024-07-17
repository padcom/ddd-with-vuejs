import { ArrayOfObjectsWithIDs } from '../core'
import { uuid } from '../utils'

export class Position {
  public readonly id = uuid()

  constructor(
    public name: string,
  ) {}
}

export class PositionList extends ArrayOfObjectsWithIDs<Position> {
}
