# Cookie Clicker Suite

A Collection of tools to improve the experience on https://orteil.dashnet.org/cookieclicker/ to import with tampermonkey

## Usage

Create your own Tampermonkey Script to import the Suite:

```
// ==UserScript==
// @name         Cookie Clicker Suite
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toolbox for Cookie Clicker
// @author       Your Name
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        GM_xmlhttpRequest
// @require      http://localhost:5500/dist/index.js
// ==/UserScript==
```

You may need to adjust the location of the `@require` import to your local environment.