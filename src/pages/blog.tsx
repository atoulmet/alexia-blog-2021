import { graphql, Link } from 'gatsby'
import { BlogProps } from '../types/blog'
import { Layout, Card, CTASection, CTA } from '../components'

export default function Blog({ data }: BlogProps) {
    const { posts } = data.blog

    return (
        <Layout>
            <div>
                <h1>My blog posts</h1>

                {posts.map((post) => (
                    <article key={post.id}>
                        <Link to={`/blog${post.fields.slug}`}>
                            <h2>{post.frontmatter.title}</h2>
                        </Link>
                        <small>
                            {post.frontmatter.author}, {post.frontmatter.date}
                        </small>
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
                    date(fromNow: true)
                    title
                    author
                }
                excerpt
                id
            }
        }
    }
`
