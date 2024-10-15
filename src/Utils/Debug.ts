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

  constructor(label: string = '', style='color: purple; font-weight: bold', prefix='CCHS') {

    this.log = Function.prototype.bind.call(console.log, console, `[%c${prefix}: ${label}%c]`, style, '');
    this.warn = Function.prototype.bind.call(console.warn, console, `[%c${prefix}: ${label}%c]`, style, '');
    this.error = Function.prototype.bind.call(console.error, console, `[%c${prefix}: ${label}%c]`, style, '');
    this.info = Function.prototype.bind.call(console.info, console, `[%c${prefix}: ${label}%c]`, style, '');
    this.assert = Function.prototype.bind.call(console.assert, console, `[%c${prefix}: ${label}%c]`, style, '');
    this.trace = Function.prototype.bind.call(console.trace, console, `[%c${prefix}: ${label}%c]`, style, '');
    this.group = Function.prototype.bind.call(console.group, console, `[%c${prefix}: ${label}%c]`, style, '');
    this.groupEnd = Function.prototype.bind.call(console.groupEnd, console);
    this.count = Function.prototype.bind.call(console.count, console, label);
    this.clear = Function.prototype.bind.call(console.clear, console);
  }
}

export default Debug;
