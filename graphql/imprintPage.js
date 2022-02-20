const imprintQuery = `{
    allContentfulImpressum {
        edges {
          node {
            content {
              raw
            }
            titel
          }
        }
      }
}`;

module.exports = imprintQuery;
