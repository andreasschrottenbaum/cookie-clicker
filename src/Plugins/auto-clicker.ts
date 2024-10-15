import { click } from "../Utils/ClickHelper";
import { BasePlugin } from "./BasePlugin";

class AutoClicker extends BasePlugin {
  name = 'auto-clicker';
  label = 'Auto Clicker'
  interval = 10

  run() {
    const bigCookie = document.querySelector('#bigCookie') as HTMLElement
    click(bigCookie)
  }
}

export default AutoClicker