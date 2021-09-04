import { graphql } from 'gatsby'
import { BlogPostProps } from '../types/blog'
import { Layout, Card, CTASection, CTA } from '../components'
import { css } from '@emotion/react'

export default function BlogPost({ data }: BlogPostProps) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 750px;
                `}
            >
                <h1>{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>
                <div
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 60px 0;
                        font-size: 21px;
                        font-weight: 400;
                        max-width: 750px;

                        blockquote {
                            margin-left: 0;
                        }

                        img {
                            margin-top: 30px;
                        }

                        ul {
                            margin-top: 30px;
                            list-style: none;
                            li {
                                display: flex;
                                flex-direction: row;
                                &:before {
                                    padding-right: 15px;
                                    content: '•';
                                }
                            }
                        }

                        p {
                            font-size: 21px;
                            line-height: 1.58;
                            letter-spacing: -0.003em;
                            margin-bottom: 0;
                            margin-top: 38px;
                        }
                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6 {
                            margin-top: 56px;
                            margin-bottom: 8px;
                            font-weight: 600;
                        }
                        a {
                        }
                        .gatsby-resp-image-link {
                            box-shadow: none;
                        }
                    `}
                />
            </div>
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
            }
        }
    }
`
