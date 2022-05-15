const path = require("path");
const { SITE_METADATA, ACTIVE_ENV, MANIFEST } = require("./configuration");
require("dotenv").config({ path: `.env.${ACTIVE_ENV}` });

module.exports = {
  siteMetadata: SITE_METADATA,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: MANIFEST,
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: path.resolve("./src"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`Array.prototype.map`, `fetch`, `smoothscroll`],
        flags: `gated`, // only execute the polyfill if the native API is not present
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: () => SITE_METADATA.siteUrl,
        createLinkInHead: true,
        query: `
          {
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-minify",
  ],
};
