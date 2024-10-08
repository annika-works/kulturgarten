const blogQuery = `{
    allContentfulVeranstaltungen {
        edges {
          node {
            calendarDates {
              cafe
              end
              gartentag
              kompostworkshop
              survivalkurs
              permakultur
              cinema
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
