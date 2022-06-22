const blogEntryQuery = `{
    allContentfulBlogEntry {
      edges {
        node {
          slug
          datum
          titel
          kurzbeschreibung
          breadcrumb
          blogfoto {
            title
            file {
              fileName
              url
            }
          }
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                __typename
                file {
                  url
                }
                title
              }
            }
          }
        }
      }
    }
}`;

module.exports = blogEntryQuery;