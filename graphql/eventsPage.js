const eventsQuery = `{
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
              eventTag
              start
              title
              short_description
              summary {
                raw
              }
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

module.exports = eventsQuery;
