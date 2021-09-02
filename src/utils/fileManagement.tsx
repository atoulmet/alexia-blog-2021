import { graphql, useStaticQuery } from 'gatsby'

export const getAsset = (name: string) => {
    const allAssets = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                originalName
                                src
                                srcSet
                                aspectRatio
                                sizes
                            }
                        }
                    }
                }
            }
        }
    `)
    const file = allAssets?.allFile?.edges?.filter(
        (asset: any) => asset?.node?.name === name
    )

    return file[0]?.node
}

export default getAsset
