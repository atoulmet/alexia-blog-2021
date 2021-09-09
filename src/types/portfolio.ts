import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface PortfolioProps {
    data: {
        portfolio: {
            projects: Array<Project>
        }
    }
}

export interface Project {
    id: string
    fields: {
        slug: string
    }
    html: string
    frontmatter: {
        layout: number
        type: string
        title: string
        ctaLink: string
        cover_image: {
            childImageSharp: IGatsbyImageData
        }
        logo: {
            childImageSharp: IGatsbyImageData
        }
        date: string
    }
    excerpt: string
}

export interface PortfolioProjectProps {
    data: {
        markdownRemark: Project
    }
}
