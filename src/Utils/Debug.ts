class Debug {
  public log: any

  constructor(label: string = '') {
    const formattedLabel = `[CCHS: ${label}]`
    this.log = Function.prototype.bind.call(console.log, console, formattedLabel)
  }
}

export default Debug