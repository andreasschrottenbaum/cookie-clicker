abstract class BasePlugin {
  abstract name: string
  abstract label: string
  
  public start?(): void
  abstract run(): void
  public stop?(): void

  abstract interval: number
}

export { BasePlugin }