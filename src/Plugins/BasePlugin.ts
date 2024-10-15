abstract class BasePlugin {
  abstract name: string
  abstract label: string
  abstract interval: number
 
  public start?(): void
  abstract run(): void
  public stop?(): void
}

export { BasePlugin }