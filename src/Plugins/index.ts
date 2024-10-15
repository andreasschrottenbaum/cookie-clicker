import { BasePlugin } from "./BasePlugin";
import HeadlineFetcher from "./headline-fetcher";

export const allPlugins: BasePlugin[] = [
  new HeadlineFetcher()
]