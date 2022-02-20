import { useStaticQuery, graphql } from 'gatsby';

/**
 *@returns {{title: string; links: Array<{href: string; title: string;}>}} 
 */
export function useHeader() {
    const {
        allContentfulHeader: { edges },
    } = useStaticQuery(
        graphql`
            query {
                allContentfulHeader {
                    edges {
                        node {
                            links {
                                href
                                title
                                pdf {
                                    file {
                                      fileName
                                      url
                                    }
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
