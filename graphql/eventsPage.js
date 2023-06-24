const blogQuery = `{
    allContentfulVeranstaltungen {
        edges {
          node {
            calendarDates {
              cafe
              cinema
              end
              gartentag
              start
            }
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
