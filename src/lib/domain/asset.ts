export class Asset {
  constructor(
    public name: string,
    public value: number,
  ) {}
}

export class Assets extends Map<string, Asset> {
  get ids() {
    return [...this.keys()].map(id => `ID=${id}`)
  }

  public summary() {
    return [...this.values()].reduce((acc, asset) => acc + asset.value, 0)
  }
}
