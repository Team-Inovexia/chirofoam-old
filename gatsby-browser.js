/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const fs = require("fs") // Or `import fs from "fs";` with ESM
const minified = [
  "./src/assets/css/custom.min.css",
  "./src/assets/css/responsive.min.css",
  "./src/assets/css/font-awesome.min.css",
  "./src/fonts//fonts.min.css"
]
const beautified = [
  "./src/assets/css/custom.css",
  "./src/assets/css/responsive.css",
  "./src/assets/css/font-awesome.css",
  "./src/fonts//fonts.css"
]
minified.forEach((cssFile, i) => {
  if (fs.existsSync(cssFile)) {
    import minified[i]
  } else {
    import beautified[i]
  }
})
