import { BasePlugin } from "./BasePlugin";
import HeadlineFetcher from "./headline-fetcher";
import PrestigePreview from "./prestive-preview";

export const allPlugins: BasePlugin[] = [
  new HeadlineFetcher(),
  new PrestigePreview()
]