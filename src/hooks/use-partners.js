import { useStaticQuery, graphql } from 'gatsby';

/**
 *@returns {{title: string; links: Array<{href: string; title: string;}>}} 
 */
export function usePartners() {
    const {
        allContentfulPartners: { edges },
    } = useStaticQuery(
        graphql`
            query {
                allContentfulPartners {
                    edges {
                        node {
                            partnerImages {
                                file {
                                    fileName
                                    url
                                }
                                title
                            }
                        }
                    }
                }
            }
        `
    );
    return edges[0].node;
}
