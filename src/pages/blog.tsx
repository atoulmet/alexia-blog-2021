import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { IImage } from 'gatsby-plugin-image'
import { BlogProps } from '../types/blog'
import { Layout, Card, CTASection, CTA } from '../components'

export default function Blog({ data }: BlogProps) {
    const { posts } = data.blog

    console.log('==== posts ====', posts)

    return (
        <Layout>
            <div>
                <h1>My blog posts</h1>

                {posts.map((post) => (
                    <article key={post.id}>
                        <GatsbyImage
                            image={getImage(
                                post.frontmatter.cover_image.childImageSharp
                            )}
                            objectPosition="center"
                            alt="yas"
                        />
                        <Link to={`/blog${post.fields.slug}`}>
                            <h2>{post.frontmatter.title}</h2>
                        </Link>
                        <small>{post.frontmatter.date}</small> ·
                        <small> {post.frontmatter.duration}</small>
                        <p>{post.excerpt}</p>
                    </article>
                ))}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query MyQuery {
        blog: allMarkdownRemark {
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
