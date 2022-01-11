import { graphql } from 'gatsby'
import { BlogProps } from '../types/blog'
import { Layout } from '../components'
import Badge from '../icons/badge'
import { css, keyframes } from '@emotion/react'
import BlogPostList from '../components/BlogPostList'

function BlogContent({ data }: BlogProps) {
    const rotateAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    `

    return (
        <div
            css={css`
                margin-bottom: 60px;
            `}
        >
            <div
                css={css`
                    position: relative;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    margin-top: 30px;
                `}
            >
                <div
                    css={css`
                        margin-bottom: 30px;
                        align-self: center;
                        & > svg {
                            animation: ${rotateAnimation} 20s linear infinite;
                        }
                    `}
                >
                    <Badge />
                </div>
                <h2
                    css={css`
                        font-size: 30px;
                        position: absolute;
                        top: 80px;
                        z-index: auto;
                        transform: rotate(5deg);
                    `}
                >
                    Writing
                </h2>
                <p
                    css={css`
                        font-weight: 600;
                    `}
                >
                    Writing takes time.
                </p>
                <p
                    css={css`
                        font-weight: 600;
                        margin-bottom: 30px;
                        @media (max-width: 800px) {
                            text-align: center;
                        }
                    `}
                >
                    But when I can, I try to share things with you !
                </p>
            </div>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                `}
            >
                <BlogPostList posts={data.blog.posts} isBlueBG />
            </div>
        </div>
    )
}

export default function Blog(props: BlogProps) {
    return (
        <Layout>
            <BlogContent {...props} />
        </Layout>
    )
}

export const blogListQuery = graphql`
    query MyQuery {
        blog: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//blog//" } }
        ) {
            posts: nodes {
                fields {
                    slug
                }
                frontmatter {
                    date
                    title
                    duration
                    cover_image {
                        childImageSharp {
                            gatsbyImageData(
                                width: 800
                                height: 250
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
