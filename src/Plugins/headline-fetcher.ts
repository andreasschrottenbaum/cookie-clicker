import { BasePlugin } from "./BasePlugin";

class HeadlineFetcher extends BasePlugin {
  name = 'headline-fetcher';
  label = 'Headline Fetcher'
  interval = 1000

  constructor() {
    super()
    this.init()
  }

  start() {
    this.Debug.log('starting headlines check')
  }

  run() {
    this.Debug.log('check headlines')
  }

  stop() {
    this.Debug.log('stopping headline check')
  }
}

export default HeadlineFetcher