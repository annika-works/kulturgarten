const path = require('path');
const imprintQuery = require('./graphql/imprintPage');
const blogQuery = require('./graphql/blogPage');
const blogEntryQuery = require('./graphql/blogEntryPage');
const slash = require('slash');
const chalk = require('chalk');
const { ACTIVE_ENV } = require('./configuration');

function getPageConfig(type, edge) {

    const imprint = path.resolve(`src/templates/imprintPage.js`);
    const blog = path.resolve(`src/templates/blogPage.js`);
    const blogEntry = path.resolve(`src/templates/blogEntryPage.js`);

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
        default: 
            return {};
    }

}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const imprintPromise = graphql(imprintQuery).then(result => {
        if(result.errors) {
            throw result.errors;
        }

        result.data.allContentfulImpressum.edges.forEach(edge => {
            createPage(getPageConfig('impressum', edge));
        });
    })
    const blogPagePromise = graphql(blogQuery).then(result => {
        if(result.errors) {
            throw result.errors;
        }

        result.data.allContentfulBlogEntries.edges.forEach(edge => {
            createPage(getPageConfig('blog', edge));
        });
    })
    const blogEntryPagePromise = graphql(blogEntryQuery).then(result => {
        if(result.errors) {
            throw result.errors;
        }

        result.data.allContentfulBlogEntry.edges.forEach(edge => {
            console.log(edge.node.slug, 'edge');
            createPage(getPageConfig('blogEntry', edge));
        });
    })

    await Promise.all([imprintPromise, blogPagePromise, blogEntryPagePromise]);
};

exports.onPreInit = () => {
    console.log(chalk.blue('info ') + 'Active env - ' + chalk.hex('#ffffff').bgHex('#22aa58').bold(` ${ACTIVE_ENV} `));
};