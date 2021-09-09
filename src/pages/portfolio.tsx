import { css, useTheme } from '@emotion/react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'
import { Layout, Card, CTASection, CTA, PortfolioMarquee } from '../components'
import { ITheme } from '../style/theme'
import { PortfolioProps } from '../types/portfolio'

function PortfolioContent({ data }: PortfolioProps) {
    console.log('==== data ====', data)
    const theme: ITheme = useTheme()

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 90px;
            `}
        >
            <PortfolioMarquee />
            <p
                css={css`
                    padding-top: 90px;
                    font-family: ${theme.normalFont};
                    padding-bottom: 32px;
                    font-size: 25px;
                `}
            >
                Here are some things I did in the 4+ years since I’m coding in
                web
            </p>
            <section>
                <h2
                    css={css`
                        text-align: center;
                        padding-bottom: 60px;
                    `}
                >
                    Commercial coding
                </h2>
                {data.portfolio.projects.map(({ id, frontmatter }) => {
                    const logo = getImage(frontmatter.logo.childImageSharp)
                    const cover = getImage(
                        frontmatter.cover_image.childImageSharp
                    )

                    const { ctaLink } = frontmatter

                    return (
                        <Card
                            key={id}
                            cssProps={css`
                                display: flex;
                                flex-direction: column;
                                max-width: 1150px;
                                margin-bottom: 60px;
                            `}
                        >
                            <div
                                css={css`
                                    display: flex;
                                    flex-direction: row;
                                `}
                            >
                                <div
                                    css={css`
                                        order: ${frontmatter.layout === 1
                                            ? 1
                                            : 2};
                                        flex: 1;
                                        flex-direction: column;
                                        padding: 30px;
                                        display: flex;
                                        justify-content: center;
                                        ${frontmatter.layout === 1
                                            ? 'padding-right: 0'
                                            : 'padding-left: 0'};
                                    `}
                                >
                                    <div
                                        css={css`
                                            font-family: ${theme.normalFont};
                                            font-size: 22px;
                                            display: flex;
                                            justify-content: flex-start;
                                            text-align: left;
                                        `}
                                    >
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Fuga ut libero quam
                                        sit quidem ducimus officia? Aperiam
                                        recusandae saepe nisi illo veritatis
                                        porro dolorum, eos, culpa, ratione
                                        perspiciatis suscipit corrupti!
                                    </div>
                                    {logo && (
                                        <GatsbyImage
                                            image={logo}
                                            objectPosition="center"
                                            alt="blog-post-image"
                                            css={css`
                                                margin-top: 30px;
                                            `}
                                        />
                                    )}
                                </div>
                                <div
                                    css={css`
                                        flex: 2;
                                        order: ${frontmatter.layout === 1
                                            ? 2
                                            : 1};
                                    `}
                                >
                                    {cover && (
                                        <GatsbyImage
                                            image={cover}
                                            objectPosition="center"
                                            alt="blog-post-image"
                                            css={css`
                                                margin: 30px;
                                                height: 450px;
                                            `}
                                        />
                                    )}
                                </div>
                            </div>
                            {ctaLink && (
                                <div
                                    css={css`
                                        margin-bottom: 30px;
                                        & button {
                                            width: 400px;
                                        }
                                    `}
                                >
                                    <CTA
                                        CTAlabel="Check it out online"
                                        CTAlink={ctaLink}
                                    />
                                </div>
                            )}
                        </Card>
                    )
                })}
            </section>
        </div>
    )
}

export default function Portfolio({ data }: PortfolioProps) {
    return (
        <Layout>
            <PortfolioContent data={data} />
        </Layout>
    )
}

export const portfolioQuery = graphql`
    query PortfolioQuery {
        portfolio: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//portfolio//" } }
        ) {
            projects: nodes {
                fields {
                    slug
                }
                frontmatter {
                    date
                    title
                    layout
                    ctaLink
                    cover_image {
                        childImageSharp {
                            gatsbyImageData(
                                height: 450
                                placeholder: BLURRED
                                transformOptions: {
                                    fit: COVER
                                    cropFocus: CENTER
                                }
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    logo {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                transformOptions: {
                                    fit: COVER
                                    cropFocus: CENTER
                                }
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                excerpt
                id
            }
        }
    }
`
