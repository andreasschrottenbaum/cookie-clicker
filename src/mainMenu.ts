import { allPlugins } from './Plugins'
import { BasePlugin } from './Plugins/BasePlugin'

const CCS_NAMESPACE = 'cookie-clicker-suite-plugins'

class MainMenu {
  private intervals: Map<string, number> = new Map()
  private rootEl: HTMLElement

  constructor() {
    this.rootEl = document.querySelector('#sectionRight') as HTMLElement
    
    this.createMenuElement()
    this.fillMenu()
  }

  /**
   * Creates the Main Menu Elements
   */
  private createMenuElement() {
    const storeEl = document.querySelector('#store')

    const modMenuEl = document.createElement('div')
    modMenuEl.classList.add('cookie-clicker-suite')

    this.rootEl.insertBefore(modMenuEl, storeEl)

    const headline = document.createElement('h3')
    headline.innerText = 'Cookie Clicker Suite'
    headline.classList.add('title', 'zoneTitle')
    modMenuEl.append(headline)

    const pluginListEl = document.createElement('div')
    pluginListEl.classList.add('ccs-plugins')
    modMenuEl.append(pluginListEl)
  }

  /**
   * Fills the Menu with the individual entries(plugins)
   */
  private fillMenu() {
    const currentEntries = JSON.parse(localStorage.getItem(CCS_NAMESPACE) || '[]')
    const modMenuEl = this.rootEl.querySelector('.cookie-clicker-suite .ccs-plugins') as HTMLElement

    allPlugins.forEach(plugin => {
      const pluginLabel = document.createElement('label')
      modMenuEl.append(pluginLabel)

      const pluginCheckbox = document.createElement('input')
      pluginCheckbox.type = 'checkbox'
      pluginLabel.append(pluginCheckbox)

      if (currentEntries.includes(plugin.name)) {
        pluginCheckbox.checked = true
        this.activatePlugin(plugin)
      }

      pluginCheckbox.addEventListener('change', () => {
        if (pluginCheckbox.checked) {
          this.activatePlugin(plugin)
        } else {
          this.deactivatePlugin(plugin)
        }
      })

      const pluginNameEl = document.createElement('span')
      pluginNameEl.innerText = plugin.label
      pluginLabel.append(pluginNameEl)
    })
  }

  /**
   * Activates a Plugin
   * @param plugin 
   */
  private activatePlugin(plugin: BasePlugin) {
    if (plugin.start) {
      plugin.start()
    }

    plugin.run() // Don't wait for the first interval, but run immediately

    // Set Interval
    const pluginInterval = setInterval(() => {
      plugin.run()
    }, plugin.interval)
    this.intervals.set(plugin.name, pluginInterval)

    // Update LocalStorage
    const currentEntries = JSON.parse(localStorage.getItem(CCS_NAMESPACE) || '[]')
    if (!currentEntries.includes(plugin.name)) {
      currentEntries.push(plugin.name)
    }
    localStorage.setItem(CCS_NAMESPACE, JSON.stringify(currentEntries))
  }

  /**
   * Deactivates a Plugin
   * @param plugin 
   */
  private deactivatePlugin(plugin: BasePlugin) {
    if (plugin.stop) {
      plugin.stop()
    }

    // Reset Interval
    const interval = this.intervals.get(plugin.name)
    clearInterval(interval)
    this.intervals.delete(plugin.name)

    // Update LocalStorage
    let currentEntries = JSON.parse(localStorage.getItem(CCS_NAMESPACE) || '[]')
    currentEntries = currentEntries.filter((entry: string) => entry != plugin.name)
    localStorage.setItem(CCS_NAMESPACE, JSON.stringify(currentEntries))
  }

}

export default MainMenu