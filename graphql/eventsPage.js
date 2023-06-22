const blogQuery = `{
    allContentfulVeranstaltungen {
        edges {
          node {
            filme {
              titel
              datum
              filmstart
              foto {
                title
                url
                description
              }
              beschreibung {
                raw
              }
            }
          }
        }
      }
}`;

module.exports = blogQuery;
