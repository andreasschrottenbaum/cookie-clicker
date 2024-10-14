import Menu from './menu'

import './style.css'

// Placement of the Output
const sectionRight = document.querySelector('#sectionRight')
const storeEl = document.querySelector('#store')

const modMenuWrapperEl = document.createElement('div')
modMenuWrapperEl.classList.add('cookie-clicker-helper')

sectionRight?.insertBefore(modMenuWrapperEl, storeEl)

const headline = document.createElement('h3')
headline.innerText = 'Helper Tools'
headline.classList.add('title')
modMenuWrapperEl.append(headline)

new Menu()

const cssRequest = await fetch(`${import.meta.env.VITE_DIST_LOCATION}/index.css`)
const css = await cssRequest.text()

const styleEl = document.createElement('style')
styleEl.innerText = css

document.body.append(styleEl)
