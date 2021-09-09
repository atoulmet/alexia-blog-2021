import { graphql } from 'gatsby'
import { Layout, Card, CTASection, CTA } from '../components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css, useTheme } from '@emotion/react'
import { ITheme, hideDotsStyle, highlightTextStyle } from '../style/theme'
import {
    Project,
    PortfolioProps,
    PortfolioProjectProps,
} from '../types/portfolio'

function PortfolioProjectContent({ data }: PortfolioProjectProps) {
    const post = data.markdownRemark
    const theme: ITheme = useTheme()
    const image = getImage(post.frontmatter.cover_image.childImageSharp)

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding-top: 60px;
            `}
        ></div>
    )
}

export default function PortfolioProject({ data }: PortfolioProjectProps) {
    return (
        <Layout>
            <PortfolioProjectContent data={data} />
        </Layout>
    )
}

export const query = graphql`
    query ProjectQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                duration
                ctaLink
                logo {
                    childImageSharp {
                        gatsbyImageData(
                            width: 800
                            height: 250
                            placeholder: BLURRED
                            transformOptions: { fit: COVER, cropFocus: CENTER }
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cover_image {
                    childImageSharp {
                        gatsbyImageData(
                            width: 800
                            height: 250
                            placeholder: BLURRED
                            transformOptions: { fit: COVER, cropFocus: CENTER }
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`
