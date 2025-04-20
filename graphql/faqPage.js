const faqQuery = `{
    allContentfulFaq {
        edges {
          node {
            faqQuestion {
                category
                question
                answer {
                    raw
                }
            }
          }
        }
      }
}`;

module.exports = faqQuery;
