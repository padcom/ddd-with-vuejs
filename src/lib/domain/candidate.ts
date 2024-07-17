import { ArrayOfObjectsWithIDs, type Id } from '../core'
import { uuid } from '../utils/uuid'

import { Person } from '.'

export class Candidate extends Person implements Id {
  public readonly id = uuid()
}

export class CandidateList extends ArrayOfObjectsWithIDs<Candidate> {
}
