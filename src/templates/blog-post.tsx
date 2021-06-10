import React from 'react'
import { graphql } from 'gatsby'

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
