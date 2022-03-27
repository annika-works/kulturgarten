const path = require('path');
const imprintQuery = require('./graphql/imprintPage');
const blogQuery = require('./graphql/blogEntry');
const slash = require('slash');
const chalk = require('chalk');
const { ACTIVE_ENV } = require('./configuration');

function getPageConfig(type, edge) {

    const imprint = path.resolve(`src/templates/imprintPage.js`);
    const blog = path.resolve(`src/templates/blogPage.js`);

    switch (type) {
        case 'impressum':
            return {
                path: '/impressum',
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
                path: '/blog',
                component: slash(blog),
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
    const blogEntryPromise = graphql(blogQuery).then(result => {
        if(result.errors) {
            throw result.errors;
        }

        result.data.allContentfulBlogEntry.edges.forEach(edge => {
            createPage(getPageConfig('blog', edge));
        });
    })

    await Promise.all([imprintPromise, blogEntryPromise]);
};

exports.onPreInit = () => {
    console.log(chalk.blue('info ') + 'Active env - ' + chalk.hex('#ffffff').bgHex('#22aa58').bold(` ${ACTIVE_ENV} `));
};