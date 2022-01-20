import { graphql } from 'gatsby'
import { BlogPostProps } from '../types/blog'
import { Layout } from '../components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css, useTheme } from '@emotion/react'
import { ITheme } from '../style/theme'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
deckDeckGoHighlightElement()

function BlogPostContent({ data }: BlogPostProps) {
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
        >
            <div
                css={css`
                    background-color: white;
                    position: relative;
                    max-width: 750px;
                    padding: 60px;
                    padding-bottom: 0;
                    margin-bottom: 60px;
                    border: solid 3px black;
                    @media (max-width: 1024px) {
                        width: 80%;
                    }
                    @media (max-width: 900px) {
                        width: 70%;
                    }
                    @media (max-width: 700px) {
                        padding: 30px;
                        width: 80%;
                    }
                    @media (max-width: 600px) {
                        border: none;
                        background-color: white;
                    }
                    &:after {
                        content: '';
                        background-color: ${theme.primary};
                        position: absolute;
                        left: 20px;
                        right: -20px;
                        top: 20px;
                        bottom: -20px;
                        z-index: -1;
                        @media (max-width: 600px) {
                            display: none;
                        }
                    }
                `}
            >
                {image && (
                    <GatsbyImage
                        image={image}
                        objectPosition="center"
                        alt="blog-post-image"
                        css={css`
                            margin-bottom: 32px;
                            border: solid 3px black;
                        `}
                    />
                )}
                <h1
                    css={css`
                        padding-bottom: 16px;
                    `}
                >
                    {post.frontmatter.title}
                </h1>
                <div
                    css={css`
                        font-family: ${theme.normalFont};
                        font-size: 20px;
                        margin-bottom: 20px;
                    `}
                >
                    {post.frontmatter.date} {post.frontmatter.duration}
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-bottom: 60px;
                        font-size: 20px;
                        font-weight: 400;
                        max-width: 750px;
                        line-height: 1.58;

                        & strong {
                            font-weight: 600;
                        }
                        .gatsby-resp-image-figure {
                            width: 100%;
                            & figcaption {
                                display: none;
                            }
                        }
                        blockquote {
                            margin-left: 0;
                        }

                        img {
                            margin-top: 30px;
                            width: 100%;
                        }

                        ul {
                            margin-top: 30px;
                            list-style: none;
                            text-align: left;
                            width: 100%;

                            li {
                                display: flex;
                                flex-direction: row;
                                font-family: ${theme.normalFont};
                                padding-bottom: 6px;
                                &:before {
                                    padding-right: 15px;
                                    content: '•';
                                    margin-top: 2px;
                                }
                                & > p {
                                    margin-bottom: 25px;
                                }
                            }
                        }

                        p {
                            font-size: 21px;
                            line-height: 1.58;
                            letter-spacing: -0.003em;
                            margin-bottom: 25px;
                        }
                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6 {
                            margin: 30px 0;
                            font-weight: 600;
                        }
                        a {
                            color: black;
                            text-decoration-color: ${theme.secondary};
                        }
                        .gatsby-resp-image-link {
                            box-shadow: none;
                        }
                    `}
                />
            </div>
        </div>
    )
}

export default function BlogPost({ data }: BlogPostProps) {
    return (
        <Layout
            layoutTitle={`Alexia Toulmet - ${data.markdownRemark.frontmatter.title}`}
        >
            <BlogPostContent data={data} />
        </Layout>
    )
}

export const query = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                duration
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
