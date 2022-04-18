const blogQuery = `{
    allContentfulBlogEntries {
      edges {
        node {
          entries {
            datum
            slug
            kurzbeschreibung
            titel
            blogfoto {
              title
              file {
                fileName
                url
              }
            }
          }
        }
      }
    }
}`;

module.exports = blogQuery;
