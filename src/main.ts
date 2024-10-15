import MainMenu from './mainMenu'

import './style.css'

// Create the Main Menu
new MainMenu()

// Get CSS
const cssRequest = await fetch(`${import.meta.env.VITE_DIST_LOCATION}/index.css`)
const cssContent = await cssRequest.text()

// Inject CSS
const styleEl = document.createElement('style')
styleEl.innerText = cssContent
document.body.append(styleEl)
