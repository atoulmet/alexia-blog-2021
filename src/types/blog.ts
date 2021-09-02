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
        date: string
    }
    excerpt: any
}

export interface BlogPostProps {
    data: {
        markdownRemark: Post
    }
}
