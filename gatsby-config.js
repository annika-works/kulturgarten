const path = require("path");
const { SITE_METADATA, ACTIVE_ENV, MANIFEST } = require("./configuration");
require("dotenv").config({ path: `.env.${ACTIVE_ENV}` });

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.kulturgarten-pinneberg.de',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: { siteUrl },
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
        output:'/',
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              nodes {
                path
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.kulturgarten-pinneberg.de',
        sitemap: 'https://www.kulturgarten-pinneberg.de/sitemap/sitemap-0.xml',
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{userAgent: '*'}]
          },
          'branch-deploy': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null
          }
        }
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-minify",
  ],
};
