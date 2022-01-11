import { css, useTheme } from '@emotion/react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ITheme } from '../style/theme'
import { Post } from '../types/blog'

interface BlogPostListProps {
    isBlueBG?: boolean
    posts: Array<Post>
}

export default function BlogPostList({ posts, isBlueBG }: BlogPostListProps) {
    return (
        <div>
            {posts.map((post: any) => {
                const theme: ITheme = useTheme()
                const image = getImage(
                    post.frontmatter.cover_image.childImageSharp
                )

                return (
                    <Link
                        css={css`
                            text-decoration: none;
                            color: black;
                        `}
                        to={`/blog${post.fields.slug}`}
                        key={post.id}
                    >
                        <article
                            css={css`
                                max-width: 800px;
                                margin-bottom: 60px;
                                position: relative;
                                &:hover {
                                    transform: translate(2px, 2px);
                                    transition: 200ms;
                                    &:after {
                                        transform: translate(-2px, -2px);
                                        transition: 200ms;
                                    }
                                }
                                &:after {
                                    content: '';
                                    background-color: ${isBlueBG
                                        ? theme.primary
                                        : 'transparent'};
                                    position: absolute;
                                    left: 20px;
                                    right: -20px;
                                    top: 20px;
                                    bottom: -20px;
                                    z-index: -1;
                                    border-radius: 8px;
                                }
                                @media (max-width: 800px) {
                                    width: 85%;
                                    margin: auto;
                                    margin-bottom: 60px;
                                }
                            `}
                        >
                            {image && (
                                <GatsbyImage
                                    image={image}
                                    objectPosition="center"
                                    alt="blog-post-image"
                                    css={css`
                                        border: solid 3px black;
                                        border-bottom: none;
                                        @media (max-width: 800px) {
                                            height: 250px;
                                        }
                                    `}
                                />
                            )}
                            <div
                                css={css`
                                    border: solid 3px black;
                                    background-color: white;
                                    padding: 16px;
                                    border-top: none;
                                `}
                            >
                                <h3
                                    css={css`
                                        text-decoration: underline;
                                        margin-bottom: 4px;
                                    `}
                                >
                                    {post.frontmatter.title}
                                </h3>
                                <small
                                    css={css`
                                        font-family: ${theme.normalFont};
                                        font-size: 20px;
                                    `}
                                >
                                    {post.frontmatter.date}
                                </small>{' '}
                                ·
                                <small
                                    css={css`
                                        font-family: ${theme.normalFont};
                                        font-size: 20px;
                                    `}
                                >
                                    {' '}
                                    {post.frontmatter.duration}
                                </small>
                                <p
                                    css={css`
                                        margin-bottom: 4px;
                                    `}
                                >
                                    {post.excerpt}
                                </p>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </div>
    )
}
