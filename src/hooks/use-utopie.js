import { useStaticQuery, graphql } from 'gatsby';

/**
 *@returns {{title: string; links: Array<{href: string; title: string;}>}} 
 */
export function useUtopie() {
    const {
        allContentfulUtopie: { edges },
    } = useStaticQuery(
        graphql`
            query {
                allContentfulUtopie {
                    edges {
                        node {
                           projectEntries {
                               title
                               description {
                                   raw
                               }
                           }
                        }
                    }
                }
            }
        `
    );
    return edges[0].node;
}
