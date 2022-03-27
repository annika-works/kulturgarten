const blogQuery = `{
    allContentfulBlogEntry {
        edges {
          node {
            datum
            breadcrumb
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
}`;

module.exports = blogQuery;
