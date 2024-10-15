class Debug {
  public log: any;
  public warn: any;
  public error: any;
  public info: any;
  public assert: any;
  public trace: any;
  public time: any;
  public timeEnd: any;
  public group: any;
  public groupEnd: any;
  public clear: any;
  public count: any;

  constructor(label: string = '') {
    const PREFIX = 'CCHS'

    this.log = Function.prototype.bind.call(console.log, console, `[${PREFIX}: %c${label}%c]`, 'color: rebeccapurple; font-weight: bold', '');
    this.warn = Function.prototype.bind.call(console.warn, console, `[${PREFIX}: %c${label}%c]`, 'color: orange; font-weight: bold', '');
    this.error = Function.prototype.bind.call(console.error, console, `[${PREFIX}: %c${label}%c]`, 'color: red; font-weight: bold', '');
    this.info = Function.prototype.bind.call(console.info, console, `[${PREFIX}: %c${label}%c]`, 'color: blue; font-weight: bold', '');
    this.assert = Function.prototype.bind.call(console.assert, console, `[${PREFIX}: %c${label}%c]`, 'color: orange; font-weight: bold', '');
    this.trace = Function.prototype.bind.call(console.trace, console, `[${PREFIX}: %c${label}%c]`, 'color: green; font-weight: bold', '');
    this.group = Function.prototype.bind.call(console.group, console, `[${PREFIX}: %c${label}%c]`, 'color: purple; font-weight: bold', '');
    this.groupEnd = Function.prototype.bind.call(console.groupEnd, console);
    this.count = Function.prototype.bind.call(console.count, console, label);
    this.clear = Function.prototype.bind.call(console.clear, console);
  }
}

export default Debug;
