const path = require(`path`)
const http = require("https");

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
    const paginate = [...Array(Math.ceil(result.data.allShopifyArticle.totalCount/10))];
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
  app.get('/api-call', function (req, res) {
    res.send('api-call');
    var options = {
      "method": "GET",
      "hostname": "chirofoam.myshopify.com",
      "port": null,
      "path": "/admin/api/2020-01/blogs/49122443319/articles/387195502647/metafields/count.json?namespace=postlike&value_type=string&fields=namespace%2Ckey%2Cvalue",
      "headers": {
        "authorization": "Basic MWJkNTU5YjBlMmY3YTY1ZWU3OTA4NTJlOWQwMWZhMWQ6OGU4YWFjMzQ3MzE2ZjBiNWI3ZTdiNTg5NzE4OGEzNjU=",
        "cache-control": "no-cache"
      }
    };
    const rqst = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });
    rqst.end();
  })
}
