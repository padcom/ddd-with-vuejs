export interface Id {
  readonly id: string
}

export class ArrayOfObjectsWithIDs <T extends Id> extends Array<T> {
  constructor(items: T[] = []) {
    super()

    if (Array.isArray(items)) this.push(...items)
  }

  findById(id: string) {
    return this.find(e => e.id === id)
  }
}
