class Debug {
  public log: (message?: any, ...optionalParams: any[]) => void;
  public warn: (message?: any, ...optionalParams: any[]) => void;
  public error: (message?: any, ...optionalParams: any[]) => void;
  public info: (message?: any, ...optionalParams: any[]) => void;
  public trace: () => void;
  public time: (label?: string) => void;
  public timeEnd: (label?: string) => void;
  public group: (label?: string) => void;
  public groupEnd: () => void;
  public clear: () => void;
  public count: (label?: string) => void;

  /**
   * Wrapper for the Console
   * 
   * Usage: `const debug = new Debug('myLabel', 'color:red; font-weight: bold;', 'prfx', 'color: green;')`
   * @param label 
   * @param style 
   * @param prefix 
   * @param bracketStyle 
  */
  constructor(
    label = '',
    style = 'color: cadetblue; font-weight: bold',
    prefix = 'CCHS',
    bracketStyle = `color: brown; font-weight: bold`
  ) {
    this.log = Function.prototype.bind.call(console.log, console, `%c[%c${prefix}: ${label}%c]`, bracketStyle, style, bracketStyle);
    this.warn = Function.prototype.bind.call(console.warn, console, `%c[%c${prefix}: ${label}%c]`, bracketStyle, style, bracketStyle);
    this.error = Function.prototype.bind.call(console.error, console, `%c[%c${prefix}: ${label}%c]`, bracketStyle, style, bracketStyle);
    this.info = Function.prototype.bind.call(console.info, console, `%c[%c${prefix}: ${label}%c]`, bracketStyle, style, bracketStyle);
    this.trace = Function.prototype.bind.call(console.trace, console, `%c[%c${prefix}: ${label}%c]`, bracketStyle, style, bracketStyle);
    this.time = Function.prototype.bind.call(console.time, console, label);
    this.timeEnd = Function.prototype.bind.call(console.timeEnd, console, label);
    this.group = Function.prototype.bind.call(console.group, console, `%c[%c${prefix}: ${label}%c]`, bracketStyle, style, bracketStyle);
    this.groupEnd = Function.prototype.bind.call(console.groupEnd, console);
    this.count = Function.prototype.bind.call(console.count, console, label);
    this.clear = Function.prototype.bind.call(console.clear, console);
  }
}

export default Debug;
