import { BasePlugin } from "./BasePlugin";

class PrestigePreview extends BasePlugin {
  name = 'prestige-preview'
  label = 'Prestige Preview'
  interval = 10000;

  constructor() {
    super()
    this.init()
  }

  run() {
    this.Debug.log('CHECK PRESTIGE')
  }
}

export default PrestigePreview