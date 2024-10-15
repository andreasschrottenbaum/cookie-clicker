import AutoClicker from "./auto-clicker";
import type { BasePlugin } from "./BasePlugin";

import HeadlineFetcher from "./headline-fetcher";
import PrestigePreview from "./prestive-preview";

export const allPlugins: BasePlugin[] = [
  new AutoClicker(),
  new HeadlineFetcher(),
  new PrestigePreview()
]