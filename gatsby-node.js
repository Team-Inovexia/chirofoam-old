const path = require(`path`)
const http = require("https")
const bodyParser = require('body-parser')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allShopifyArticle {
        edges {
          node {
            id
            url
            blog {
              url
            }
          }
        }
        totalCount
      }
    }
  `).then(result => {
    const paginate = [...Array(Math.ceil(result.data.allShopifyArticle.totalCount/10))]
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
    result.data.allShopifyArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.blog.url.split("/").pop()}/${node.url.split("/").pop()}/`,
        component: path.resolve(`./src/templates/ArticlePage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          id: node.id,
        },
      })
    })
    paginate.forEach((page, i) => {
      createPage({
        path: `/blogs/${i+1}/`,
        component: path.resolve(`./src/templates/BlogPage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          skip: (10*i)
        },
      })
    })
  })
}
exports.onCreateDevServer = ({ app }) => {
  const hostname = "chirofoam-dev.myshopify.com"
  const Access_Token = "44ad603380756bf8c733a15e818b9837"
  const Content_Type = "application/json"
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.get('/api-call', (req, res) => {
    const apiURL = req.query.api
    delete req.query.api
    const queryString = '?' + Object.keys(req.query).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(req.query[key])).join('&')
    const options = {
      "method": req.method,
      "hostname": hostname,
      "port": null,
      "path": apiURL + queryString,
      "headers": {
        "X-Shopify-Access-Token": Access_Token,
        "Content-Type": Content_Type
      }
    }
    const request = http.request(options, function(response) {
      let chunks = []
      response.on("data", function(chunk) {
        chunks.push(chunk)
      })
      response.on("end", function() {
        let body = Buffer.concat(chunks)
        res.json(JSON.parse(body.toString()))
      })
    })
    request.end()
  })
  app.post('/api-call', (req, res) => {
    const apiURL = req.body.api
    delete req.body.api
    const options = {
      "method": req.method,
      "hostname": hostname,
      "port": null,
      "path": apiURL,
      "headers": {
        "X-Shopify-Access-Token": Access_Token,
        "Content-Type": Content_Type
      }
    }
    const request = http.request(options, function(response) {
      let chunks = []
      response.on("data", function(chunk) {
        chunks.push(chunk)
      })
      response.on("end", function() {
        let body = Buffer.concat(chunks)
        res.json(JSON.parse(body.toString()))
      })
    })
    request.write(JSON.stringify(req.body.query))
    request.end()
  })
}
