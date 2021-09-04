import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface BlogProps {
    data: {
        blog: {
            posts: Array<Post>
        }
    }
}

export interface Post {
    id: string
    fields: {
        slug: string
    }
    html: string
    frontmatter: {
        title: string
        author: string
        cover_image: {
            childImageSharp: IGatsbyImageData
        }
        date: string
        duration: string
    }
    excerpt: string
}

export interface BlogPostProps {
    data: {
        markdownRemark: Post
    }
}
