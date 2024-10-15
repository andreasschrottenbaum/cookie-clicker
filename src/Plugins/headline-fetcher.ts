import { BasePlugin } from "./BasePlugin";

class HeadlineFetcher extends BasePlugin {
  name = 'headline-fetcher';
  label = 'Headline Fetcher'
  interval = 1000

  run() {
    const headline = document.querySelector('#commentsText1 span.fortune') as HTMLElement
    headline?.click()
  }
}

export default HeadlineFetcher