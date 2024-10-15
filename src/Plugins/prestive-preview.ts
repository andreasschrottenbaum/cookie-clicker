import { BasePlugin } from "./BasePlugin";

class PrestigePreview extends BasePlugin {
  name = 'prestige-preview'
  label = 'Prestige Preview'
  interval = 10000;

  run() {
    console.log('CHECK PRESTIGE')
  }
}

export default PrestigePreview