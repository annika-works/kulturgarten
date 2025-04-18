const path = require('path');
const imprintQuery = require('./graphql/imprintPage');
const blogQuery = require('./graphql/blogPage');
const blogEntryQuery = require('./graphql/blogEntryPage');
const eventsQuery = require('./graphql/eventsPage');
const faqQuery = require('./graphql/faqPage');
const slash = require('slash');
const chalk = require('chalk');
const { ACTIVE_ENV } = require('./configuration');

function getPageConfig(type, edge) {

    const imprint = path.resolve(`src/templates/imprintPage.js`);
    const blog = path.resolve(`src/templates/blogPage.js`);
    const blogEntry = path.resolve(`src/templates/blogEntryPage.js`);
    const events = path.resolve(`src/templates/eventsPage.js`);
    const faq = path.resolve(`src/templates/faqPage.js`);

    switch (type) {
        case 'impressum':
            return {
                path: '/impressum/',
                component: slash(imprint),
                context: {
                    id: edge.node.id,
                    data: { ...edge.node },
                    slug: edge.node.slug,
                    name: edge.node.title,
                }
            }
        case 'blog':
            return {
                path: '/blog/',
                component: slash(blog),
                context: {
                    id: edge.node.id,
                    data: { ...edge.node },
                    slug: edge.node.slug,
                    name: edge.node.title,
                }
            }
        case 'blogEntry':
            return {
                path: `/blog/${edge.node.slug}`,
                component: slash(blogEntry),
                context: {
                    id: edge.node.id,
                    data: { ...edge.node },
                    slug: edge.node.slug,
                    name: edge.node.title,
                }
            }
        case 'events':
            return {
                path: '/veranstaltungen/',
                component: slash(events),
                context: {
                    id: edge.node.id,
                    data: { ...edge.node },
                    slug: edge.node.slug,
                    name: edge.node.title,
               }
            }
        case 'faq':
            return {
                path: '/faq/',
                component: slash(faq),
                context: {
                    id: edge.node.id,
                    data: { ...edge.node },
                    slug: edge.node.slug,
                    name: edge.node.title,
                }
            }
        default: 
            return {};
    }

}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const createPagePromise = async (query, string, queryResult) => {
      await graphql(query).then(result => {
        if(result.errors) throw result.errors;



          result.data[queryResult].edges.forEach(edge => {
            console.log('FAQ query result:', string, edge);
            createPage(getPageConfig(string, edge));
        })
      })
    }

    const imprintPromise = createPagePromise(imprintQuery, 'impressum', 'allContentfulImpressum' );
    const blogPagePromise = createPagePromise(blogQuery, 'blog', 'allContentfulBlogEntries' );
    const blogEntryPagePromise = createPagePromise(blogEntryQuery, 'blogEntry', 'allContentfulBlogEntry' );
    const eventsPagePromise = createPagePromise(eventsQuery, 'events', 'allContentfulVeranstaltungen' );
    const faqPagePromise = createPagePromise(faqQuery, 'faq', 'allContentfulFaq' );

    await Promise.all([imprintPromise, blogPagePromise, blogEntryPagePromise, eventsPagePromise, faqPagePromise]);
};

exports.onPreInit = () => {
    console.log(chalk.blue('info ') + 'Active env - ' + chalk.hex('#ffffff').bgHex('#22aa58').bold(` ${ACTIVE_ENV} `));
};