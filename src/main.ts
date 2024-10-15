import Menu from './menu'

import './style.css'

// Placement of the Output
new Menu()

// Inject CSS
const cssRequest = await fetch(`${import.meta.env.VITE_DIST_LOCATION}/index.css`)
const css = await cssRequest.text()

const styleEl = document.createElement('style')
styleEl.innerText = css

document.body.append(styleEl)
