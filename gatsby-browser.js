/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const fs = require("fs")
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
    import cssFile;
  } else {
    import beautified[i];
  }
})
// You can delete this file if you're not using it
import "./src/assets/css/custom.css"
import "./src/assets/css/responsive.css"
import "./src/assets/css/font-awesome.min.css"
import "./src/fonts//fonts.css"
