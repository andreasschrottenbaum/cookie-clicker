import Debug from "../Utils/Debug"

abstract class BasePlugin {
  public name: string = 'Unknown Plugin'
  abstract label: string
  abstract interval: number
 
  public start?(): void
  abstract run(): void
  public stop?(): void

  protected Debug!: Debug

  constructor() {
    this.init()
  }

  init() {
    this.Debug = new Debug(this.name)
  }
}

export { BasePlugin }