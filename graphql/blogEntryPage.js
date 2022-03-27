const blogEntryQuery = `{
    allContentfulBlogEntry {
      edges {
        node {
            slug
            datum
            titel
            blogfoto {
              title
              file {
                fileName
                url
              }
            }
            content {
                raw
            }
        }
      }
    }
}`;

module.exports = blogEntryQuery;