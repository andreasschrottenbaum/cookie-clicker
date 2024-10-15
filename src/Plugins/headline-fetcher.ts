import { BasePlugin } from "./BasePlugin";

class HeadlineFetcher extends BasePlugin {
  name = 'headline-fetcher';
  label = 'Headline Fetcher'
  interval = 1000

  start() {
    console.log('booting up headline check')
  }

  run() {
    console.log('check headlines')
  }

  stop() {
    console.log('stopping headline check')
  }
}

export default HeadlineFetcher