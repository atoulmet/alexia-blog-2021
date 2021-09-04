import { graphql } from 'gatsby'
import { BlogPostProps } from '../types/blog'
import { Layout, Card, CTASection, CTA } from '../components'

export default function BlogPost({ data }: BlogPostProps) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
