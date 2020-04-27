const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://chirofoam-dev.netlify.app`,
    title: `Chirofoam™ Memory Foam Mattress`,
    description: `The Chirofoam™ Memory Foam Mattress is designed to get you a more effective and efficient sleep, and helps to relieve back pain. Made in Toronto, ON.`,
    author: `@Team-Innovexia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chirofoam`,
        short_name: `Chirofoam`,
        start_url: `/`,
        background_color: `#243b6b`,
        theme_color: `#243b6b`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
   
  `gatsby-plugin-offline`,
 
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName:'chirofoam-dev.myshopify.com',

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken:'c48261d5691fcaf3fd0c8232ebd54a3a',

        // Set the API version you want to use. For a list of available API versions,
      // see: https://help.shopify.com/en/api/storefront-api/reference/queryroot
      // Defaults to 2019-07
      apiVersion: "2020-01",

      // Set verbose to true to display a verbose output on `npm run develop`
      // or `npm run build`. This prints which nodes are being fetched and how
      // much time was required to fetch and process the data.
      // Defaults to true.
      verbose: true,

      // Number of records to fetch on each request when building the cache
      // at startup. If your application encounters timeout errors during
      // startup, try decreasing this number.
      paginationSize: 250,

      // List of collections you want to fetch.
      // Possible values are: 'shop' and 'content'.
      // Defaults to ['shop', 'content'].
      includeCollections: ["shop", "content"],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134421805-1",
        anonymize: true,
        respectDNT: true,
      },
    },
    {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
      // Exclude specific pages or groups of pages using glob parameters
      // See: https://github.com/isaacs/minimatch
      // The example below will exclude the single `path/to/page` and all routes beginning with `category`
      exclude: [`/category/*`, `/path/to/page`],
      query: `
        {
          wp {
            generalSettings {
              siteUrl
            }
          }

          allSitePage {
            node {
              path
            }
          }
      }`,
      resolveSiteUrl: ({site, allSitePage}) => {
        //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
        return site.wp.generalSettings.siteUrl
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map(node => {
          return {
            url: `${site.wp.generalSettings.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          }
        })
    }
  },
  {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://chirofoam-dev.netlify.app',
        sitemap: 'https://chirofoam-dev.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    
  ],
}